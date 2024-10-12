# coding: utf-8

"""
    Vault API

    Welcome to the Vault API 👋  When you're looking to connect to an API, the first step is authentication.  Vault helps you handle OAuth flows, store API keys, and refresh access tokens from users (called consumers in Apideck).  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Get Started  To use the Apideck APIs, you need to sign up for free at [https://app.apideck.com/signup](). Follow the steps below to get started.  - [Create a free account.](https://app.apideck.com/signup) - Go to the [Dashboard](https://app.apideck.com/unify/unified-apis/dashboard). - Get your API key and the application ID. - Select and configure the integrations you want to make available to your users. Through the Unify dashboard, you can configure which connectors you want to support as integrations. - Retrieve the client_id and client_secret for the integration you want to activate (Only needed for OAuth integrations). - Soon, you can skip the previous step and use the Apideck sandbox credentials to get you started instead (upcoming) - Register the redirect URI for the example app (https://unify.apideck.com/vault/callback) in the list of redirect URIs under your app's settings - Use the [publishing guides](/app-listing-requirements) to get your integration listed across app marketplaces.  ### Hosted Vault  Hosted Vault (vault.apideck.com) is a no-code solution, so you don't need to build your own UI to handle the integration settings and authentication.  ![Hosted Vault - Integrations portal](https://github.com/apideck-samples/integration-settings/raw/master/public/img/vault.png)  Behind the scenes, Hosted Vault implements the Vault API endpoints and handles the following features for your customers:  - Add a connection - Handle the OAuth flow - Configure connection settings per integration - Manage connections - Discover and propose integration options - Search for integrations (upcoming) - Give integration suggestions based on provided metadata (email or website) when creating the session (upcoming)  To use Hosted Vault, you will need to first [**create a session**](https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate). This can be achieved by making a POST request to the Vault API to create a valid session for a user, hereafter referred to as the consumer ID.  Example using curl:  ``` curl -X POST https://unify.apideck.com/vault/sessions     -H \"Content-Type: application/json\"     -H \"Authorization: Bearer <your-api-key>\"     -H \"X-APIDECK-CONSUMER-ID: <consumer-id>\"     -H \"X-APIDECK-APP-ID: <application-id>\"     -d '{\"consumer_metadata\": { \"account_name\" : \"Sample\", \"user_name\": \"Sand Box\", \"email\": \"sand@box.com\", \"image\": \"https://unavatar.now.sh/jake\" }, \"theme\": { \"vault_name\": \"Intercom\", \"primary_color\": \"#286efa\", \"sidepanel_background_color\": \"#286efa\",\"sidepanel_text_color\": \"#FFFFFF\", \"favicon\": \"https://res.cloudinary.com/apideck/icons/intercom\" }}' ```  ### Vault API  _Beware, this is strategy takes more time to implement in comparison to Hosted Vault._  If you are building your integration settings UI manually, you can call the Vault API directly.  The Vault API is for those who want to completely white label the in-app integrations overview and authentication experience. All the available endpoints are listed below.  Through the API, your customers authenticate directly in your app, where Vault will still take care of redirecting to the auth provider and back to your app.  If you're already storing access tokens, we will help you migrate through our Vault Migration API (upcoming).  ## Domain model  At its core, a domain model creates a web of interconnected entities.  Our domain model contains five main entity types: Consumer (user, account, team, machine), Application, Connector, Integration, and Connection.  ## Connection state  The connection state is computed based on the connection flow below.  ![](https://developers.apideck.com/api-references/vault/connection-flow.png)  More information about the connection state can be found in the [Connection state](https://developers.apideck.com/guides/connection-states) guide.  ## Unify and Proxy integration  The only thing you need to use the Unify APIs and Proxy is the consumer id; thereafter, Vault will do the look-up in the background to handle the token injection before performing the API call(s).  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-app-id      | String  | Yes      | The id of your Unify application. Available at https://app.apideck.com/api-keys. | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes. |  ## Guides  - [Get started with Apideck](https://developers.apideck.com/getting-started) - [Get started with Vault](https://developers.apideck.com/guides/vault) - [Authorize connection via Vault](https://developers.apideck.com/guides/authorize-connections) - [Vault connection status](https://developers.apideck.com/guides/connection-states) - [How to build an integrations UI with Vault](https://github.com/apideck-samples/integration-settings)   ## FAQ  **What purpose does Vault serve? Can I just handle the authentication and access token myself?** You can store everything yourself, but that defeats the purpose of using Apideck Unify. Handling tokens for multiple providers can quickly become very complex.  ### Is my data secure?  Vault employs data minimization, therefore only requesting the minimum amount of scopes needed to perform an API request.  ### How do I migrate existing data?  Using our migration API, you can migrate the access tokens and accounts to Apideck Vault.  ### Can I use Vault in combination with existing integrations?  Yes, you can. The flexibility of Unify allows you to quickly the use cases you need while keeping a gradual migration path based on your timeline and requirements.  ### How does Vault work for Apideck Ecosystem customers?  Once logged in, pick your ecosystem; on the left-hand side of the screen, you'll have the option to create an application underneath the Unify section.  ### How to integrate Apideck Vault  This section covers everything you need to know to authenticate your customers through Vault. Vault provides **three auth strategies** to use API tokens from your customers:  - Vault API - Hosted Vault - Vault Widget (JS, React, Vue)  You can also opt to bypass Vault and still take care of authentication flows yourself. Make sure to put the right safeguards in place to protect your customers' tokens and other sensitive data.  ### What auth types does Vault support?  We support all the common authentication types, including: API keys, OAuth, Basic auth, and more.  #### API keys  For Services supporting the API key strategy, you can use Hosted Vault will need to provide an in-app form where users can configure their API keys provided by the integration service.  #### OAuth 2.0  ##### Authorization Code Grant Type Flow  Vault handles the complete Authorization Code Grant Type Flow for you. This flow only supports browser-based (passive) authentication because most identity providers don't allow entering a username and password to be entered into applications that they don't own.  Certain connectors require an OAuth redirect authentication flow, where the end-user is redirected to the provider's website or mobile app to authenticate.  This is being handled by the `/authorize` endpoint.  #### Basic auth  Basic authentication is a simple authentication scheme built into the HTTP protocol. The required fields to complete basic auth are handled by Hosted Vault or by updating the connection through the Vault API below.  

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
from typing import Any, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.connection import Connection
from openapi_client.models.connection_import_data import ConnectionImportData
from openapi_client.models.create_connection_response import CreateConnectionResponse
from openapi_client.models.get_connection_response import GetConnectionResponse
from openapi_client.models.get_connections_response import GetConnectionsResponse
from openapi_client.models.get_custom_fields_response import GetCustomFieldsResponse
from openapi_client.models.unexpected_error_response import UnexpectedErrorResponse
from openapi_client.models.update_connection_response import UpdateConnectionResponse

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class ConnectionsApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def connection_settings_all(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
    ) -> GetConnectionResponse:
        """Get resource settings

        This endpoint returns custom settings and their defaults required by connection for a given resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._connection_settings_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connection_settings_all_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
    ) -> ApiResponse[GetConnectionResponse]:
        """Get resource settings

        This endpoint returns custom settings and their defaults required by connection for a given resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._connection_settings_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connection_settings_all_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
        """Get resource settings

        This endpoint returns custom settings and their defaults required by connection for a given resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._connection_settings_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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


    def _connection_settings_all_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        unified_api,
        service_id,
        resource,
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
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        if service_id is not None:
            _path_params['service_id'] = service_id
        if resource is not None:
            _path_params['resource'] = resource
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
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
            resource_path='/vault/connections/{unified_api}/{service_id}/{resource}/config',
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
    def connection_settings_update(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
    ) -> UpdateConnectionResponse:
        """Update settings

        Update default values for a connection's resource settings

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connection_settings_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            resource=resource,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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
    def connection_settings_update_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
    ) -> ApiResponse[UpdateConnectionResponse]:
        """Update settings

        Update default values for a connection's resource settings

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connection_settings_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            resource=resource,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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
    def connection_settings_update_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
        """Update settings

        Update default values for a connection's resource settings

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connection_settings_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            resource=resource,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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


    def _connection_settings_update_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
        resource,
        connection,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        if resource is not None:
            _path_params['resource'] = resource
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        # process the form parameters
        # process the body parameter
        if connection is not None:
            _body_params = connection


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
            resource_path='/vault/connections/{unified_api}/{service_id}/{resource}/config',
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
    def connections_add(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be persisted on the resource")],
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
    ) -> CreateConnectionResponse:
        """Create connection

        Create an authorized connection 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be persisted on the resource (required)
        :type connection: Connection
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

        _param = self._connections_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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
    def connections_add_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be persisted on the resource")],
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
    ) -> ApiResponse[CreateConnectionResponse]:
        """Create connection

        Create an authorized connection 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be persisted on the resource (required)
        :type connection: Connection
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

        _param = self._connections_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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
    def connections_add_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be persisted on the resource")],
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
        """Create connection

        Create an authorized connection 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be persisted on the resource (required)
        :type connection: Connection
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

        _param = self._connections_add_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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


    def _connections_add_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
        connection,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        # process the form parameters
        # process the body parameter
        if connection is not None:
            _body_params = connection


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
            resource_path='/vault/connections/{unified_api}/{service_id}',
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
    def connections_all(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        api: Annotated[Optional[StrictStr], Field(description="Scope results to Unified API")] = None,
        configured: Annotated[Optional[StrictBool], Field(description="Scopes results to connections that have been configured or not")] = None,
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
    ) -> GetConnectionsResponse:
        """Get all connections

        This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param api: Scope results to Unified API
        :type api: str
        :param configured: Scopes results to connections that have been configured or not
        :type configured: bool
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

        _param = self._connections_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            api=api,
            configured=configured,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionsResponse",
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
    def connections_all_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        api: Annotated[Optional[StrictStr], Field(description="Scope results to Unified API")] = None,
        configured: Annotated[Optional[StrictBool], Field(description="Scopes results to connections that have been configured or not")] = None,
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
    ) -> ApiResponse[GetConnectionsResponse]:
        """Get all connections

        This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param api: Scope results to Unified API
        :type api: str
        :param configured: Scopes results to connections that have been configured or not
        :type configured: bool
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

        _param = self._connections_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            api=api,
            configured=configured,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionsResponse",
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
    def connections_all_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        api: Annotated[Optional[StrictStr], Field(description="Scope results to Unified API")] = None,
        configured: Annotated[Optional[StrictBool], Field(description="Scopes results to connections that have been configured or not")] = None,
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
        """Get all connections

        This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param api: Scope results to Unified API
        :type api: str
        :param configured: Scopes results to connections that have been configured or not
        :type configured: bool
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

        _param = self._connections_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            api=api,
            configured=configured,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionsResponse",
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


    def _connections_all_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        api,
        configured,
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
        if api is not None:
            
            _query_params.append(('api', api))
            
        if configured is not None:
            
            _query_params.append(('configured', configured))
            
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
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
            resource_path='/vault/connections',
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
    def connections_authorize(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
        scope: Annotated[Optional[List[StrictStr]], Field(description="One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.")] = None,
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
    ) -> UnexpectedErrorResponse:
        """Authorize

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
        :param scope: One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.
        :type scope: List[str]
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

        _param = self._connections_authorize_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            scope=scope,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_authorize_with_http_info(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
        scope: Annotated[Optional[List[StrictStr]], Field(description="One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.")] = None,
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
    ) -> ApiResponse[UnexpectedErrorResponse]:
        """Authorize

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
        :param scope: One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.
        :type scope: List[str]
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

        _param = self._connections_authorize_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            scope=scope,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_authorize_without_preload_content(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
        scope: Annotated[Optional[List[StrictStr]], Field(description="One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.")] = None,
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
        """Authorize

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
        :param scope: One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.
        :type scope: List[str]
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

        _param = self._connections_authorize_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            scope=scope,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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


    def _connections_authorize_serialize(
        self,
        service_id,
        application_id,
        state,
        redirect_uri,
        scope,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'scope': 'ssv',
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if application_id is not None:
            _path_params['application_id'] = application_id
        # process the query parameters
        if state is not None:
            
            _query_params.append(('state', state))
            
        if redirect_uri is not None:
            
            _query_params.append(('redirect_uri', redirect_uri))
            
        if scope is not None:
            
            _query_params.append(('scope', scope))
            
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
            resource_path='/vault/authorize/{service_id}/{application_id}',
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
    def connections_callback(
        self,
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        code: Annotated[StrictStr, Field(description="An authorization code from the connector which Apideck Vault will later exchange for an access token.")],
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
    ) -> UnexpectedErrorResponse:
        """Callback

        This endpoint gets called after the triggering the authorize flow.  Callback links need a state and code parameter to verify the validity of the request. 

        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param code: An authorization code from the connector which Apideck Vault will later exchange for an access token. (required)
        :type code: str
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

        _param = self._connections_callback_serialize(
            state=state,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_callback_with_http_info(
        self,
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        code: Annotated[StrictStr, Field(description="An authorization code from the connector which Apideck Vault will later exchange for an access token.")],
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
    ) -> ApiResponse[UnexpectedErrorResponse]:
        """Callback

        This endpoint gets called after the triggering the authorize flow.  Callback links need a state and code parameter to verify the validity of the request. 

        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param code: An authorization code from the connector which Apideck Vault will later exchange for an access token. (required)
        :type code: str
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

        _param = self._connections_callback_serialize(
            state=state,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_callback_without_preload_content(
        self,
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        code: Annotated[StrictStr, Field(description="An authorization code from the connector which Apideck Vault will later exchange for an access token.")],
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
        """Callback

        This endpoint gets called after the triggering the authorize flow.  Callback links need a state and code parameter to verify the validity of the request. 

        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param code: An authorization code from the connector which Apideck Vault will later exchange for an access token. (required)
        :type code: str
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

        _param = self._connections_callback_serialize(
            state=state,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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


    def _connections_callback_serialize(
        self,
        state,
        code,
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
        if state is not None:
            
            _query_params.append(('state', state))
            
        if code is not None:
            
            _query_params.append(('code', code))
            
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
            resource_path='/vault/callback',
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
    def connections_delete(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
        """Deletes a connection

        Deletes a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_delete_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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
    def connections_delete_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
        """Deletes a connection

        Deletes a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_delete_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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
    def connections_delete_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
        """Deletes a connection

        Deletes a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_delete_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '204': None,
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


    def _connections_delete_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
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
            resource_path='/vault/connections/{unified_api}/{service_id}',
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
    def connections_import(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection_import_data: Annotated[ConnectionImportData, Field(description="Fields that need to be persisted on the resource")],
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
    ) -> CreateConnectionResponse:
        """Import connection

        Import an authorized connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection_import_data: Fields that need to be persisted on the resource (required)
        :type connection_import_data: ConnectionImportData
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

        _param = self._connections_import_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection_import_data=connection_import_data,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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
    def connections_import_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection_import_data: Annotated[ConnectionImportData, Field(description="Fields that need to be persisted on the resource")],
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
    ) -> ApiResponse[CreateConnectionResponse]:
        """Import connection

        Import an authorized connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection_import_data: Fields that need to be persisted on the resource (required)
        :type connection_import_data: ConnectionImportData
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

        _param = self._connections_import_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection_import_data=connection_import_data,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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
    def connections_import_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection_import_data: Annotated[ConnectionImportData, Field(description="Fields that need to be persisted on the resource")],
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
        """Import connection

        Import an authorized connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection_import_data: Fields that need to be persisted on the resource (required)
        :type connection_import_data: ConnectionImportData
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

        _param = self._connections_import_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection_import_data=connection_import_data,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CreateConnectionResponse",
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


    def _connections_import_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
        connection_import_data,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        # process the form parameters
        # process the body parameter
        if connection_import_data is not None:
            _body_params = connection_import_data


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
            resource_path='/vault/connections/{unified_api}/{service_id}/import',
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
    def connections_one(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
    ) -> GetConnectionResponse:
        """Get connection

        Get a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_one_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connections_one_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
    ) -> ApiResponse[GetConnectionResponse]:
        """Get connection

        Get a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_one_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connections_one_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
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
        """Get connection

        Get a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
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

        _param = self._connections_one_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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


    def _connections_one_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
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
            resource_path='/vault/connections/{unified_api}/{service_id}',
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
    def connections_revoke(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
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
    ) -> UnexpectedErrorResponse:
        """Revoke connection

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to revoke an existing OAuth connector.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
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

        _param = self._connections_revoke_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_revoke_with_http_info(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
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
    ) -> ApiResponse[UnexpectedErrorResponse]:
        """Revoke connection

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to revoke an existing OAuth connector.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
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

        _param = self._connections_revoke_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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
    def connections_revoke_without_preload_content(
        self,
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        application_id: Annotated[StrictStr, Field(description="Application ID of the resource to return")],
        state: Annotated[StrictStr, Field(description="An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.")],
        redirect_uri: Annotated[StrictStr, Field(description="URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.")],
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
        """Revoke connection

        __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__  Use this endpoint to revoke an existing OAuth connector.  Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.  Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application. 

        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param application_id: Application ID of the resource to return (required)
        :type application_id: str
        :param state: An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks. (required)
        :type state: str
        :param redirect_uri: URL to redirect back to after authorization. When left empty the default configured redirect uri will be used. (required)
        :type redirect_uri: str
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

        _param = self._connections_revoke_serialize(
            service_id=service_id,
            application_id=application_id,
            state=state,
            redirect_uri=redirect_uri,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '301': None,
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


    def _connections_revoke_serialize(
        self,
        service_id,
        application_id,
        state,
        redirect_uri,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if application_id is not None:
            _path_params['application_id'] = application_id
        # process the query parameters
        if state is not None:
            
            _query_params.append(('state', state))
            
        if redirect_uri is not None:
            
            _query_params.append(('redirect_uri', redirect_uri))
            
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
            resource_path='/vault/revoke/{service_id}/{application_id}',
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
    def connections_token(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        body: Optional[Dict[str, Any]] = None,
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
    ) -> GetConnectionResponse:
        """Get Access Token

        Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.  Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param body:
        :type body: object
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

        _param = self._connections_token_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            body=body,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connections_token_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        body: Optional[Dict[str, Any]] = None,
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
    ) -> ApiResponse[GetConnectionResponse]:
        """Get Access Token

        Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.  Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param body:
        :type body: object
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

        _param = self._connections_token_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            body=body,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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
    def connections_token_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        body: Optional[Dict[str, Any]] = None,
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
        """Get Access Token

        Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.  Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param body:
        :type body: object
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

        _param = self._connections_token_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            body=body,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetConnectionResponse",
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


    def _connections_token_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
        body,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        # process the form parameters
        # process the body parameter
        if body is not None:
            _body_params = body


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
            resource_path='/vault/connections/{unified_api}/{service_id}/token',
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
    def connections_update(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
    ) -> UpdateConnectionResponse:
        """Update connection

        Update a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connections_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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
    def connections_update_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
    ) -> ApiResponse[UpdateConnectionResponse]:
        """Update connection

        Update a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connections_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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
    def connections_update_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        connection: Annotated[Connection, Field(description="Fields that need to be updated on the resource")],
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
        """Update connection

        Update a connection

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param connection: Fields that need to be updated on the resource (required)
        :type connection: Connection
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

        _param = self._connections_update_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            service_id=service_id,
            unified_api=unified_api,
            connection=connection,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UpdateConnectionResponse",
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


    def _connections_update_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        service_id,
        unified_api,
        connection,
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
        if service_id is not None:
            _path_params['service_id'] = service_id
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
        # process the form parameters
        # process the body parameter
        if connection is not None:
            _body_params = connection


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
            resource_path='/vault/connections/{unified_api}/{service_id}',
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
    def custom_fields_all(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
    ) -> GetCustomFieldsResponse:
        """Get resource custom fields

        This endpoint returns an custom fields on a connection resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._custom_fields_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCustomFieldsResponse",
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
    def custom_fields_all_with_http_info(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
    ) -> ApiResponse[GetCustomFieldsResponse]:
        """Get resource custom fields

        This endpoint returns an custom fields on a connection resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._custom_fields_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCustomFieldsResponse",
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
    def custom_fields_all_without_preload_content(
        self,
        x_apideck_consumer_id: Annotated[StrictStr, Field(description="ID of the consumer which you want to get or push data from")],
        x_apideck_app_id: Annotated[StrictStr, Field(description="The ID of your Unify application")],
        unified_api: Annotated[StrictStr, Field(description="Unified API")],
        service_id: Annotated[StrictStr, Field(description="Service ID of the resource to return")],
        resource: Annotated[StrictStr, Field(description="Name of the resource (plural)")],
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
        """Get resource custom fields

        This endpoint returns an custom fields on a connection resource. 

        :param x_apideck_consumer_id: ID of the consumer which you want to get or push data from (required)
        :type x_apideck_consumer_id: str
        :param x_apideck_app_id: The ID of your Unify application (required)
        :type x_apideck_app_id: str
        :param unified_api: Unified API (required)
        :type unified_api: str
        :param service_id: Service ID of the resource to return (required)
        :type service_id: str
        :param resource: Name of the resource (plural) (required)
        :type resource: str
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

        _param = self._custom_fields_all_serialize(
            x_apideck_consumer_id=x_apideck_consumer_id,
            x_apideck_app_id=x_apideck_app_id,
            unified_api=unified_api,
            service_id=service_id,
            resource=resource,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GetCustomFieldsResponse",
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


    def _custom_fields_all_serialize(
        self,
        x_apideck_consumer_id,
        x_apideck_app_id,
        unified_api,
        service_id,
        resource,
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
        if unified_api is not None:
            _path_params['unified_api'] = unified_api
        if service_id is not None:
            _path_params['service_id'] = service_id
        if resource is not None:
            _path_params['resource'] = resource
        # process the query parameters
        # process the header parameters
        if x_apideck_consumer_id is not None:
            _header_params['x-apideck-consumer-id'] = x_apideck_consumer_id
        if x_apideck_app_id is not None:
            _header_params['x-apideck-app-id'] = x_apideck_app_id
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
            resource_path='/vault/connections/{unified_api}/{service_id}/{resource}/custom-fields',
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


