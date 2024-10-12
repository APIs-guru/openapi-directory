# coding: utf-8

"""
    Airflow API (Stable)

    # Overview  To facilitate management, Apache Airflow supports a range of REST API endpoints across its objects. This section provides an overview of the API design, methods, and supported use cases.  Most of the endpoints accept `JSON` as input and return `JSON` responses. This means that you must usually add the following headers to your request: ``` Content-type: application/json Accept: application/json ```  ## Resources  The term `resource` refers to a single type of object in the Airflow metadata. An API is broken up by its endpoint's corresponding resource. The name of a resource is typically plural and expressed in camelCase. Example: `dagRuns`.  Resource names are used as part of endpoint URLs, as well as in API parameters and responses.  ## CRUD Operations  The platform supports **C**reate, **R**ead, **U**pdate, and **D**elete operations on most resources. You can review the standards for these operations and their standard parameters below.  Some endpoints have special behavior as exceptions.  ### Create  To create a resource, you typically submit an HTTP `POST` request with the resource's required metadata in the request body. The response returns a `201 Created` response code upon success with the resource's metadata, including its internal `id`, in the response body.  ### Read  The HTTP `GET` request can be used to read a resource or to list a number of resources.  A resource's `id` can be submitted in the request parameters to read a specific resource. The response usually returns a `200 OK` response code upon success, with the resource's metadata in the response body.  If a `GET` request does not include a specific resource `id`, it is treated as a list request. The response usually returns a `200 OK` response code upon success, with an object containing a list of resources' metadata in the response body.  When reading resources, some common query parameters are usually available. e.g.: ``` v1/connections?limit=25&offset=25 ```  |Query Parameter|Type|Description| |---------------|----|-----------| |limit|integer|Maximum number of objects to fetch. Usually 25 by default| |offset|integer|Offset after which to start returning objects. For use with limit query parameter.|  ### Update  Updating a resource requires the resource `id`, and is typically done using an HTTP `PATCH` request, with the fields to modify in the request body. The response usually returns a `200 OK` response code upon success, with information about the modified resource in the response body.  ### Delete  Deleting a resource requires the resource `id` and is typically executing via an HTTP `DELETE` request. The response usually returns a `204 No Content` response code upon success.  ## Conventions  - Resource names are plural and expressed in camelCase. - Names are consistent between URL parameter name and field name.  - Field names are in snake_case. ```json {     \"name\": \"string\",     \"slots\": 0,     \"occupied_slots\": 0,     \"used_slots\": 0,     \"queued_slots\": 0,     \"open_slots\": 0 } ```  ### Update Mask  Update mask is available as a query parameter in patch endpoints. It is used to notify the API which fields you want to update. Using `update_mask` makes it easier to update objects by helping the server know which fields to update in an object instead of updating all fields. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.  Example: ```   resource = request.get('/resource/my-id').json()   resource['my_field'] = 'new-value'   request.patch('/resource/my-id?update_mask=my_field', data=json.dumps(resource)) ```  ## Versioning and Endpoint Lifecycle  - API versioning is not synchronized to specific releases of the Apache Airflow. - APIs are designed to be backward compatible. - Any changes to the API will first go through a deprecation phase.  # Trying the API  You can use a third party client, such as [curl](https://curl.haxx.se/), [HTTPie](https://httpie.org/), [Postman](https://www.postman.com/) or [the Insomnia rest client](https://insomnia.rest/) to test the Apache Airflow API.  Note that you will need to pass credentials data.  For e.g., here is how to pause a DAG with [curl](https://curl.haxx.se/), when basic authorization is used: ```bash curl -X PATCH 'https://example.com/api/v1/dags/{dag_id}?update_mask=is_paused' \\ -H 'Content-Type: application/json' \\ --user \"username:password\" \\ -d '{     \"is_paused\": true }' ```  Using a graphical tool such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), it is possible to import the API specifications directly:  1. Download the API specification by clicking the **Download** button at top of this document 2. Import the JSON specification in the graphical tool of your choice.   - In *Postman*, you can click the **import** button at the top   - With *Insomnia*, you can just drag-and-drop the file on the UI  Note that with *Postman*, you can also generate code snippets by selecting a request and clicking on the **Code** button.  ## Enabling CORS  [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a browser security feature that restricts HTTP requests that are initiated from scripts running in the browser.  For details on enabling/configuring CORS, see [Enabling CORS](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Authentication  To be able to meet the requirements of many organizations, Airflow supports many authentication methods, and it is even possible to add your own method.  If you want to check which auth backend is currently set, you can use `airflow config get-value api auth_backends` command as in the example below. ```bash $ airflow config get-value api auth_backends airflow.api.auth.backend.basic_auth ``` The default is to deny all requests.  For details on configuring the authentication, see [API Authorization](https://airflow.apache.org/docs/apache-airflow/stable/security/api.html).  # Errors  We follow the error response format proposed in [RFC 7807](https://tools.ietf.org/html/rfc7807) also known as Problem Details for HTTP APIs. As with our normal API responses, your client must be prepared to gracefully handle additional members of the response.  ## Unauthenticated  This indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. Please check that you have valid credentials.  ## PermissionDenied  This response means that the server understood the request but refuses to authorize it because it lacks sufficient rights to the resource. It happens when you do not have the necessary permission to execute the action you performed. You need to get the appropriate permissions in other to resolve this error.  ## BadRequest  This response means that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). To resolve this, please ensure that your syntax is correct.  ## NotFound  This client error response indicates that the server cannot find the requested resource.  ## MethodNotAllowed  Indicates that the request method is known by the server but is not supported by the target resource.  ## NotAcceptable  The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.  ## AlreadyExists  The request could not be completed due to a conflict with the current state of the target resource, e.g. the resource it tries to create already exists.  ## Unknown  This means that the server encountered an unexpected condition that prevented it from fulfilling the request. 

    The version of the OpenAPI document: 2.5.3
    Contact: dev@airflow.apache.org
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from datetime import datetime
from pydantic import Field, StrictBool, StrictFloat, StrictInt, StrictStr
from typing import List, Optional, Union
from typing_extensions import Annotated
from openapi_client.models.extra_link_collection import ExtraLinkCollection
from openapi_client.models.get_log200_response import GetLog200Response
from openapi_client.models.list_task_instance_form import ListTaskInstanceForm
from openapi_client.models.set_task_instance_note import SetTaskInstanceNote
from openapi_client.models.task_instance import TaskInstance
from openapi_client.models.task_instance_collection import TaskInstanceCollection
from openapi_client.models.task_instance_reference import TaskInstanceReference
from openapi_client.models.update_task_instance import UpdateTaskInstance

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class TaskInstanceApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def get_extra_links(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ExtraLinkCollection:
        """List extra links

        List extra links for task instance. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_extra_links_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ExtraLinkCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_extra_links_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[ExtraLinkCollection]:
        """List extra links

        List extra links for task instance. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_extra_links_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ExtraLinkCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_extra_links_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """List extra links

        List extra links for task instance. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_extra_links_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ExtraLinkCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_extra_links_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_log(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        task_try_number: Annotated[StrictInt, Field(description="The task try number.")],
        full_content: Annotated[Optional[StrictBool], Field(description="A full content will be returned. By default, only the first fragment will be returned. ")] = None,
        map_index: Annotated[Optional[StrictInt], Field(description="Filter on map index for mapped task.")] = None,
        token: Annotated[Optional[StrictStr], Field(description="A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> GetLog200Response:
        """Get logs

        Get logs for a specific task instance and its try number.

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param task_try_number: The task try number. (required)
        :type task_try_number: int
        :param full_content: A full content will be returned. By default, only the first fragment will be returned. 
        :type full_content: bool
        :param map_index: Filter on map index for mapped task.
        :type map_index: int
        :param token: A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. 
        :type token: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_log_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            task_try_number=task_try_number,
            full_content=full_content,
            map_index=map_index,
            token=token,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetLog200Response",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_log_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        task_try_number: Annotated[StrictInt, Field(description="The task try number.")],
        full_content: Annotated[Optional[StrictBool], Field(description="A full content will be returned. By default, only the first fragment will be returned. ")] = None,
        map_index: Annotated[Optional[StrictInt], Field(description="Filter on map index for mapped task.")] = None,
        token: Annotated[Optional[StrictStr], Field(description="A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[GetLog200Response]:
        """Get logs

        Get logs for a specific task instance and its try number.

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param task_try_number: The task try number. (required)
        :type task_try_number: int
        :param full_content: A full content will be returned. By default, only the first fragment will be returned. 
        :type full_content: bool
        :param map_index: Filter on map index for mapped task.
        :type map_index: int
        :param token: A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. 
        :type token: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_log_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            task_try_number=task_try_number,
            full_content=full_content,
            map_index=map_index,
            token=token,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetLog200Response",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_log_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        task_try_number: Annotated[StrictInt, Field(description="The task try number.")],
        full_content: Annotated[Optional[StrictBool], Field(description="A full content will be returned. By default, only the first fragment will be returned. ")] = None,
        map_index: Annotated[Optional[StrictInt], Field(description="Filter on map index for mapped task.")] = None,
        token: Annotated[Optional[StrictStr], Field(description="A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get logs

        Get logs for a specific task instance and its try number.

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param task_try_number: The task try number. (required)
        :type task_try_number: int
        :param full_content: A full content will be returned. By default, only the first fragment will be returned. 
        :type full_content: bool
        :param map_index: Filter on map index for mapped task.
        :type map_index: int
        :param token: A token that allows you to continue fetching logs. If passed, it will specify the location from which the download should be continued. 
        :type token: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_log_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            task_try_number=task_try_number,
            full_content=full_content,
            map_index=map_index,
            token=token,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetLog200Response",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_log_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        task_try_number,
        full_content,
        map_index,
        token,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        if task_try_number is not None:
            _path_params['task_try_number'] = task_try_number
        # process the query parameters
        if full_content is not None:
            
            _query_params.append(('full_content', full_content))
            
        if map_index is not None:
            
            _query_params.append(('map_index', map_index))
            
        if token is not None:
            
            _query_params.append(('token', token))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json', 
                    'text/plain'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_mapped_task_instance(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstance:
        """Get a mapped task instance

        Get details of a mapped task instance.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_mapped_task_instance_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstance]:
        """Get a mapped task instance

        Get details of a mapped task instance.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_mapped_task_instance_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get a mapped task instance

        Get details of a mapped task instance.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_mapped_task_instance_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        map_index,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        if map_index is not None:
            _path_params['map_index'] = map_index
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_mapped_task_instances(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        order_by: Annotated[Optional[StrictStr], Field(description="The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstanceCollection:
        """List mapped task instances

        Get details of all mapped task instances.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param order_by: The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* 
        :type order_by: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_mapped_task_instances_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        order_by: Annotated[Optional[StrictStr], Field(description="The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstanceCollection]:
        """List mapped task instances

        Get details of all mapped task instances.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param order_by: The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* 
        :type order_by: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_mapped_task_instances_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        order_by: Annotated[Optional[StrictStr], Field(description="The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """List mapped task instances

        Get details of all mapped task instances.  *New in version 2.3.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param order_by: The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0* 
        :type order_by: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_mapped_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_mapped_task_instances_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        limit,
        offset,
        execution_date_gte,
        execution_date_lte,
        start_date_gte,
        start_date_lte,
        end_date_gte,
        end_date_lte,
        duration_gte,
        duration_lte,
        state,
        pool,
        queue,
        order_by,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'state': 'multi',
            'pool': 'multi',
            'queue': 'multi',
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        # process the query parameters
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if offset is not None:
            
            _query_params.append(('offset', offset))
            
        if execution_date_gte is not None:
            if isinstance(execution_date_gte, datetime):
                _query_params.append(
                    (
                        'execution_date_gte',
                        execution_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('execution_date_gte', execution_date_gte))
            
        if execution_date_lte is not None:
            if isinstance(execution_date_lte, datetime):
                _query_params.append(
                    (
                        'execution_date_lte',
                        execution_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('execution_date_lte', execution_date_lte))
            
        if start_date_gte is not None:
            if isinstance(start_date_gte, datetime):
                _query_params.append(
                    (
                        'start_date_gte',
                        start_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('start_date_gte', start_date_gte))
            
        if start_date_lte is not None:
            if isinstance(start_date_lte, datetime):
                _query_params.append(
                    (
                        'start_date_lte',
                        start_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('start_date_lte', start_date_lte))
            
        if end_date_gte is not None:
            if isinstance(end_date_gte, datetime):
                _query_params.append(
                    (
                        'end_date_gte',
                        end_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('end_date_gte', end_date_gte))
            
        if end_date_lte is not None:
            if isinstance(end_date_lte, datetime):
                _query_params.append(
                    (
                        'end_date_lte',
                        end_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('end_date_lte', end_date_lte))
            
        if duration_gte is not None:
            
            _query_params.append(('duration_gte', duration_gte))
            
        if duration_lte is not None:
            
            _query_params.append(('duration_lte', duration_lte))
            
        if state is not None:
            
            _query_params.append(('state', state))
            
        if pool is not None:
            
            _query_params.append(('pool', pool))
            
        if queue is not None:
            
            _query_params.append(('queue', queue))
            
        if order_by is not None:
            
            _query_params.append(('order_by', order_by))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_task_instance(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstance:
        """Get a task instance


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_task_instance_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstance]:
        """Get a task instance


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_task_instance_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Get a task instance


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_task_instance_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_task_instances(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstanceCollection:
        """List task instances

        This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            limit=limit,
            offset=offset,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_task_instances_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstanceCollection]:
        """List task instances

        This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            limit=limit,
            offset=offset,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_task_instances_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        duration_gte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. ")] = None,
        duration_lte: Annotated[Optional[Union[StrictFloat, StrictInt]], Field(description="Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        pool: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        queue: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """List task instances

        This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param execution_date_gte: Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. 
        :type execution_date_gte: datetime
        :param execution_date_lte: Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. 
        :type execution_date_lte: datetime
        :param start_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type start_date_gte: datetime
        :param start_date_lte: Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type start_date_lte: datetime
        :param end_date_gte: Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. 
        :type end_date_gte: datetime
        :param end_date_lte: Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. 
        :type end_date_lte: datetime
        :param duration_gte: Returns objects greater than or equal to the specified values.  This can be combined with duration_lte parameter to receive only the selected period. 
        :type duration_gte: float
        :param duration_lte: Returns objects less than or equal to the specified values.  This can be combined with duration_gte parameter to receive only the selected range. 
        :type duration_lte: float
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
        :param pool: The value can be repeated to retrieve multiple matching values (OR condition).
        :type pool: List[str]
        :param queue: The value can be repeated to retrieve multiple matching values (OR condition).
        :type queue: List[str]
        :param limit: The numbers of items to return.
        :type limit: int
        :param offset: The number of items to skip before starting to collect the result set.
        :type offset: int
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            duration_gte=duration_gte,
            duration_lte=duration_lte,
            state=state,
            pool=pool,
            queue=queue,
            limit=limit,
            offset=offset,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_task_instances_serialize(
        self,
        dag_id,
        dag_run_id,
        execution_date_gte,
        execution_date_lte,
        start_date_gte,
        start_date_lte,
        end_date_gte,
        end_date_lte,
        duration_gte,
        duration_lte,
        state,
        pool,
        queue,
        limit,
        offset,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'state': 'multi',
            'pool': 'multi',
            'queue': 'multi',
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        # process the query parameters
        if execution_date_gte is not None:
            if isinstance(execution_date_gte, datetime):
                _query_params.append(
                    (
                        'execution_date_gte',
                        execution_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('execution_date_gte', execution_date_gte))
            
        if execution_date_lte is not None:
            if isinstance(execution_date_lte, datetime):
                _query_params.append(
                    (
                        'execution_date_lte',
                        execution_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('execution_date_lte', execution_date_lte))
            
        if start_date_gte is not None:
            if isinstance(start_date_gte, datetime):
                _query_params.append(
                    (
                        'start_date_gte',
                        start_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('start_date_gte', start_date_gte))
            
        if start_date_lte is not None:
            if isinstance(start_date_lte, datetime):
                _query_params.append(
                    (
                        'start_date_lte',
                        start_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('start_date_lte', start_date_lte))
            
        if end_date_gte is not None:
            if isinstance(end_date_gte, datetime):
                _query_params.append(
                    (
                        'end_date_gte',
                        end_date_gte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('end_date_gte', end_date_gte))
            
        if end_date_lte is not None:
            if isinstance(end_date_lte, datetime):
                _query_params.append(
                    (
                        'end_date_lte',
                        end_date_lte.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('end_date_lte', end_date_lte))
            
        if duration_gte is not None:
            
            _query_params.append(('duration_gte', duration_gte))
            
        if duration_lte is not None:
            
            _query_params.append(('duration_lte', duration_lte))
            
        if state is not None:
            
            _query_params.append(('state', state))
            
        if pool is not None:
            
            _query_params.append(('pool', pool))
            
        if queue is not None:
            
            _query_params.append(('queue', queue))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if offset is not None:
            
            _query_params.append(('offset', offset))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_task_instances_batch(
        self,
        list_task_instance_form: ListTaskInstanceForm,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstanceCollection:
        """List task instances (batch)

        List task instances from all DAGs and DAG runs. This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits. 

        :param list_task_instance_form: (required)
        :type list_task_instance_form: ListTaskInstanceForm
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_batch_serialize(
            list_task_instance_form=list_task_instance_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_task_instances_batch_with_http_info(
        self,
        list_task_instance_form: ListTaskInstanceForm,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstanceCollection]:
        """List task instances (batch)

        List task instances from all DAGs and DAG runs. This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits. 

        :param list_task_instance_form: (required)
        :type list_task_instance_form: ListTaskInstanceForm
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_batch_serialize(
            list_task_instance_form=list_task_instance_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_task_instances_batch_without_preload_content(
        self,
        list_task_instance_form: ListTaskInstanceForm,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """List task instances (batch)

        List task instances from all DAGs and DAG runs. This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits. 

        :param list_task_instance_form: (required)
        :type list_task_instance_form: ListTaskInstanceForm
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_task_instances_batch_serialize(
            list_task_instance_form=list_task_instance_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_task_instances_batch_serialize(
        self,
        list_task_instance_form,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if list_task_instance_form is not None:
            _body_params = list_task_instance_form


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/dags/~/dagRuns/~/taskInstances/list',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def patch_mapped_task_instance(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        update_task_instance: Annotated[Optional[UpdateTaskInstance], Field(description="Parameters of action")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstanceReference:
        """Updates the state of a mapped task instance

        Updates the state for single mapped task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param update_task_instance: Parameters of action
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def patch_mapped_task_instance_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        update_task_instance: Annotated[Optional[UpdateTaskInstance], Field(description="Parameters of action")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstanceReference]:
        """Updates the state of a mapped task instance

        Updates the state for single mapped task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param update_task_instance: Parameters of action
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def patch_mapped_task_instance_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        update_task_instance: Annotated[Optional[UpdateTaskInstance], Field(description="Parameters of action")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Updates the state of a mapped task instance

        Updates the state for single mapped task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param update_task_instance: Parameters of action
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_mapped_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _patch_mapped_task_instance_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        map_index,
        update_task_instance,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        if map_index is not None:
            _path_params['map_index'] = map_index
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if update_task_instance is not None:
            _body_params = update_task_instance


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def patch_task_instance(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        update_task_instance: Annotated[UpdateTaskInstance, Field(description="Parameters of action")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstanceReference:
        """Updates the state of a task instance

        Updates the state for single task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param update_task_instance: Parameters of action (required)
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def patch_task_instance_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        update_task_instance: Annotated[UpdateTaskInstance, Field(description="Parameters of action")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstanceReference]:
        """Updates the state of a task instance

        Updates the state for single task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param update_task_instance: Parameters of action (required)
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def patch_task_instance_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        update_task_instance: Annotated[UpdateTaskInstance, Field(description="Parameters of action")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Updates the state of a task instance

        Updates the state for single task instance. *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param update_task_instance: Parameters of action (required)
        :type update_task_instance: UpdateTaskInstance
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._patch_task_instance_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            update_task_instance=update_task_instance,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstanceReference",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _patch_task_instance_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        update_task_instance,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if update_task_instance is not None:
            _body_params = update_task_instance


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def set_mapped_task_instance_note(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstance:
        """Update the TaskInstance note.

        Update the manual user note of a mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_mapped_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def set_mapped_task_instance_note_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstance]:
        """Update the TaskInstance note.

        Update the manual user note of a mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_mapped_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def set_mapped_task_instance_note_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        map_index: Annotated[StrictInt, Field(description="The map index.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Update the TaskInstance note.

        Update the manual user note of a mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param map_index: The map index. (required)
        :type map_index: int
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_mapped_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            map_index=map_index,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _set_mapped_task_instance_note_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        map_index,
        set_task_instance_note,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        if map_index is not None:
            _path_params['map_index'] = map_index
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if set_task_instance_note is not None:
            _body_params = set_task_instance_note


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/setNote',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def set_task_instance_note(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> TaskInstance:
        """Update the TaskInstance note.

        Update the manual user note of a non-mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def set_task_instance_note_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[TaskInstance]:
        """Update the TaskInstance note.

        Update the manual user note of a non-mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def set_task_instance_note_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        task_id: Annotated[StrictStr, Field(description="The task ID.")],
        set_task_instance_note: Annotated[SetTaskInstanceNote, Field(description="Parameters of set Task Instance note.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Update the TaskInstance note.

        Update the manual user note of a non-mapped Task Instance.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param task_id: The task ID. (required)
        :type task_id: str
        :param set_task_instance_note: Parameters of set Task Instance note. (required)
        :type set_task_instance_note: SetTaskInstanceNote
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._set_task_instance_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            task_id=task_id,
            set_task_instance_note=set_task_instance_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "TaskInstance",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _set_task_instance_note_serialize(
        self,
        dag_id,
        dag_run_id,
        task_id,
        set_task_instance_note,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if dag_id is not None:
            _path_params['dag_id'] = dag_id
        if dag_run_id is not None:
            _path_params['dag_run_id'] = dag_run_id
        if task_id is not None:
            _path_params['task_id'] = task_id
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if set_task_instance_note is not None:
            _body_params = set_task_instance_note


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/setNote',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


