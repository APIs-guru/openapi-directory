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
from pydantic import Field, StrictInt, StrictStr
from typing import List, Optional
from typing_extensions import Annotated
from openapi_client.models.clear_dag_run import ClearDagRun
from openapi_client.models.clear_dag_run200_response import ClearDagRun200Response
from openapi_client.models.dag_run import DAGRun
from openapi_client.models.dag_run_collection import DAGRunCollection
from openapi_client.models.dataset_event_collection import DatasetEventCollection
from openapi_client.models.list_dag_runs_form import ListDagRunsForm
from openapi_client.models.set_dag_run_note import SetDagRunNote
from openapi_client.models.update_dag_run_state import UpdateDagRunState

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class DAGRunApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def clear_dag_run(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        clear_dag_run: ClearDagRun,
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
    ) -> ClearDagRun200Response:
        """Clear a DAG run

        Clear a DAG run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param clear_dag_run: (required)
        :type clear_dag_run: ClearDagRun
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

        _param = self._clear_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            clear_dag_run=clear_dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ClearDagRun200Response",
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
    def clear_dag_run_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        clear_dag_run: ClearDagRun,
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
    ) -> ApiResponse[ClearDagRun200Response]:
        """Clear a DAG run

        Clear a DAG run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param clear_dag_run: (required)
        :type clear_dag_run: ClearDagRun
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

        _param = self._clear_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            clear_dag_run=clear_dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ClearDagRun200Response",
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
    def clear_dag_run_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        clear_dag_run: ClearDagRun,
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
        """Clear a DAG run

        Clear a DAG run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param clear_dag_run: (required)
        :type clear_dag_run: ClearDagRun
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

        _param = self._clear_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            clear_dag_run=clear_dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "ClearDagRun200Response",
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


    def _clear_dag_run_serialize(
        self,
        dag_id,
        dag_run_id,
        clear_dag_run,
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
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if clear_dag_run is not None:
            _body_params = clear_dag_run


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
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/clear',
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
    def delete_dag_run(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> None:
        """Delete a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._delete_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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
    def delete_dag_run_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> ApiResponse[None]:
        """Delete a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._delete_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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
    def delete_dag_run_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
        """Delete a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._delete_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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


    def _delete_dag_run_serialize(
        self,
        dag_id,
        dag_run_id,
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
            method='DELETE',
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}',
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
    def get_dag_run(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> DAGRun:
        """Get a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def get_dag_run_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> ApiResponse[DAGRun]:
        """Get a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def get_dag_run_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
        """Get a DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_dag_run_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_dag_run_serialize(
        self,
        dag_id,
        dag_run_id,
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
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}',
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
    def get_dag_runs(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
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
    ) -> DAGRunCollection:
        """List DAG runs

        This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
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
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
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

        _param = self._get_dag_runs_serialize(
            dag_id=dag_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            state=state,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '401': "Error",
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
    def get_dag_runs_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
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
    ) -> ApiResponse[DAGRunCollection]:
        """List DAG runs

        This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
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
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
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

        _param = self._get_dag_runs_serialize(
            dag_id=dag_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            state=state,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '401': "Error",
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
    def get_dag_runs_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        limit: Annotated[Optional[StrictInt], Field(description="The numbers of items to return.")] = None,
        offset: Annotated[Optional[Annotated[int, Field(strict=True, ge=0)]], Field(description="The number of items to skip before starting to collect the result set.")] = None,
        execution_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal to the specified date.  This can be combined with execution_date_lte parameter to receive only the selected period. ")] = None,
        execution_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with execution_date_gte parameter to receive only the selected period. ")] = None,
        start_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        start_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less or equal the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        end_date_gte: Annotated[Optional[datetime], Field(description="Returns objects greater or equal the specified date.  This can be combined with start_date_lte parameter to receive only the selected period. ")] = None,
        end_date_lte: Annotated[Optional[datetime], Field(description="Returns objects less than or equal to the specified date.  This can be combined with start_date_gte parameter to receive only the selected period. ")] = None,
        state: Annotated[Optional[List[StrictStr]], Field(description="The value can be repeated to retrieve multiple matching values (OR condition).")] = None,
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
        """List DAG runs

        This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs. 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
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
        :param state: The value can be repeated to retrieve multiple matching values (OR condition).
        :type state: List[str]
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

        _param = self._get_dag_runs_serialize(
            dag_id=dag_id,
            limit=limit,
            offset=offset,
            execution_date_gte=execution_date_gte,
            execution_date_lte=execution_date_lte,
            start_date_gte=start_date_gte,
            start_date_lte=start_date_lte,
            end_date_gte=end_date_gte,
            end_date_lte=end_date_lte,
            state=state,
            order_by=order_by,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '401': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_dag_runs_serialize(
        self,
        dag_id,
        limit,
        offset,
        execution_date_gte,
        execution_date_lte,
        start_date_gte,
        start_date_lte,
        end_date_gte,
        end_date_lte,
        state,
        order_by,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'state': 'multi',
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
            
        if state is not None:
            
            _query_params.append(('state', state))
            
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
            resource_path='/dags/{dag_id}/dagRuns',
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
    def get_dag_runs_batch(
        self,
        list_dag_runs_form: ListDagRunsForm,
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
    ) -> DAGRunCollection:
        """List DAG runs (batch)

        This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit. 

        :param list_dag_runs_form: (required)
        :type list_dag_runs_form: ListDagRunsForm
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

        _param = self._get_dag_runs_batch_serialize(
            list_dag_runs_form=list_dag_runs_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '400': "Error",
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
    def get_dag_runs_batch_with_http_info(
        self,
        list_dag_runs_form: ListDagRunsForm,
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
    ) -> ApiResponse[DAGRunCollection]:
        """List DAG runs (batch)

        This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit. 

        :param list_dag_runs_form: (required)
        :type list_dag_runs_form: ListDagRunsForm
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

        _param = self._get_dag_runs_batch_serialize(
            list_dag_runs_form=list_dag_runs_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '400': "Error",
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
    def get_dag_runs_batch_without_preload_content(
        self,
        list_dag_runs_form: ListDagRunsForm,
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
        """List DAG runs (batch)

        This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit. 

        :param list_dag_runs_form: (required)
        :type list_dag_runs_form: ListDagRunsForm
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

        _param = self._get_dag_runs_batch_serialize(
            list_dag_runs_form=list_dag_runs_form,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRunCollection",
            '400': "Error",
            '401': "Error",
            '403': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_dag_runs_batch_serialize(
        self,
        list_dag_runs_form,
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
        if list_dag_runs_form is not None:
            _body_params = list_dag_runs_form


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
            resource_path='/dags/~/dagRuns/list',
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
    def get_upstream_dataset_events(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> DatasetEventCollection:
        """Get dataset events for a DAG run

        Get datasets for a dag run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_upstream_dataset_events_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DatasetEventCollection",
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
    def get_upstream_dataset_events_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
    ) -> ApiResponse[DatasetEventCollection]:
        """Get dataset events for a DAG run

        Get datasets for a dag run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_upstream_dataset_events_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DatasetEventCollection",
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
    def get_upstream_dataset_events_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
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
        """Get dataset events for a DAG run

        Get datasets for a dag run.  *New in version 2.4.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
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

        _param = self._get_upstream_dataset_events_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DatasetEventCollection",
            '401': "Error",
            '403': "Error",
            '404': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_upstream_dataset_events_serialize(
        self,
        dag_id,
        dag_run_id,
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
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents',
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
    def post_dag_run(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run: DAGRun,
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
    ) -> DAGRun:
        """Trigger a new DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run: (required)
        :type dag_run: DAGRun
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

        _param = self._post_dag_run_serialize(
            dag_id=dag_id,
            dag_run=dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
            '409': "Error",
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
    def post_dag_run_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run: DAGRun,
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
    ) -> ApiResponse[DAGRun]:
        """Trigger a new DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run: (required)
        :type dag_run: DAGRun
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

        _param = self._post_dag_run_serialize(
            dag_id=dag_id,
            dag_run=dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
            '409': "Error",
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
    def post_dag_run_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run: DAGRun,
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
        """Trigger a new DAG run


        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run: (required)
        :type dag_run: DAGRun
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

        _param = self._post_dag_run_serialize(
            dag_id=dag_id,
            dag_run=dag_run,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
            '400': "Error",
            '401': "Error",
            '403': "Error",
            '404': "Error",
            '409': "Error",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _post_dag_run_serialize(
        self,
        dag_id,
        dag_run,
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
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if dag_run is not None:
            _body_params = dag_run


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
            resource_path='/dags/{dag_id}/dagRuns',
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
    def set_dag_run_note(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        set_dag_run_note: Annotated[SetDagRunNote, Field(description="Parameters of set DagRun note.")],
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
    ) -> DAGRun:
        """Update the DagRun note.

        Update the manual user note of a DagRun.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param set_dag_run_note: Parameters of set DagRun note. (required)
        :type set_dag_run_note: SetDagRunNote
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

        _param = self._set_dag_run_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            set_dag_run_note=set_dag_run_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def set_dag_run_note_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        set_dag_run_note: Annotated[SetDagRunNote, Field(description="Parameters of set DagRun note.")],
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
    ) -> ApiResponse[DAGRun]:
        """Update the DagRun note.

        Update the manual user note of a DagRun.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param set_dag_run_note: Parameters of set DagRun note. (required)
        :type set_dag_run_note: SetDagRunNote
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

        _param = self._set_dag_run_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            set_dag_run_note=set_dag_run_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def set_dag_run_note_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        set_dag_run_note: Annotated[SetDagRunNote, Field(description="Parameters of set DagRun note.")],
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
        """Update the DagRun note.

        Update the manual user note of a DagRun.  *New in version 2.5.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param set_dag_run_note: Parameters of set DagRun note. (required)
        :type set_dag_run_note: SetDagRunNote
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

        _param = self._set_dag_run_note_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            set_dag_run_note=set_dag_run_note,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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


    def _set_dag_run_note_serialize(
        self,
        dag_id,
        dag_run_id,
        set_dag_run_note,
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
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if set_dag_run_note is not None:
            _body_params = set_dag_run_note


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
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}/setNote',
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
    def update_dag_run_state(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        update_dag_run_state: UpdateDagRunState,
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
    ) -> DAGRun:
        """Modify a DAG run

        Modify a DAG run.  *New in version 2.2.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param update_dag_run_state: (required)
        :type update_dag_run_state: UpdateDagRunState
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

        _param = self._update_dag_run_state_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            update_dag_run_state=update_dag_run_state,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def update_dag_run_state_with_http_info(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        update_dag_run_state: UpdateDagRunState,
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
    ) -> ApiResponse[DAGRun]:
        """Modify a DAG run

        Modify a DAG run.  *New in version 2.2.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param update_dag_run_state: (required)
        :type update_dag_run_state: UpdateDagRunState
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

        _param = self._update_dag_run_state_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            update_dag_run_state=update_dag_run_state,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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
    def update_dag_run_state_without_preload_content(
        self,
        dag_id: Annotated[StrictStr, Field(description="The DAG ID.")],
        dag_run_id: Annotated[StrictStr, Field(description="The DAG run ID.")],
        update_dag_run_state: UpdateDagRunState,
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
        """Modify a DAG run

        Modify a DAG run.  *New in version 2.2.0* 

        :param dag_id: The DAG ID. (required)
        :type dag_id: str
        :param dag_run_id: The DAG run ID. (required)
        :type dag_run_id: str
        :param update_dag_run_state: (required)
        :type update_dag_run_state: UpdateDagRunState
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

        _param = self._update_dag_run_state_serialize(
            dag_id=dag_id,
            dag_run_id=dag_run_id,
            update_dag_run_state=update_dag_run_state,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DAGRun",
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


    def _update_dag_run_state_serialize(
        self,
        dag_id,
        dag_run_id,
        update_dag_run_state,
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
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if update_dag_run_state is not None:
            _body_params = update_dag_run_state


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
            resource_path='/dags/{dag_id}/dagRuns/{dag_run_id}',
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


