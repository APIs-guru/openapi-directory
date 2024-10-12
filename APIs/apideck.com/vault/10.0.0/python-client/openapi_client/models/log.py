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
from openapi_client.models.log_operation import LogOperation
from openapi_client.models.log_service import LogService
from typing import Optional, Set
from typing_extensions import Self

class Log(BaseModel):
    """
    Log
    """ # noqa: E501
    api_style: StrictStr = Field(description="Indicates if the request was made via REST or Graphql endpoint.")
    base_url: StrictStr = Field(description="The Apideck base URL the request was made to.")
    child_request: StrictBool = Field(description="Indicates whether or not this is a child or parent request.")
    consumer_id: StrictStr = Field(description="The consumer Id associated with the request.")
    duration: Union[StrictFloat, StrictInt] = Field(description="The entire execution time in milliseconds it took to call the Apideck service provider.")
    error_message: Optional[StrictStr] = Field(default=None, description="If error occurred, this is brief explanation")
    execution: StrictInt = Field(description="The entire execution time in milliseconds it took to make the request.")
    has_children: StrictBool = Field(description="When request is a parent request, this indicates if there are child requests associated.")
    http_method: StrictStr = Field(description="HTTP Method of request.")
    id: StrictStr = Field(description="UUID acting as Request Identifier.")
    latency: Union[StrictFloat, StrictInt] = Field(description="Latency added by making this request via Unified Api.")
    operation: LogOperation
    parent_id: Optional[StrictStr] = Field(description="When request is a child request, this UUID indicates it's parent request.")
    path: StrictStr = Field(description="The path component of the URI the request was made to.")
    sandbox: StrictBool = Field(description="Indicates whether the request was made using Apidecks sandbox credentials or not.")
    service: LogService
    source_ip: Optional[StrictStr] = Field(default=None, description="The IP address of the source of the request.")
    status_code: StrictInt = Field(description="HTTP Status code that was returned.")
    success: StrictBool = Field(description="Whether or not the request was successful.")
    timestamp: StrictStr = Field(description="ISO Date and time when the request was made.")
    unified_api: StrictStr = Field(description="Which Unified Api request was made to.")
    __properties: ClassVar[List[str]] = ["api_style", "base_url", "child_request", "consumer_id", "duration", "error_message", "execution", "has_children", "http_method", "id", "latency", "operation", "parent_id", "path", "sandbox", "service", "source_ip", "status_code", "success", "timestamp", "unified_api"]

    @field_validator('unified_api')
    def unified_api_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['crm', 'lead', 'proxy', 'vault', 'accounting', 'hris', 'ats', 'ecommerce', 'issue-tracking', 'pos', 'file-storage', 'sms']):
            raise ValueError("must be one of enum values ('crm', 'lead', 'proxy', 'vault', 'accounting', 'hris', 'ats', 'ecommerce', 'issue-tracking', 'pos', 'file-storage', 'sms')")
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
        """Create an instance of Log from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of operation
        if self.operation:
            _dict['operation'] = self.operation.to_dict()
        # override the default output from pydantic by calling `to_dict()` of service
        if self.service:
            _dict['service'] = self.service.to_dict()
        # set to None if error_message (nullable) is None
        # and model_fields_set contains the field
        if self.error_message is None and "error_message" in self.model_fields_set:
            _dict['error_message'] = None

        # set to None if parent_id (nullable) is None
        # and model_fields_set contains the field
        if self.parent_id is None and "parent_id" in self.model_fields_set:
            _dict['parent_id'] = None

        # set to None if source_ip (nullable) is None
        # and model_fields_set contains the field
        if self.source_ip is None and "source_ip" in self.model_fields_set:
            _dict['source_ip'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Log from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "api_style": obj.get("api_style"),
            "base_url": obj.get("base_url"),
            "child_request": obj.get("child_request"),
            "consumer_id": obj.get("consumer_id"),
            "duration": obj.get("duration"),
            "error_message": obj.get("error_message"),
            "execution": obj.get("execution"),
            "has_children": obj.get("has_children"),
            "http_method": obj.get("http_method"),
            "id": obj.get("id"),
            "latency": obj.get("latency"),
            "operation": LogOperation.from_dict(obj["operation"]) if obj.get("operation") is not None else None,
            "parent_id": obj.get("parent_id"),
            "path": obj.get("path"),
            "sandbox": obj.get("sandbox"),
            "service": LogService.from_dict(obj["service"]) if obj.get("service") is not None else None,
            "source_ip": obj.get("source_ip"),
            "status_code": obj.get("status_code"),
            "success": obj.get("success"),
            "timestamp": obj.get("timestamp"),
            "unified_api": obj.get("unified_api")
        })
        return _obj


