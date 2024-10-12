# coding: utf-8

"""
    Airflow API (Stable)

    # Overview  To facilitate management, Apache Airflow supports a range of REST API endpoints across its objects. This section provides an overview of the API design, methods, and supported use cases.  Most of the endpoints accept `JSON` as input and return `JSON` responses. This means that you must usually add the following headers to your request: ``` Content-type: application/json Accept: application/json ```  ## Resources  The term `resource` refers to a single type of object in the Airflow metadata. An API is broken up by its endpoint's corresponding resource. The name of a resource is typically plural and expressed in camelCase. Example: `dagRuns`.  Resource names are used as part of endpoint URLs, as well as in API parameters and responses.  ## CRUD Operations  The platform supports **C**reate, **R**ead, **U**pdate, and **D**elete operations on most resources. You can review the standards for these operations and their standard parameters below.  Some endpoints have special behavior as exceptions.  ### Create  To create a resource, you typically submit an HTTP `POST` request with the resource's required metadata in the request body. The response returns a `201 Created` response code upon success with the resource's metadata, including its internal `id`, in the response body.  ### Read  The HTTP `GET` request can be used to read a resource or to list a number of resources.  A resource's `id` can be submitted in the request parameters to read a specific resource. The response usually returns a `200 OK` response code upon success, with the resource's metadata in the response body.  If a `GET` request does not include a specific resource `id`, it is treated as a list request. The response usually returns a `200 OK` response code upon success, with an object containing a list of resources' metadata in the response body.  When reading resources, some common query parameters are usually available. e.g.: ``` v1/connections?limit=25&offset=25 ```  |Query Parameter|Type|Description| |---------------|----|-----------| |limit|integer|Maximum number of objects to fetch. Usually 25 by default| |offset|integer|Offset after which to start returning objects. For use with limit query parameter.|  ### Update  Updating a resource requires the resource `id`, and is typically done using an HTTP `PATCH` request, with the fields to modify in the request body. The response usually returns a `200 OK` response code upon success, with information about the modified resource in the response body.  ### Delete  Deleting a resource requires the resource `id` and is typically executing via an HTTP `DELETE` request. The response usually returns a `204 No Content` response code upon success.  ## Conventions  - Resource names are plural and expressed in camelCase. - Names are consistent between URL parameter name and field name.  - Field names are in snake_case. ```json {     \"name\": \"string\",     \"slots\": 0,     \"occupied_slots\": 0,     \"used_slots\": 0,     \"queued_slots\": 0,     \"open_slots\": 0 } ```  ### Update Mask  Update mask is available as a query parameter in patch endpoints. It is used to notify the API which fields you want to update. Using `update_mask` makes it easier to update objects by helping the server know which fields to update in an object instead of updating all fields. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.  Example: ```   resource = request.get('/resource/my-id').json()   resource['my_field'] = 'new-value'   request.patch('/resource/my-id?update_mask=my_field', data=json.dumps(resource)) ```  ## Versioning and Endpoint Lifecycle  - API versioning is not synchronized to specific releases of the Apache Airflow. - APIs are designed to be backward compatible. - Any changes to the API will first go through a deprecation phase.  # Trying the API  You can use a third party client, such as [curl](https://curl.haxx.se/), [HTTPie](https://httpie.org/), [Postman](https://www.postman.com/) or [the Insomnia rest client](https://insomnia.rest/) to test the Apache Airflow API.  Note that you will need to pass credentials data.  For e.g., here is how to pause a DAG with [curl](https://curl.haxx.se/), when basic authorization is used: ```bash curl -X PATCH 'https://example.com/api/v1/dags/{dag_id}?update_mask=is_paused' \\ -H 'Content-Type: application/json' \\ --user \"username:password\" \\ -d '{     \"is_paused\": true }' ```  Using a graphical tool such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), it is possible to import the API specifications directly:  1. Download the API specification by clicking the **Download** button at top of this document 2. Import the JSON specification in the graphical tool of your choice.   - In *Postman*, you can click the **import** button at the top   - With *Insomnia*, you can just drag-and-drop the file on the UI  Note that with *Postman*, you can also generate code snippets by selecting a request and clicking on the **Code** button.  ## Enabling CORS  [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a browser security feature that restricts HTTP requests that are initiated from scripts running in the browser.  For details on enabling/configuring CORS, see [Enabling CORS](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Authentication  To be able to meet the requirements of many organizations, Airflow supports many authentication methods, and it is even possible to add your own method.  If you want to check which auth backend is currently set, you can use `airflow config get-value api auth_backends` command as in the example below. ```bash $ airflow config get-value api auth_backends airflow.api.auth.backend.basic_auth ``` The default is to deny all requests.  For details on configuring the authentication, see [API Authorization](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Errors  We follow the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807) also known as Problem Details for HTTP APIs. As with our normal API responses, your client must be prepared to gracefully handle additional members of the response.  ## Unauthenticated  This indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. Please check that you have valid credentials.  ## PermissionDenied  This response means that the server understood the request but refuses to authorize it because it lacks sufficient rights to the resource. It happens when you do not have the necessary permission to execute the action you performed. You need to get the appropriate permissions in other to resolve this error.  ## BadRequest  This response means that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). To resolve this, please ensure that your syntax is correct.  ## NotFound  This client error response indicates that the server cannot find the requested resource.  ## MethodNotAllowed  Indicates that the request method is known by the server but is not supported by the target resource.  ## NotAcceptable  The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.  ## AlreadyExists  The request could not be completed due to a conflict with the current state of the target resource, e.g. the resource it tries to create already exists.  ## Unknown  This means that the server encountered an unexpected condition that prevented it from fulfilling the request. 

    The version of the OpenAPI document: 2.5.3
    Contact: dev@airflow.apache.org
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.schedule_interval import ScheduleInterval
from openapi_client.models.tag import Tag
from typing import Optional, Set
from typing_extensions import Self

class DAG(BaseModel):
    """
    DAG
    """ # noqa: E501
    dag_id: Optional[StrictStr] = Field(default=None, description="The ID of the DAG.")
    default_view: Optional[StrictStr] = Field(default=None, description="Default view of the DAG inside the webserver  *New in version 2.3.0* ")
    description: Optional[StrictStr] = Field(default=None, description="User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents. ")
    file_token: Optional[StrictStr] = Field(default=None, description="The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change. ")
    fileloc: Optional[StrictStr] = Field(default=None, description="The absolute path to the file.")
    has_import_errors: Optional[StrictBool] = Field(default=None, description="Whether the DAG has import errors  *New in version 2.3.0* ")
    has_task_concurrency_limits: Optional[StrictBool] = Field(default=None, description="Whether the DAG has task concurrency limits  *New in version 2.3.0* ")
    is_active: Optional[StrictBool] = Field(default=None, description="Whether the DAG is currently seen by the scheduler(s).  *New in version 2.1.1*  *Changed in version 2.2.0*&#58; Field is read-only. ")
    is_paused: Optional[StrictBool] = Field(default=None, description="Whether the DAG is paused.")
    is_subdag: Optional[StrictBool] = Field(default=None, description="Whether the DAG is SubDAG.")
    last_expired: Optional[datetime] = Field(default=None, description="Time when the DAG last received a refresh signal (e.g. the DAG's \"refresh\" button was clicked in the web UI)  *New in version 2.3.0* ")
    last_parsed_time: Optional[datetime] = Field(default=None, description="The last time the DAG was parsed.  *New in version 2.3.0* ")
    last_pickled: Optional[datetime] = Field(default=None, description="The last time the DAG was pickled.  *New in version 2.3.0* ")
    max_active_runs: Optional[StrictInt] = Field(default=None, description="Maximum number of active DAG runs for the DAG  *New in version 2.3.0* ")
    max_active_tasks: Optional[StrictInt] = Field(default=None, description="Maximum number of active tasks that can be run on the DAG  *New in version 2.3.0* ")
    next_dagrun: Optional[datetime] = Field(default=None, description="The logical date of the next dag run.  *New in version 2.3.0* ")
    next_dagrun_create_after: Optional[datetime] = Field(default=None, description="Earliest time at which this ``next_dagrun`` can be created.  *New in version 2.3.0* ")
    next_dagrun_data_interval_end: Optional[datetime] = Field(default=None, description="The end of the interval of the next dag run.  *New in version 2.3.0* ")
    next_dagrun_data_interval_start: Optional[datetime] = Field(default=None, description="The start of the interval of the next dag run.  *New in version 2.3.0* ")
    owners: Optional[List[StrictStr]] = None
    pickle_id: Optional[StrictStr] = Field(default=None, description="Foreign key to the latest pickle_id  *New in version 2.3.0* ")
    root_dag_id: Optional[StrictStr] = Field(default=None, description="If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.")
    schedule_interval: Optional[ScheduleInterval] = None
    scheduler_lock: Optional[StrictBool] = Field(default=None, description="Whether (one of) the scheduler is scheduling this DAG at the moment  *New in version 2.3.0* ")
    tags: Optional[List[Tag]] = Field(default=None, description="List of tags.")
    timetable_description: Optional[StrictStr] = Field(default=None, description="Timetable/Schedule Interval description.  *New in version 2.3.0* ")
    __properties: ClassVar[List[str]] = ["dag_id", "default_view", "description", "file_token", "fileloc", "has_import_errors", "has_task_concurrency_limits", "is_active", "is_paused", "is_subdag", "last_expired", "last_parsed_time", "last_pickled", "max_active_runs", "max_active_tasks", "next_dagrun", "next_dagrun_create_after", "next_dagrun_data_interval_end", "next_dagrun_data_interval_start", "owners", "pickle_id", "root_dag_id", "schedule_interval", "scheduler_lock", "tags", "timetable_description"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of DAG from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        * OpenAPI `readOnly` fields are excluded.
        """
        excluded_fields: Set[str] = set([
            "dag_id",
            "default_view",
            "description",
            "file_token",
            "fileloc",
            "has_import_errors",
            "has_task_concurrency_limits",
            "is_active",
            "is_subdag",
            "last_expired",
            "last_parsed_time",
            "last_pickled",
            "max_active_runs",
            "max_active_tasks",
            "next_dagrun",
            "next_dagrun_create_after",
            "next_dagrun_data_interval_end",
            "next_dagrun_data_interval_start",
            "owners",
            "pickle_id",
            "root_dag_id",
            "scheduler_lock",
            "tags",
            "timetable_description",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of schedule_interval
        if self.schedule_interval:
            _dict['schedule_interval'] = self.schedule_interval.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in tags (list)
        _items = []
        if self.tags:
            for _item_tags in self.tags:
                if _item_tags:
                    _items.append(_item_tags.to_dict())
            _dict['tags'] = _items
        # set to None if default_view (nullable) is None
        # and model_fields_set contains the field
        if self.default_view is None and "default_view" in self.model_fields_set:
            _dict['default_view'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if has_import_errors (nullable) is None
        # and model_fields_set contains the field
        if self.has_import_errors is None and "has_import_errors" in self.model_fields_set:
            _dict['has_import_errors'] = None

        # set to None if has_task_concurrency_limits (nullable) is None
        # and model_fields_set contains the field
        if self.has_task_concurrency_limits is None and "has_task_concurrency_limits" in self.model_fields_set:
            _dict['has_task_concurrency_limits'] = None

        # set to None if is_active (nullable) is None
        # and model_fields_set contains the field
        if self.is_active is None and "is_active" in self.model_fields_set:
            _dict['is_active'] = None

        # set to None if is_paused (nullable) is None
        # and model_fields_set contains the field
        if self.is_paused is None and "is_paused" in self.model_fields_set:
            _dict['is_paused'] = None

        # set to None if last_expired (nullable) is None
        # and model_fields_set contains the field
        if self.last_expired is None and "last_expired" in self.model_fields_set:
            _dict['last_expired'] = None

        # set to None if last_parsed_time (nullable) is None
        # and model_fields_set contains the field
        if self.last_parsed_time is None and "last_parsed_time" in self.model_fields_set:
            _dict['last_parsed_time'] = None

        # set to None if last_pickled (nullable) is None
        # and model_fields_set contains the field
        if self.last_pickled is None and "last_pickled" in self.model_fields_set:
            _dict['last_pickled'] = None

        # set to None if max_active_runs (nullable) is None
        # and model_fields_set contains the field
        if self.max_active_runs is None and "max_active_runs" in self.model_fields_set:
            _dict['max_active_runs'] = None

        # set to None if max_active_tasks (nullable) is None
        # and model_fields_set contains the field
        if self.max_active_tasks is None and "max_active_tasks" in self.model_fields_set:
            _dict['max_active_tasks'] = None

        # set to None if next_dagrun (nullable) is None
        # and model_fields_set contains the field
        if self.next_dagrun is None and "next_dagrun" in self.model_fields_set:
            _dict['next_dagrun'] = None

        # set to None if next_dagrun_create_after (nullable) is None
        # and model_fields_set contains the field
        if self.next_dagrun_create_after is None and "next_dagrun_create_after" in self.model_fields_set:
            _dict['next_dagrun_create_after'] = None

        # set to None if next_dagrun_data_interval_end (nullable) is None
        # and model_fields_set contains the field
        if self.next_dagrun_data_interval_end is None and "next_dagrun_data_interval_end" in self.model_fields_set:
            _dict['next_dagrun_data_interval_end'] = None

        # set to None if next_dagrun_data_interval_start (nullable) is None
        # and model_fields_set contains the field
        if self.next_dagrun_data_interval_start is None and "next_dagrun_data_interval_start" in self.model_fields_set:
            _dict['next_dagrun_data_interval_start'] = None

        # set to None if pickle_id (nullable) is None
        # and model_fields_set contains the field
        if self.pickle_id is None and "pickle_id" in self.model_fields_set:
            _dict['pickle_id'] = None

        # set to None if root_dag_id (nullable) is None
        # and model_fields_set contains the field
        if self.root_dag_id is None and "root_dag_id" in self.model_fields_set:
            _dict['root_dag_id'] = None

        # set to None if schedule_interval (nullable) is None
        # and model_fields_set contains the field
        if self.schedule_interval is None and "schedule_interval" in self.model_fields_set:
            _dict['schedule_interval'] = None

        # set to None if scheduler_lock (nullable) is None
        # and model_fields_set contains the field
        if self.scheduler_lock is None and "scheduler_lock" in self.model_fields_set:
            _dict['scheduler_lock'] = None

        # set to None if tags (nullable) is None
        # and model_fields_set contains the field
        if self.tags is None and "tags" in self.model_fields_set:
            _dict['tags'] = None

        # set to None if timetable_description (nullable) is None
        # and model_fields_set contains the field
        if self.timetable_description is None and "timetable_description" in self.model_fields_set:
            _dict['timetable_description'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of DAG from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "dag_id": obj.get("dag_id"),
            "default_view": obj.get("default_view"),
            "description": obj.get("description"),
            "file_token": obj.get("file_token"),
            "fileloc": obj.get("fileloc"),
            "has_import_errors": obj.get("has_import_errors"),
            "has_task_concurrency_limits": obj.get("has_task_concurrency_limits"),
            "is_active": obj.get("is_active"),
            "is_paused": obj.get("is_paused"),
            "is_subdag": obj.get("is_subdag"),
            "last_expired": obj.get("last_expired"),
            "last_parsed_time": obj.get("last_parsed_time"),
            "last_pickled": obj.get("last_pickled"),
            "max_active_runs": obj.get("max_active_runs"),
            "max_active_tasks": obj.get("max_active_tasks"),
            "next_dagrun": obj.get("next_dagrun"),
            "next_dagrun_create_after": obj.get("next_dagrun_create_after"),
            "next_dagrun_data_interval_end": obj.get("next_dagrun_data_interval_end"),
            "next_dagrun_data_interval_start": obj.get("next_dagrun_data_interval_start"),
            "owners": obj.get("owners"),
            "pickle_id": obj.get("pickle_id"),
            "root_dag_id": obj.get("root_dag_id"),
            "schedule_interval": ScheduleInterval.from_dict(obj["schedule_interval"]) if obj.get("schedule_interval") is not None else None,
            "scheduler_lock": obj.get("scheduler_lock"),
            "tags": [Tag.from_dict(_item) for _item in obj["tags"]] if obj.get("tags") is not None else None,
            "timetable_description": obj.get("timetable_description")
        })
        return _obj


