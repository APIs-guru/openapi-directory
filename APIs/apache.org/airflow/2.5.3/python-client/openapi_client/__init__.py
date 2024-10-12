# coding: utf-8

# flake8: noqa

"""
    Airflow API (Stable)

    # Overview  To facilitate management, Apache Airflow supports a range of REST API endpoints across its objects. This section provides an overview of the API design, methods, and supported use cases.  Most of the endpoints accept `JSON` as input and return `JSON` responses. This means that you must usually add the following headers to your request: ``` Content-type: application/json Accept: application/json ```  ## Resources  The term `resource` refers to a single type of object in the Airflow metadata. An API is broken up by its endpoint's corresponding resource. The name of a resource is typically plural and expressed in camelCase. Example: `dagRuns`.  Resource names are used as part of endpoint URLs, as well as in API parameters and responses.  ## CRUD Operations  The platform supports **C**reate, **R**ead, **U**pdate, and **D**elete operations on most resources. You can review the standards for these operations and their standard parameters below.  Some endpoints have special behavior as exceptions.  ### Create  To create a resource, you typically submit an HTTP `POST` request with the resource's required metadata in the request body. The response returns a `201 Created` response code upon success with the resource's metadata, including its internal `id`, in the response body.  ### Read  The HTTP `GET` request can be used to read a resource or to list a number of resources.  A resource's `id` can be submitted in the request parameters to read a specific resource. The response usually returns a `200 OK` response code upon success, with the resource's metadata in the response body.  If a `GET` request does not include a specific resource `id`, it is treated as a list request. The response usually returns a `200 OK` response code upon success, with an object containing a list of resources' metadata in the response body.  When reading resources, some common query parameters are usually available. e.g.: ``` v1/connections?limit=25&offset=25 ```  |Query Parameter|Type|Description| |---------------|----|-----------| |limit|integer|Maximum number of objects to fetch. Usually 25 by default| |offset|integer|Offset after which to start returning objects. For use with limit query parameter.|  ### Update  Updating a resource requires the resource `id`, and is typically done using an HTTP `PATCH` request, with the fields to modify in the request body. The response usually returns a `200 OK` response code upon success, with information about the modified resource in the response body.  ### Delete  Deleting a resource requires the resource `id` and is typically executing via an HTTP `DELETE` request. The response usually returns a `204 No Content` response code upon success.  ## Conventions  - Resource names are plural and expressed in camelCase. - Names are consistent between URL parameter name and field name.  - Field names are in snake_case. ```json {     \"name\": \"string\",     \"slots\": 0,     \"occupied_slots\": 0,     \"used_slots\": 0,     \"queued_slots\": 0,     \"open_slots\": 0 } ```  ### Update Mask  Update mask is available as a query parameter in patch endpoints. It is used to notify the API which fields you want to update. Using `update_mask` makes it easier to update objects by helping the server know which fields to update in an object instead of updating all fields. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.  Example: ```   resource = request.get('/resource/my-id').json()   resource['my_field'] = 'new-value'   request.patch('/resource/my-id?update_mask=my_field', data=json.dumps(resource)) ```  ## Versioning and Endpoint Lifecycle  - API versioning is not synchronized to specific releases of the Apache Airflow. - APIs are designed to be backward compatible. - Any changes to the API will first go through a deprecation phase.  # Trying the API  You can use a third party client, such as [curl](https://curl.haxx.se/), [HTTPie](https://httpie.org/), [Postman](https://www.postman.com/) or [the Insomnia rest client](https://insomnia.rest/) to test the Apache Airflow API.  Note that you will need to pass credentials data.  For e.g., here is how to pause a DAG with [curl](https://curl.haxx.se/), when basic authorization is used: ```bash curl -X PATCH 'https://example.com/api/v1/dags/{dag_id}?update_mask=is_paused' \\ -H 'Content-Type: application/json' \\ --user \"username:password\" \\ -d '{     \"is_paused\": true }' ```  Using a graphical tool such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), it is possible to import the API specifications directly:  1. Download the API specification by clicking the **Download** button at top of this document 2. Import the JSON specification in the graphical tool of your choice.   - In *Postman*, you can click the **import** button at the top   - With *Insomnia*, you can just drag-and-drop the file on the UI  Note that with *Postman*, you can also generate code snippets by selecting a request and clicking on the **Code** button.  ## Enabling CORS  [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a browser security feature that restricts HTTP requests that are initiated from scripts running in the browser.  For details on enabling/configuring CORS, see [Enabling CORS](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Authentication  To be able to meet the requirements of many organizations, Airflow supports many authentication methods, and it is even possible to add your own method.  If you want to check which auth backend is currently set, you can use `airflow config get-value api auth_backends` command as in the example below. ```bash $ airflow config get-value api auth_backends airflow.api.auth.backend.basic_auth ``` The default is to deny all requests.  For details on configuring the authentication, see [API Authorization](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Errors  We follow the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807) also known as Problem Details for HTTP APIs. As with our normal API responses, your client must be prepared to gracefully handle additional members of the response.  ## Unauthenticated  This indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. Please check that you have valid credentials.  ## PermissionDenied  This response means that the server understood the request but refuses to authorize it because it lacks sufficient rights to the resource. It happens when you do not have the necessary permission to execute the action you performed. You need to get the appropriate permissions in other to resolve this error.  ## BadRequest  This response means that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). To resolve this, please ensure that your syntax is correct.  ## NotFound  This client error response indicates that the server cannot find the requested resource.  ## MethodNotAllowed  Indicates that the request method is known by the server but is not supported by the target resource.  ## NotAcceptable  The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.  ## AlreadyExists  The request could not be completed due to a conflict with the current state of the target resource, e.g. the resource it tries to create already exists.  ## Unknown  This means that the server encountered an unexpected condition that prevented it from fulfilling the request. 

    The version of the OpenAPI document: 2.5.3
    Contact: dev@airflow.apache.org
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.config_api import ConfigApi
from openapi_client.api.connection_api import ConnectionApi
from openapi_client.api.dag_api import DAGApi
from openapi_client.api.dag_run_api import DAGRunApi
from openapi_client.api.dag_warning_api import DagWarningApi
from openapi_client.api.dataset_api import DatasetApi
from openapi_client.api.event_log_api import EventLogApi
from openapi_client.api.import_error_api import ImportErrorApi
from openapi_client.api.monitoring_api import MonitoringApi
from openapi_client.api.permission_api import PermissionApi
from openapi_client.api.plugin_api import PluginApi
from openapi_client.api.pool_api import PoolApi
from openapi_client.api.provider_api import ProviderApi
from openapi_client.api.role_api import RoleApi
from openapi_client.api.task_instance_api import TaskInstanceApi
from openapi_client.api.user_api import UserApi
from openapi_client.api.variable_api import VariableApi
from openapi_client.api.x_com_api import XComApi

# import ApiClient
from openapi_client.api_response import ApiResponse
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiAttributeError
from openapi_client.exceptions import ApiException

# import models into sdk package
from openapi_client.models.action import Action
from openapi_client.models.action_collection import ActionCollection
from openapi_client.models.action_resource import ActionResource
from openapi_client.models.basic_dag_run import BasicDAGRun
from openapi_client.models.class_reference import ClassReference
from openapi_client.models.clear_dag_run import ClearDagRun
from openapi_client.models.clear_dag_run200_response import ClearDagRun200Response
from openapi_client.models.clear_task_instances import ClearTaskInstances
from openapi_client.models.collection_info import CollectionInfo
from openapi_client.models.config import Config
from openapi_client.models.config_option import ConfigOption
from openapi_client.models.config_section import ConfigSection
from openapi_client.models.connection import Connection
from openapi_client.models.connection_collection import ConnectionCollection
from openapi_client.models.connection_collection_item import ConnectionCollectionItem
from openapi_client.models.connection_test import ConnectionTest
from openapi_client.models.cron_expression import CronExpression
from openapi_client.models.dag import DAG
from openapi_client.models.dag_collection import DAGCollection
from openapi_client.models.dag_detail import DAGDetail
from openapi_client.models.dag_run import DAGRun
from openapi_client.models.dag_run_collection import DAGRunCollection
from openapi_client.models.dag_schedule_dataset_reference import DagScheduleDatasetReference
from openapi_client.models.dag_state import DagState
from openapi_client.models.dag_warning import DagWarning
from openapi_client.models.dag_warning_collection import DagWarningCollection
from openapi_client.models.dataset import Dataset
from openapi_client.models.dataset_collection import DatasetCollection
from openapi_client.models.dataset_event import DatasetEvent
from openapi_client.models.dataset_event_collection import DatasetEventCollection
from openapi_client.models.error import Error
from openapi_client.models.event_log import EventLog
from openapi_client.models.event_log_collection import EventLogCollection
from openapi_client.models.extra_link import ExtraLink
from openapi_client.models.extra_link_collection import ExtraLinkCollection
from openapi_client.models.get_dag_source200_response import GetDagSource200Response
from openapi_client.models.get_log200_response import GetLog200Response
from openapi_client.models.get_providers200_response import GetProviders200Response
from openapi_client.models.health_info import HealthInfo
from openapi_client.models.health_status import HealthStatus
from openapi_client.models.import_error import ImportError
from openapi_client.models.import_error_collection import ImportErrorCollection
from openapi_client.models.job import Job
from openapi_client.models.list_dag_runs_form import ListDagRunsForm
from openapi_client.models.list_task_instance_form import ListTaskInstanceForm
from openapi_client.models.metadatabase_status import MetadatabaseStatus
from openapi_client.models.plugin_collection import PluginCollection
from openapi_client.models.plugin_collection_item import PluginCollectionItem
from openapi_client.models.pool import Pool
from openapi_client.models.pool_collection import PoolCollection
from openapi_client.models.provider import Provider
from openapi_client.models.provider_collection import ProviderCollection
from openapi_client.models.relative_delta import RelativeDelta
from openapi_client.models.resource import Resource
from openapi_client.models.role import Role
from openapi_client.models.role_collection import RoleCollection
from openapi_client.models.sla_miss import SLAMiss
from openapi_client.models.schedule_interval import ScheduleInterval
from openapi_client.models.scheduler_status import SchedulerStatus
from openapi_client.models.set_dag_run_note import SetDagRunNote
from openapi_client.models.set_task_instance_note import SetTaskInstanceNote
from openapi_client.models.tag import Tag
from openapi_client.models.task import Task
from openapi_client.models.task_collection import TaskCollection
from openapi_client.models.task_extra_links_inner import TaskExtraLinksInner
from openapi_client.models.task_instance import TaskInstance
from openapi_client.models.task_instance_collection import TaskInstanceCollection
from openapi_client.models.task_instance_reference import TaskInstanceReference
from openapi_client.models.task_instance_reference_collection import TaskInstanceReferenceCollection
from openapi_client.models.task_outlet_dataset_reference import TaskOutletDatasetReference
from openapi_client.models.task_state import TaskState
from openapi_client.models.time_delta import TimeDelta
from openapi_client.models.trigger import Trigger
from openapi_client.models.trigger_rule import TriggerRule
from openapi_client.models.update_dag_run_state import UpdateDagRunState
from openapi_client.models.update_task_instance import UpdateTaskInstance
from openapi_client.models.update_task_instances_state import UpdateTaskInstancesState
from openapi_client.models.user import User
from openapi_client.models.user_collection import UserCollection
from openapi_client.models.user_collection_item import UserCollectionItem
from openapi_client.models.user_collection_item_roles_inner import UserCollectionItemRolesInner
from openapi_client.models.variable import Variable
from openapi_client.models.variable_collection import VariableCollection
from openapi_client.models.variable_collection_item import VariableCollectionItem
from openapi_client.models.version_info import VersionInfo
from openapi_client.models.weight_rule import WeightRule
from openapi_client.models.x_com import XCom
from openapi_client.models.x_com_collection import XComCollection
from openapi_client.models.x_com_collection_item import XComCollectionItem
