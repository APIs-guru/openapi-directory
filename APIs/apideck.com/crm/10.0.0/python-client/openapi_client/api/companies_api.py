# coding: utf-8

"""
    CRM API

    Welcome to the CRM API.  You can use this API to access all CRM API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictBool, StrictStr
from typing import Any, Dict, Optional
from typing_extensions import Annotated
from openapi_client.models.companies_filter import CompaniesFilter
from openapi_client.models.companies_sort import CompaniesSort
from openapi_client.models.company import Company
from openapi_client.models.create_company_response import CreateCompanyResponse
from openapi_client.models.delete_company_response import DeleteCompanyResponse
from openapi_client.models.get_companies_response import GetCompaniesResponse
from openapi_client.models.get_company_response import GetCompanyResponse
from openapi_client.models.update_company_response import UpdateCompanyResponse

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class CompaniesApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def companies_add(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> CreateCompanyResponse:
        """Create company

        Create company

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': "CreateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_add_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> ApiResponse[CreateCompanyResponse]:
        """Create company

        Create company

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': "CreateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_add_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
        """Create company

        Create company

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '201': "CreateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _companies_add_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        company,
        raw,
        x_apideck_service_id,
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
        if raw is not None:
            
            _query_params.append(('raw', raw))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        # process the form parameters
        # process the body parameter
        if company is not None:
            _body_params = company


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
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/crm/companies',
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
    def companies_all(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        cursor: Annotated[Optional[StrictStr], Field(description="Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.")] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True, ge=1)]], Field(description="Number of results to return. Minimum 1, Maximum 200, Default 20")] = None,
        filter: Annotated[Optional[CompaniesFilter], Field(description="Apply filters")] = None,
        sort: Annotated[Optional[CompaniesSort], Field(description="Apply sorting")] = None,
        pass_through: Annotated[Optional[Dict[str, Dict[str, Any]]], Field(description="Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
    ) -> GetCompaniesResponse:
        """List companies

        List companies

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param cursor: Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
        :type cursor: str
        :param limit: Number of results to return. Minimum 1, Maximum 200, Default 20
        :type limit: int
        :param filter: Apply filters
        :type filter: CompaniesFilter
        :param sort: Apply sorting
        :type sort: CompaniesSort
        :param pass_through: Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
        :type pass_through: PassThroughQuery
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            cursor=cursor,
            limit=limit,
            filter=filter,
            sort=sort,
            pass_through=pass_through,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompaniesResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_all_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        cursor: Annotated[Optional[StrictStr], Field(description="Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.")] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True, ge=1)]], Field(description="Number of results to return. Minimum 1, Maximum 200, Default 20")] = None,
        filter: Annotated[Optional[CompaniesFilter], Field(description="Apply filters")] = None,
        sort: Annotated[Optional[CompaniesSort], Field(description="Apply sorting")] = None,
        pass_through: Annotated[Optional[Dict[str, Dict[str, Any]]], Field(description="Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
    ) -> ApiResponse[GetCompaniesResponse]:
        """List companies

        List companies

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param cursor: Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
        :type cursor: str
        :param limit: Number of results to return. Minimum 1, Maximum 200, Default 20
        :type limit: int
        :param filter: Apply filters
        :type filter: CompaniesFilter
        :param sort: Apply sorting
        :type sort: CompaniesSort
        :param pass_through: Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
        :type pass_through: PassThroughQuery
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            cursor=cursor,
            limit=limit,
            filter=filter,
            sort=sort,
            pass_through=pass_through,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompaniesResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_all_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        cursor: Annotated[Optional[StrictStr], Field(description="Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.")] = None,
        limit: Annotated[Optional[Annotated[int, Field(le=200, strict=True, ge=1)]], Field(description="Number of results to return. Minimum 1, Maximum 200, Default 20")] = None,
        filter: Annotated[Optional[CompaniesFilter], Field(description="Apply filters")] = None,
        sort: Annotated[Optional[CompaniesSort], Field(description="Apply sorting")] = None,
        pass_through: Annotated[Optional[Dict[str, Dict[str, Any]]], Field(description="Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
        """List companies

        List companies

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param cursor: Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
        :type cursor: str
        :param limit: Number of results to return. Minimum 1, Maximum 200, Default 20
        :type limit: int
        :param filter: Apply filters
        :type filter: CompaniesFilter
        :param sort: Apply sorting
        :type sort: CompaniesSort
        :param pass_through: Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
        :type pass_through: PassThroughQuery
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            cursor=cursor,
            limit=limit,
            filter=filter,
            sort=sort,
            pass_through=pass_through,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompaniesResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _companies_all_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        raw,
        x_apideck_service_id,
        cursor,
        limit,
        filter,
        sort,
        pass_through,
        fields,
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
        if raw is not None:
            
            _query_params.append(('raw', raw))
            
        if cursor is not None:
            
            _query_params.append(('cursor', cursor))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if filter is not None:
            
            _query_params.append(('filter', filter))
            
        if sort is not None:
            
            _query_params.append(('sort', sort))
            
        if pass_through is not None:
            
            _query_params.append(('pass_through', pass_through))
            
        if fields is not None:
            
            _query_params.append(('fields', fields))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
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
            resource_path='/crm/companies',
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
    def companies_delete(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> DeleteCompanyResponse:
        """Delete company

        Delete company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_delete_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DeleteCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_delete_with_http_info(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> ApiResponse[DeleteCompanyResponse]:
        """Delete company

        Delete company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_delete_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DeleteCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_delete_without_preload_content(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
        """Delete company

        Delete company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_delete_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DeleteCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _companies_delete_serialize(
        self,
        id,
        x_apideck_consumer_id,
        x_apideck_app_id,
        raw,
        x_apideck_service_id,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if raw is not None:
            
            _query_params.append(('raw', raw))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
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
            resource_path='/crm/companies/{id}',
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
    def companies_one(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
    ) -> GetCompanyResponse:
        """Get company

        Get company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_one_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_one_with_http_info(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
    ) -> ApiResponse[GetCompanyResponse]:
        """Get company

        Get company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_one_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_one_without_preload_content(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
        fields: Annotated[Optional[StrictStr], Field(description="The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.")] = None,
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
        """Get company

        Get company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
        :param fields: The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.
        :type fields: str
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

        _param = self._companies_one_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            fields=fields,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _companies_one_serialize(
        self,
        id,
        x_apideck_consumer_id,
        x_apideck_app_id,
        raw,
        x_apideck_service_id,
        fields,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if raw is not None:
            
            _query_params.append(('raw', raw))
            
        if fields is not None:
            
            _query_params.append(('fields', fields))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
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
            resource_path='/crm/companies/{id}',
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
    def companies_update(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> UpdateCompanyResponse:
        """Update company

        Update company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_update_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_update_with_http_info(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
    ) -> ApiResponse[UpdateCompanyResponse]:
        """Update company

        Update company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_update_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
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
    def companies_update_without_preload_content(
        self,
        id: Annotated[StrictStr, Field(description="ID of the record you are acting upon.")],
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        company: Company,
        raw: Annotated[Optional[StrictBool], Field(description="Include raw response. Mostly used for debugging purposes")] = None,
        x_apideck_service_id: Annotated[Optional[StrictStr], Field(description="Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.")] = None,
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
        """Update company

        Update company

        :param id: ID of the record you are acting upon. (required)
        :type id: str
        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param company: (required)
        :type company: Company
        :param raw: Include raw response. Mostly used for debugging purposes
        :type raw: bool
        :param x_apideck_service_id: Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
        :type x_apideck_service_id: str
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

        _param = self._companies_update_serialize(
            id=id,
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            company=company,
            raw=raw,
            x_apideck_service_id=x_apideck_service_id,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateCompanyResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '402': "PaymentRequiredResponse",
            '404': "NotFoundResponse",
            '422': "UnprocessableResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _companies_update_serialize(
        self,
        id,
        x_apideck_consumer_id,
        x_apideck_app_id,
        company,
        raw,
        x_apideck_service_id,
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
        if id is not None:
            _path_params['id'] = id
        # process the query parameters
        if raw is not None:
            
            _query_params.append(('raw', raw))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        if x_apideck_service_id is not None:
            _header_params['x-apideck-service-id'] = x_apideck_service_id
        # process the form parameters
        # process the body parameter
        if company is not None:
            _body_params = company


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
            'apiKey'
        ]

        return self.api_client.param_serialize(
            method='PATCH',
            resource_path='/crm/companies/{id}',
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


