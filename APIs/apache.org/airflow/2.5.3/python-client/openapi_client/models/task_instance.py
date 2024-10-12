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

from pydantic import BaseModel, ConfigDict, Field, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.job import Job
from openapi_client.models.sla_miss import SLAMiss
from openapi_client.models.task_state import TaskState
from openapi_client.models.trigger import Trigger
from typing import Optional, Set
from typing_extensions import Self

class TaskInstance(BaseModel):
    """
    TaskInstance
    """ # noqa: E501
    dag_id: Optional[StrictStr] = None
    dag_run_id: Optional[StrictStr] = Field(default=None, description="The DagRun ID for this task instance  *New in version 2.3.0* ")
    duration: Optional[Union[StrictFloat, StrictInt]] = None
    end_date: Optional[StrictStr] = None
    execution_date: Optional[StrictStr] = None
    executor_config: Optional[StrictStr] = None
    hostname: Optional[StrictStr] = None
    map_index: Optional[StrictInt] = None
    max_tries: Optional[StrictInt] = None
    note: Optional[StrictStr] = Field(default=None, description="Contains manually entered notes by the user about the TaskInstance.  *New in version 2.5.0* ")
    operator: Optional[StrictStr] = Field(default=None, description="*Changed in version 2.1.1*&#58; Field becomes nullable. ")
    pid: Optional[StrictInt] = None
    pool: Optional[StrictStr] = None
    pool_slots: Optional[StrictInt] = None
    priority_weight: Optional[StrictInt] = None
    queue: Optional[StrictStr] = None
    queued_when: Optional[StrictStr] = None
    rendered_fields: Optional[Dict[str, Any]] = Field(default=None, description="JSON object describing rendered fields.  *New in version 2.3.0* ")
    sla_miss: Optional[SLAMiss] = None
    start_date: Optional[StrictStr] = None
    state: Optional[TaskState] = None
    task_id: Optional[StrictStr] = None
    trigger: Optional[Trigger] = None
    triggerer_job: Optional[Job] = None
    try_number: Optional[StrictInt] = None
    unixname: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["dag_id", "dag_run_id", "duration", "end_date", "execution_date", "executor_config", "hostname", "map_index", "max_tries", "note", "operator", "pid", "pool", "pool_slots", "priority_weight", "queue", "queued_when", "rendered_fields", "sla_miss", "start_date", "state", "task_id", "trigger", "triggerer_job", "try_number", "unixname"]

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
        """Create an instance of TaskInstance from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of sla_miss
        if self.sla_miss:
            _dict['sla_miss'] = self.sla_miss.to_dict()
        # override the default output from pydantic by calling `to_dict()` of trigger
        if self.trigger:
            _dict['trigger'] = self.trigger.to_dict()
        # override the default output from pydantic by calling `to_dict()` of triggerer_job
        if self.triggerer_job:
            _dict['triggerer_job'] = self.triggerer_job.to_dict()
        # set to None if duration (nullable) is None
        # and model_fields_set contains the field
        if self.duration is None and "duration" in self.model_fields_set:
            _dict['duration'] = None

        # set to None if end_date (nullable) is None
        # and model_fields_set contains the field
        if self.end_date is None and "end_date" in self.model_fields_set:
            _dict['end_date'] = None

        # set to None if note (nullable) is None
        # and model_fields_set contains the field
        if self.note is None and "note" in self.model_fields_set:
            _dict['note'] = None

        # set to None if operator (nullable) is None
        # and model_fields_set contains the field
        if self.operator is None and "operator" in self.model_fields_set:
            _dict['operator'] = None

        # set to None if pid (nullable) is None
        # and model_fields_set contains the field
        if self.pid is None and "pid" in self.model_fields_set:
            _dict['pid'] = None

        # set to None if priority_weight (nullable) is None
        # and model_fields_set contains the field
        if self.priority_weight is None and "priority_weight" in self.model_fields_set:
            _dict['priority_weight'] = None

        # set to None if queue (nullable) is None
        # and model_fields_set contains the field
        if self.queue is None and "queue" in self.model_fields_set:
            _dict['queue'] = None

        # set to None if queued_when (nullable) is None
        # and model_fields_set contains the field
        if self.queued_when is None and "queued_when" in self.model_fields_set:
            _dict['queued_when'] = None

        # set to None if sla_miss (nullable) is None
        # and model_fields_set contains the field
        if self.sla_miss is None and "sla_miss" in self.model_fields_set:
            _dict['sla_miss'] = None

        # set to None if start_date (nullable) is None
        # and model_fields_set contains the field
        if self.start_date is None and "start_date" in self.model_fields_set:
            _dict['start_date'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TaskInstance from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "dag_id": obj.get("dag_id"),
            "dag_run_id": obj.get("dag_run_id"),
            "duration": obj.get("duration"),
            "end_date": obj.get("end_date"),
            "execution_date": obj.get("execution_date"),
            "executor_config": obj.get("executor_config"),
            "hostname": obj.get("hostname"),
            "map_index": obj.get("map_index"),
            "max_tries": obj.get("max_tries"),
            "note": obj.get("note"),
            "operator": obj.get("operator"),
            "pid": obj.get("pid"),
            "pool": obj.get("pool"),
            "pool_slots": obj.get("pool_slots"),
            "priority_weight": obj.get("priority_weight"),
            "queue": obj.get("queue"),
            "queued_when": obj.get("queued_when"),
            "rendered_fields": obj.get("rendered_fields"),
            "sla_miss": SLAMiss.from_dict(obj["sla_miss"]) if obj.get("sla_miss") is not None else None,
            "start_date": obj.get("start_date"),
            "state": obj.get("state"),
            "task_id": obj.get("task_id"),
            "trigger": Trigger.from_dict(obj["trigger"]) if obj.get("trigger") is not None else None,
            "triggerer_job": Job.from_dict(obj["triggerer_job"]) if obj.get("triggerer_job") is not None else None,
            "try_number": obj.get("try_number"),
            "unixname": obj.get("unixname")
        })
        return _obj


