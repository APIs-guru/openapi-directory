# coding: utf-8

"""
    Connector API

    Welcome to the Connector API.  You can use this API to access all Connector API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.connector_doc import ConnectorDoc
from openapi_client.models.connector_event import ConnectorEvent
from openapi_client.models.connector_oauth_scopes_inner import ConnectorOauthScopesInner
from openapi_client.models.connector_setting import ConnectorSetting
from openapi_client.models.connector_status import ConnectorStatus
from openapi_client.models.connector_tls_support import ConnectorTlsSupport
from openapi_client.models.connector_unified_apis_inner import ConnectorUnifiedApisInner
from openapi_client.models.linked_connector_resource import LinkedConnectorResource
from openapi_client.models.schema_support import SchemaSupport
from openapi_client.models.webhook_support import WebhookSupport
from typing import Optional, Set
from typing_extensions import Self

class Connector(BaseModel):
    """
    Connector
    """ # noqa: E501
    auth_only: Optional[StrictBool] = Field(default=None, description="Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API")
    auth_type: Optional[StrictStr] = Field(default=None, description="Type of authorization used by the connector")
    blind_mapped: Optional[StrictBool] = Field(default=None, description="Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality.")
    configurable_resources: Optional[List[StrictStr]] = Field(default=None, description="List of resources that have settings that can be configured.")
    custom_scopes: Optional[StrictBool] = Field(default=None, description="Set to `true` when connector allows the definition of custom scopes.")
    description: Optional[StrictStr] = Field(default=None, description="A description of the object.")
    docs: Optional[List[ConnectorDoc]] = None
    free_trial_available: Optional[StrictBool] = Field(default=None, description="Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial")
    has_sandbox_credentials: Optional[StrictBool] = Field(default=None, description="Indicates whether Apideck Sandbox OAuth credentials are available.")
    icon_url: Optional[StrictStr] = Field(default=None, description="Link to a small square icon for the connector.")
    id: Optional[StrictStr] = Field(default=None, description="ID of the connector.")
    logo_url: Optional[StrictStr] = Field(default=None, description="Link to the full logo for the connector.")
    name: Optional[StrictStr] = Field(default=None, description="Name of the connector.")
    oauth_credentials_source: Optional[StrictStr] = Field(default=None, description="Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.")
    oauth_grant_type: Optional[StrictStr] = Field(default=None, description="OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types")
    oauth_scopes: Optional[List[ConnectorOauthScopesInner]] = Field(default=None, description="List of OAuth Scopes available for this connector.")
    partner_signup_url: Optional[StrictStr] = Field(default=None, description="Link to the connector's partner program signup page.")
    schema_support: Optional[SchemaSupport] = None
    service_id: Optional[StrictStr] = Field(default=None, description="Service provider identifier")
    settings: Optional[List[ConnectorSetting]] = None
    signup_url: Optional[StrictStr] = Field(default=None, description="Link to the connector's signup page.")
    status: Optional[ConnectorStatus] = None
    supported_events: Optional[List[ConnectorEvent]] = Field(default=None, description="List of events that are supported on the connector across all Unified APIs.")
    supported_resources: Optional[List[LinkedConnectorResource]] = Field(default=None, description="List of resources that are supported on the connector.")
    tls_support: Optional[ConnectorTlsSupport] = None
    unified_apis: Optional[List[ConnectorUnifiedApisInner]] = Field(default=None, description="List of Unified APIs that feature this connector.")
    webhook_support: Optional[WebhookSupport] = None
    website_url: Optional[StrictStr] = Field(default=None, description="Link to the connector's website.")
    __properties: ClassVar[List[str]] = ["auth_only", "auth_type", "blind_mapped", "configurable_resources", "custom_scopes", "description", "docs", "free_trial_available", "has_sandbox_credentials", "icon_url", "id", "logo_url", "name", "oauth_credentials_source", "oauth_grant_type", "oauth_scopes", "partner_signup_url", "schema_support", "service_id", "settings", "signup_url", "status", "supported_events", "supported_resources", "tls_support", "unified_apis", "webhook_support", "website_url"]

    @field_validator('auth_type')
    def auth_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['oauth2', 'apiKey', 'basic', 'custom', 'none']):
            raise ValueError("must be one of enum values ('oauth2', 'apiKey', 'basic', 'custom', 'none')")
        return value

    @field_validator('oauth_credentials_source')
    def oauth_credentials_source_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['integration', 'connection']):
            raise ValueError("must be one of enum values ('integration', 'connection')")
        return value

    @field_validator('oauth_grant_type')
    def oauth_grant_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['authorization_code', 'client_credentials', 'password']):
            raise ValueError("must be one of enum values ('authorization_code', 'client_credentials', 'password')")
        return value

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
        """Create an instance of Connector from a JSON string"""
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
        """
        excluded_fields: Set[str] = set([
            "auth_only",
            "auth_type",
            "blind_mapped",
            "custom_scopes",
            "id",
            "oauth_credentials_source",
            "oauth_grant_type",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in docs (list)
        _items = []
        if self.docs:
            for _item_docs in self.docs:
                if _item_docs:
                    _items.append(_item_docs.to_dict())
            _dict['docs'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in oauth_scopes (list)
        _items = []
        if self.oauth_scopes:
            for _item_oauth_scopes in self.oauth_scopes:
                if _item_oauth_scopes:
                    _items.append(_item_oauth_scopes.to_dict())
            _dict['oauth_scopes'] = _items
        # override the default output from pydantic by calling `to_dict()` of schema_support
        if self.schema_support:
            _dict['schema_support'] = self.schema_support.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in settings (list)
        _items = []
        if self.settings:
            for _item_settings in self.settings:
                if _item_settings:
                    _items.append(_item_settings.to_dict())
            _dict['settings'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in supported_events (list)
        _items = []
        if self.supported_events:
            for _item_supported_events in self.supported_events:
                if _item_supported_events:
                    _items.append(_item_supported_events.to_dict())
            _dict['supported_events'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in supported_resources (list)
        _items = []
        if self.supported_resources:
            for _item_supported_resources in self.supported_resources:
                if _item_supported_resources:
                    _items.append(_item_supported_resources.to_dict())
            _dict['supported_resources'] = _items
        # override the default output from pydantic by calling `to_dict()` of tls_support
        if self.tls_support:
            _dict['tls_support'] = self.tls_support.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in unified_apis (list)
        _items = []
        if self.unified_apis:
            for _item_unified_apis in self.unified_apis:
                if _item_unified_apis:
                    _items.append(_item_unified_apis.to_dict())
            _dict['unified_apis'] = _items
        # override the default output from pydantic by calling `to_dict()` of webhook_support
        if self.webhook_support:
            _dict['webhook_support'] = self.webhook_support.to_dict()
        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Connector from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "auth_only": obj.get("auth_only"),
            "auth_type": obj.get("auth_type"),
            "blind_mapped": obj.get("blind_mapped"),
            "configurable_resources": obj.get("configurable_resources"),
            "custom_scopes": obj.get("custom_scopes"),
            "description": obj.get("description"),
            "docs": [ConnectorDoc.from_dict(_item) for _item in obj["docs"]] if obj.get("docs") is not None else None,
            "free_trial_available": obj.get("free_trial_available"),
            "has_sandbox_credentials": obj.get("has_sandbox_credentials"),
            "icon_url": obj.get("icon_url"),
            "id": obj.get("id"),
            "logo_url": obj.get("logo_url"),
            "name": obj.get("name"),
            "oauth_credentials_source": obj.get("oauth_credentials_source"),
            "oauth_grant_type": obj.get("oauth_grant_type"),
            "oauth_scopes": [ConnectorOauthScopesInner.from_dict(_item) for _item in obj["oauth_scopes"]] if obj.get("oauth_scopes") is not None else None,
            "partner_signup_url": obj.get("partner_signup_url"),
            "schema_support": SchemaSupport.from_dict(obj["schema_support"]) if obj.get("schema_support") is not None else None,
            "service_id": obj.get("service_id"),
            "settings": [ConnectorSetting.from_dict(_item) for _item in obj["settings"]] if obj.get("settings") is not None else None,
            "signup_url": obj.get("signup_url"),
            "status": obj.get("status"),
            "supported_events": [ConnectorEvent.from_dict(_item) for _item in obj["supported_events"]] if obj.get("supported_events") is not None else None,
            "supported_resources": [LinkedConnectorResource.from_dict(_item) for _item in obj["supported_resources"]] if obj.get("supported_resources") is not None else None,
            "tls_support": ConnectorTlsSupport.from_dict(obj["tls_support"]) if obj.get("tls_support") is not None else None,
            "unified_apis": [ConnectorUnifiedApisInner.from_dict(_item) for _item in obj["unified_apis"]] if obj.get("unified_apis") is not None else None,
            "webhook_support": WebhookSupport.from_dict(obj["webhook_support"]) if obj.get("webhook_support") is not None else None,
            "website_url": obj.get("website_url")
        })
        return _obj


