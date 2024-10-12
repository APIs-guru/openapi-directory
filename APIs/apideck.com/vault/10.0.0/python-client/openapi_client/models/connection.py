# coding: utf-8

"""
    Vault API

    Welcome to the Vault API 👋  When you're looking to connect to an API, the first step is authentication.  Vault helps you handle OAuth flows, store API keys, and refresh access tokens from users (called consumers in Apideck).  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Get Started  To use the Apideck APIs, you need to sign up for free at [https://app.apideck.com/signup](). Follow the steps below to get started.  - [Create a free account.](https://app.apideck.com/signup) - Go to the [Dashboard](https://app.apideck.com/unify/unified-apis/dashboard). - Get your API key and the application ID. - Select and configure the integrations you want to make available to your users. Through the Unify dashboard, you can configure which connectors you want to support as integrations. - Retrieve the client_id and client_secret for the integration you want to activate (Only needed for OAuth integrations). - Soon, you can skip the previous step and use the Apideck sandbox credentials to get you started instead (upcoming) - Register the redirect URI for the example app (https://unify.apideck.com/vault/callback) in the list of redirect URIs under your app's settings - Use the [publishing guides](/app-listing-requirements) to get your integration listed across app marketplaces.  ### Hosted Vault  Hosted Vault (vault.apideck.com) is a no-code solution, so you don't need to build your own UI to handle the integration settings and authentication.  ![Hosted Vault - Integrations portal](https://github.com/apideck-samples/integration-settings/raw/master/public/img/vault.png)  Behind the scenes, Hosted Vault implements the Vault API endpoints and handles the following features for your customers:  - Add a connection - Handle the OAuth flow - Configure connection settings per integration - Manage connections - Discover and propose integration options - Search for integrations (upcoming) - Give integration suggestions based on provided metadata (email or website) when creating the session (upcoming)  To use Hosted Vault, you will need to first [**create a session**](https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate). This can be achieved by making a POST request to the Vault API to create a valid session for a user, hereafter referred to as the consumer ID.  Example using curl:  ``` curl -X POST https://unify.apideck.com/vault/sessions     -H \"Content-Type: application/json\"     -H \"Authorization: Bearer <your-api-key>\"     -H \"X-APIDECK-CONSUMER-ID: <consumer-id>\"     -H \"X-APIDECK-APP-ID: <application-id>\"     -d '{\"consumer_metadata\": { \"account_name\" : \"Sample\", \"user_name\": \"Sand Box\", \"email\": \"sand@box.com\", \"image\": \"https://unavatar.now.sh/jake\" }, \"theme\": { \"vault_name\": \"Intercom\", \"primary_color\": \"#286efa\", \"sidepanel_background_color\": \"#286efa\",\"sidepanel_text_color\": \"#FFFFFF\", \"favicon\": \"https://res.cloudinary.com/apideck/icons/intercom\" }}' ```  ### Vault API  _Beware, this is strategy takes more time to implement in comparison to Hosted Vault._  If you are building your integration settings UI manually, you can call the Vault API directly.  The Vault API is for those who want to completely white label the in-app integrations overview and authentication experience. All the available endpoints are listed below.  Through the API, your customers authenticate directly in your app, where Vault will still take care of redirecting to the auth provider and back to your app.  If you're already storing access tokens, we will help you migrate through our Vault Migration API (upcoming).  ## Domain model  At its core, a domain model creates a web of interconnected entities.  Our domain model contains five main entity types: Consumer (user, account, team, machine), Application, Connector, Integration, and Connection.  ## Connection state  The connection state is computed based on the connection flow below.  ![](https://developers.apideck.com/api-references/vault/connection-flow.png)  More information about the connection state can be found in the [Connection state](https://developers.apideck.com/guides/connection-states) guide.  ## Unify and Proxy integration  The only thing you need to use the Unify APIs and Proxy is the consumer id; thereafter, Vault will do the look-up in the background to handle the token injection before performing the API call(s).  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-app-id      | String  | Yes      | The id of your Unify application. Available at https://app.apideck.com/api-keys. | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes. |  ## Guides  - [Get started with Apideck](https://developers.apideck.com/getting-started) - [Get started with Vault](https://developers.apideck.com/guides/vault) - [Authorize connection via Vault](https://developers.apideck.com/guides/authorize-connections) - [Vault connection status](https://developers.apideck.com/guides/connection-states) - [How to build an integrations UI with Vault](https://github.com/apideck-samples/integration-settings)   ## FAQ  **What purpose does Vault serve? Can I just handle the authentication and access token myself?** You can store everything yourself, but that defeats the purpose of using Apideck Unify. Handling tokens for multiple providers can quickly become very complex.  ### Is my data secure?  Vault employs data minimization, therefore only requesting the minimum amount of scopes needed to perform an API request.  ### How do I migrate existing data?  Using our migration API, you can migrate the access tokens and accounts to Apideck Vault.  ### Can I use Vault in combination with existing integrations?  Yes, you can. The flexibility of Unify allows you to quickly the use cases you need while keeping a gradual migration path based on your timeline and requirements.  ### How does Vault work for Apideck Ecosystem customers?  Once logged in, pick your ecosystem; on the left-hand side of the screen, you'll have the option to create an application underneath the Unify section.  ### How to integrate Apideck Vault  This section covers everything you need to know to authenticate your customers through Vault. Vault provides **three auth strategies** to use API tokens from your customers:  - Vault API - Hosted Vault - Vault Widget (JS, React, Vue)  You can also opt to bypass Vault and still take care of authentication flows yourself. Make sure to put the right safeguards in place to protect your customers' tokens and other sensitive data.  ### What auth types does Vault support?  We support all the common authentication types, including: API keys, OAuth, Basic auth, and more.  #### API keys  For Services supporting the API key strategy, you can use Hosted Vault will need to provide an in-app form where users can configure their API keys provided by the integration service.  #### OAuth 2.0  ##### Authorization Code Grant Type Flow  Vault handles the complete Authorization Code Grant Type Flow for you. This flow only supports browser-based (passive) authentication because most identity providers don't allow entering a username and password to be entered into applications that they don't own.  Certain connectors require an OAuth redirect authentication flow, where the end-user is redirected to the provider's website or mobile app to authenticate.  This is being handled by the `/authorize` endpoint.  #### Basic auth  Basic authentication is a simple authentication scheme built into the HTTP protocol. The required fields to complete basic auth are handled by Hosted Vault or by updating the connection through the Vault API below.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.auth_type import AuthType
from openapi_client.models.connection_configuration_inner import ConnectionConfigurationInner
from openapi_client.models.connection_state import ConnectionState
from openapi_client.models.custom_mapping import CustomMapping
from openapi_client.models.form_field import FormField
from openapi_client.models.integration_state import IntegrationState
from openapi_client.models.o_auth_grant_type import OAuthGrantType
from openapi_client.models.webhook_subscription import WebhookSubscription
from typing import Optional, Set
from typing_extensions import Self

class Connection(BaseModel):
    """
    Connection
    """ # noqa: E501
    auth_type: Optional[AuthType] = None
    authorize_url: Optional[StrictStr] = Field(default=None, description="The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter to the `authorize_url`. Be sure to URL encode the `redirect_uri` part. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.")
    configurable_resources: Optional[List[StrictStr]] = None
    configuration: Optional[List[ConnectionConfigurationInner]] = None
    created_at: Optional[Union[StrictFloat, StrictInt]] = None
    custom_mappings: Optional[List[CustomMapping]] = Field(default=None, description="List of custom mappings configured for this connection")
    enabled: Optional[StrictBool] = Field(default=None, description="Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.")
    form_fields: Optional[List[FormField]] = Field(default=None, description="The settings that are wanted to create a connection.")
    has_guide: Optional[StrictBool] = Field(default=None, description="Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).")
    icon: Optional[StrictStr] = Field(default=None, description="A visual icon of the connection, that will be shown in the Vault")
    id: Optional[StrictStr] = Field(default=None, description="The unique identifier of the connection.")
    integration_state: Optional[IntegrationState] = None
    logo: Optional[StrictStr] = Field(default=None, description="The logo of the connection, that will be shown in the Vault")
    metadata: Optional[Dict[str, Any]] = Field(default=None, description="Attach your own consumer specific metadata")
    name: Optional[StrictStr] = Field(default=None, description="The name of the connection")
    oauth_grant_type: Optional[OAuthGrantType] = None
    resource_schema_support: Optional[List[StrictStr]] = None
    resource_settings_support: Optional[List[StrictStr]] = None
    revoke_url: Optional[StrictStr] = Field(default=None, description="The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.")
    schema_support: Optional[StrictBool] = None
    service_id: Optional[StrictStr] = Field(default=None, description="The ID of the service this connection belongs to.")
    settings: Optional[Dict[str, Any]] = Field(default=None, description="Connection settings. Values will persist to `form_fields` with corresponding id")
    settings_required_for_authorization: Optional[List[StrictStr]] = Field(default=None, description="List of settings that are required to be configured on integration before authorization can occur")
    state: Optional[ConnectionState] = None
    status: Optional[StrictStr] = Field(default=None, description="Status of the connection.")
    subscriptions: Optional[List[WebhookSubscription]] = None
    tag_line: Optional[StrictStr] = None
    unified_api: Optional[StrictStr] = Field(default=None, description="The unified API category where the connection belongs to.")
    updated_at: Optional[Union[StrictFloat, StrictInt]] = None
    validation_support: Optional[StrictBool] = None
    website: Optional[StrictStr] = Field(default=None, description="The website URL of the connection")
    __properties: ClassVar[List[str]] = ["auth_type", "authorize_url", "configurable_resources", "configuration", "created_at", "custom_mappings", "enabled", "form_fields", "has_guide", "icon", "id", "integration_state", "logo", "metadata", "name", "oauth_grant_type", "resource_schema_support", "resource_settings_support", "revoke_url", "schema_support", "service_id", "settings", "settings_required_for_authorization", "state", "status", "subscriptions", "tag_line", "unified_api", "updated_at", "validation_support", "website"]

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['live', 'upcoming', 'requested']):
            raise ValueError("must be one of enum values ('live', 'upcoming', 'requested')")
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
        """Create an instance of Connection from a JSON string"""
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
        """
        excluded_fields: Set[str] = set([
            "authorize_url",
            "configurable_resources",
            "created_at",
            "form_fields",
            "has_guide",
            "icon",
            "id",
            "logo",
            "name",
            "resource_schema_support",
            "resource_settings_support",
            "revoke_url",
            "schema_support",
            "service_id",
            "settings_required_for_authorization",
            "status",
            "subscriptions",
            "tag_line",
            "unified_api",
            "updated_at",
            "validation_support",
            "website",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in configuration (list)
        _items = []
        if self.configuration:
            for _item_configuration in self.configuration:
                if _item_configuration:
                    _items.append(_item_configuration.to_dict())
            _dict['configuration'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in custom_mappings (list)
        _items = []
        if self.custom_mappings:
            for _item_custom_mappings in self.custom_mappings:
                if _item_custom_mappings:
                    _items.append(_item_custom_mappings.to_dict())
            _dict['custom_mappings'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in form_fields (list)
        _items = []
        if self.form_fields:
            for _item_form_fields in self.form_fields:
                if _item_form_fields:
                    _items.append(_item_form_fields.to_dict())
            _dict['form_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in subscriptions (list)
        _items = []
        if self.subscriptions:
            for _item_subscriptions in self.subscriptions:
                if _item_subscriptions:
                    _items.append(_item_subscriptions.to_dict())
            _dict['subscriptions'] = _items
        # set to None if authorize_url (nullable) is None
        # and model_fields_set contains the field
        if self.authorize_url is None and "authorize_url" in self.model_fields_set:
            _dict['authorize_url'] = None

        # set to None if metadata (nullable) is None
        # and model_fields_set contains the field
        if self.metadata is None and "metadata" in self.model_fields_set:
            _dict['metadata'] = None

        # set to None if revoke_url (nullable) is None
        # and model_fields_set contains the field
        if self.revoke_url is None and "revoke_url" in self.model_fields_set:
            _dict['revoke_url'] = None

        # set to None if settings (nullable) is None
        # and model_fields_set contains the field
        if self.settings is None and "settings" in self.model_fields_set:
            _dict['settings'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Connection from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "auth_type": obj.get("auth_type"),
            "authorize_url": obj.get("authorize_url"),
            "configurable_resources": obj.get("configurable_resources"),
            "configuration": [ConnectionConfigurationInner.from_dict(_item) for _item in obj["configuration"]] if obj.get("configuration") is not None else None,
            "created_at": obj.get("created_at"),
            "custom_mappings": [CustomMapping.from_dict(_item) for _item in obj["custom_mappings"]] if obj.get("custom_mappings") is not None else None,
            "enabled": obj.get("enabled"),
            "form_fields": [FormField.from_dict(_item) for _item in obj["form_fields"]] if obj.get("form_fields") is not None else None,
            "has_guide": obj.get("has_guide"),
            "icon": obj.get("icon"),
            "id": obj.get("id"),
            "integration_state": obj.get("integration_state"),
            "logo": obj.get("logo"),
            "metadata": obj.get("metadata"),
            "name": obj.get("name"),
            "oauth_grant_type": obj.get("oauth_grant_type"),
            "resource_schema_support": obj.get("resource_schema_support"),
            "resource_settings_support": obj.get("resource_settings_support"),
            "revoke_url": obj.get("revoke_url"),
            "schema_support": obj.get("schema_support"),
            "service_id": obj.get("service_id"),
            "settings": obj.get("settings"),
            "settings_required_for_authorization": obj.get("settings_required_for_authorization"),
            "state": obj.get("state"),
            "status": obj.get("status"),
            "subscriptions": [WebhookSubscription.from_dict(_item) for _item in obj["subscriptions"]] if obj.get("subscriptions") is not None else None,
            "tag_line": obj.get("tag_line"),
            "unified_api": obj.get("unified_api"),
            "updated_at": obj.get("updated_at"),
            "validation_support": obj.get("validation_support"),
            "website": obj.get("website")
        })
        return _obj


