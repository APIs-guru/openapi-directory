# coding: utf-8

"""
    Proxy API

    Welcome to the Proxy API.  You can use this API to access all Proxy API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                               | Type   | Required | Description | | ---------------------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | Authorization                      | String | Yes      | Bearer API KEY | | x-apideck-app-id                   | String | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys. | | x-apideck-consumer-id              | String | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app.                       | | x-apideck-downstream-url           | String | Yes      | Downstream URL to forward the request too | | x-apideck-downstream-authorization | String | No       | Downstream authorization header. This will skip the Vault token injection. | | x-apideck-downstream-method        | String | No       | Downstream method. If not provided the upstream method will be inherited, depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. | | x-apideck-service-id               | String | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.                                   |  ## Authorization  You can interact with the API through the authorization methods below.  ### apiKey  To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. To change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app. Your Apideck application_id can also be found on the same page.  Authenticate your API requests by including your test or live secret API key in the request header.  - Bearer authorization header: Authorization: Bearer <your-apideck-api-key> - Application id header: x-apideck-app-id: <your-apideck-app-id>   You should use the public keys on the SDKs and the secret keys to authenticate API requests.  **Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.  Learn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key  Go to Unify to grab your API KEY https://app.apideck.com/unify/api-keys  | Security Scheme Type      | HTTP   | | ------------------------- | ------ | | HTTP Authorization Scheme | bearer |  ### applicationId  The ID of your Unify application  | Security Scheme Type  | API Key          | | --------------------- | ---------------- | | Header parameter name | x-apideck-app-id |  ## Static IP  Some of the APIs you want to use can require a static IP. Apideck's static IP feature allows you to the Proxy API with a fixed IP avoiding the need for you to set up your own infrastructure. This feature is currently available to all Apideck customers. To use this feature, the API Vendor will need to whitelist the associated static IP addresses. The provided static IP addresses are fixed to their specified region and shared by all customers who use this feature.  - EU Central 1: **18.197.244.247** - Other: upcoming    More info about our data security can be found at [https://compliance.apideck.com/](https://compliance.apideck.com/)  ## Limitations  ### Timeout  The request timeout is set at 30 seconds.  ### Response Size  The Proxy API has no response size limit. For responses larger than 2MB, the Proxy API will redirect to a temporary URL. In this case the usual Apideck response headers will be returned in the redirect response. Most HTTP clients will handle this redirect automatically.  ``` GET /proxy < 301 Moved Permanently < x-apideck-request-id: {{requestId}} < Location: {{temporaryUrl}}  GET {{temporaryUrl}} < {{responseBody}} ```  ## SDKs and API Clients  Upcoming. [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created. | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body. | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource. | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue. | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request. | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists. | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource. | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later. | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue. |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictStr
from typing import Any, Optional
from typing_extensions import Annotated
from openapi_client.models.post_proxy_request import PostProxyRequest
from openapi_client.models.put_proxy_request import PutProxyRequest

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class ExecuteApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def delete_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> object:
        """DELETE

        Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._delete_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def delete_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> ApiResponse[object]:
        """DELETE

        Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._delete_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def delete_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
        """DELETE

        Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._delete_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _delete_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
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
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='DELETE',
            resource_path='/proxy',
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
    def get_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> object:
        """GET

        Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._get_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def get_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> ApiResponse[object]:
        """GET

        Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._get_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def get_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
        """GET

        Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._get_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
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
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/proxy',
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
    def options_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> object:
        """OPTIONS

        Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._options_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def options_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
    ) -> ApiResponse[object]:
        """OPTIONS

        Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._options_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def options_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
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
        """OPTIONS

        Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
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

        _param = self._options_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _options_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
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
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='OPTIONS',
            resource_path='/proxy',
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
    def patch_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> object:
        """PATCH

        Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._patch_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def patch_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> ApiResponse[object]:
        """PATCH

        Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._patch_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def patch_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
        """PATCH

        Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._patch_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _patch_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
        post_proxy_request,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
        # process the form parameters
        # process the body parameter
        if post_proxy_request is not None:
            _body_params = post_proxy_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/proxy',
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
    def post_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> object:
        """POST

        Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._post_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def post_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> ApiResponse[object]:
        """POST

        Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._post_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def post_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        post_proxy_request: Annotated[Optional[PostProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
        """POST

        Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param post_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type post_proxy_request: PostProxyRequest
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

        _param = self._post_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            post_proxy_request=post_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _post_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
        post_proxy_request,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
        # process the form parameters
        # process the body parameter
        if post_proxy_request is not None:
            _body_params = post_proxy_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/proxy',
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
    def put_proxy(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        put_proxy_request: Annotated[Optional[PutProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> object:
        """PUT

        Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param put_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type put_proxy_request: PutProxyRequest
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

        _param = self._put_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            put_proxy_request=put_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def put_proxy_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        put_proxy_request: Annotated[Optional[PutProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
    ) -> ApiResponse[object]:
        """PUT

        Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param put_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type put_proxy_request: PutProxyRequest
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

        _param = self._put_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            put_proxy_request=put_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
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
    def put_proxy_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        x_apideck_service_id: Annotated[StrictStr, Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")],
        x_apideck_downstream_url: Annotated[StrictStr, Field(description="Downstream URL")],
        x_apideck_downstream_authorization: Annotated[Optional[StrictStr], Field(description="Downstream authorization header. This will skip the Vault token injection.")] = None,
        put_proxy_request: Annotated[Optional[PutProxyRequest], Field(description="Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.")] = None,
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
        """PUT

        Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (required)
        :type x_apideck_service_id: str
        :param x_apideck_downstream_url: Downstream URL (required)
        :type x_apideck_downstream_url: str
        :param x_apideck_downstream_authorization: Downstream authorization header. This will skip the Vault token injection.
        :type x_apideck_downstream_authorization: str
        :param put_proxy_request: Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT.
        :type put_proxy_request: PutProxyRequest
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

        _param = self._put_proxy_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            x_apideck_service_id=x_apideck_service_id,
            x_apideck_downstream_url=x_apideck_downstream_url,
            x_apideck_downstream_authorization=x_apideck_downstream_authorization,
            put_proxy_request=put_proxy_request,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "object",
            '401': "GetProxy401Response",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _put_proxy_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        x_apideck_service_id,
        x_apideck_downstream_url,
        x_apideck_downstream_authorization,
        put_proxy_request,
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
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        if x_apideck_downstream_url is not None:
            _header_params['x-apideck-downstream-url'] = x_apideck_downstream_url
        if x_apideck_downstream_authorization is not None:
            _header_params['x-apideck-downstream-authorization'] = x_apideck_downstream_authorization
        # process the form parameters
        # process the body parameter
        if put_proxy_request is not None:
            _body_params = put_proxy_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='PUT',
            resource_path='/proxy',
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


