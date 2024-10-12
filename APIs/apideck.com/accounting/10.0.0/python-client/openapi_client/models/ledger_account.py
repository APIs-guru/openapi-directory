# coding: utf-8

"""
    Accounting API

    Welcome to the Accounting API.  You can use this API to access all Accounting API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import date, datetime
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.bank_account import BankAccount
from openapi_client.models.categories_inner import CategoriesInner
from openapi_client.models.currency import Currency
from openapi_client.models.ledger_account_parent_account import LedgerAccountParentAccount
from openapi_client.models.linked_tax_rate import LinkedTaxRate
from openapi_client.models.sub_accounts_inner import SubAccountsInner
from typing import Optional, Set
from typing_extensions import Self

class LedgerAccount(BaseModel):
    """
    LedgerAccount
    """ # noqa: E501
    active: Optional[StrictBool] = Field(default=None, description="Whether the account is active or not.")
    bank_account: Optional[BankAccount] = None
    categories: Optional[List[CategoriesInner]] = Field(default=None, description="The categories of the account.")
    classification: Optional[StrictStr] = Field(default=None, description="The classification of account.")
    code: Optional[StrictStr] = Field(default=None, description="The code assigned to the account.")
    created_at: Optional[datetime] = Field(default=None, description="The date and time when the object was created.")
    created_by: Optional[StrictStr] = Field(default=None, description="The user who created the object.")
    currency: Optional[Currency] = None
    current_balance: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="The current balance of the account.")
    custom_mappings: Optional[Dict[str, Any]] = Field(default=None, description="When custom mappings are configured on the resource, the result is included here.")
    description: Optional[StrictStr] = Field(default=None, description="The description of the account.")
    display_id: Optional[StrictStr] = Field(default=None, description="The human readable display ID used when displaying the account")
    fully_qualified_name: Optional[StrictStr] = Field(default=None, description="The fully qualified name of the account.")
    header: Optional[StrictBool] = Field(default=None, description="Whether the account is a header or not.")
    id: Optional[StrictStr] = Field(default=None, description="A unique identifier for an object.")
    last_reconciliation_date: Optional[date] = Field(default=None, description="Reconciliation Date means the last calendar day of each Reconciliation Period.")
    level: Optional[Union[StrictFloat, StrictInt]] = None
    name: Optional[StrictStr] = Field(default=None, description="The name of the account.")
    nominal_code: Optional[StrictStr] = Field(default=None, description="The nominal code of the ledger account.")
    opening_balance: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="The opening balance of the account.")
    parent_account: Optional[LedgerAccountParentAccount] = None
    row_version: Optional[StrictStr] = Field(default=None, description="A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.")
    status: Optional[StrictStr] = Field(default=None, description="The status of the account.")
    sub_account: Optional[StrictBool] = Field(default=None, description="Whether the account is a sub account or not.")
    sub_accounts: Optional[List[SubAccountsInner]] = Field(default=None, description="The sub accounts of the account.")
    sub_type: Optional[StrictStr] = Field(default=None, description="The sub type of account.")
    tax_rate: Optional[LinkedTaxRate] = None
    tax_type: Optional[StrictStr] = Field(default=None, description="The tax type of the account.")
    type: Optional[StrictStr] = Field(default=None, description="The type of account.")
    updated_at: Optional[datetime] = Field(default=None, description="The date and time when the object was last updated.")
    updated_by: Optional[StrictStr] = Field(default=None, description="The user who last updated the object.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["active", "bank_account", "categories", "classification", "code", "created_at", "created_by", "currency", "current_balance", "custom_mappings", "description", "display_id", "fully_qualified_name", "header", "id", "last_reconciliation_date", "level", "name", "nominal_code", "opening_balance", "parent_account", "row_version", "status", "sub_account", "sub_accounts", "sub_type", "tax_rate", "tax_type", "type", "updated_at", "updated_by"]

    @field_validator('classification')
    def classification_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['asset', 'equity', 'expense', 'liability', 'revenue', 'income', 'other_income', 'other_expense', 'costs_of_sales']):
            raise ValueError("must be one of enum values ('asset', 'equity', 'expense', 'liability', 'revenue', 'income', 'other_income', 'other_expense', 'costs_of_sales')")
        return value

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['active', 'inactive', 'archived']):
            raise ValueError("must be one of enum values ('active', 'inactive', 'archived')")
        return value

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['accounts_receivable', 'revenue', 'sales', 'other_income', 'bank', 'current_asset', 'fixed_asset', 'non_current_asset', 'other_asset', 'balancesheet', 'equity', 'expense', 'other_expense', 'costs_of_sales', 'accounts_payable', 'credit_card', 'current_liability', 'non_current_liability', 'other_liability', 'other']):
            raise ValueError("must be one of enum values ('accounts_receivable', 'revenue', 'sales', 'other_income', 'bank', 'current_asset', 'fixed_asset', 'non_current_asset', 'other_asset', 'balancesheet', 'equity', 'expense', 'other_expense', 'costs_of_sales', 'accounts_payable', 'credit_card', 'current_liability', 'non_current_liability', 'other_liability', 'other')")
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
        """Create an instance of LedgerAccount from a JSON string"""
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
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "categories",
            "created_at",
            "created_by",
            "id",
            "sub_accounts",
            "updated_at",
            "updated_by",
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of bank_account
        if self.bank_account:
            _dict['bank_account'] = self.bank_account.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in categories (list)
        _items = []
        if self.categories:
            for _item_categories in self.categories:
                if _item_categories:
                    _items.append(_item_categories.to_dict())
            _dict['categories'] = _items
        # override the default output from pydantic by calling `to_dict()` of parent_account
        if self.parent_account:
            _dict['parent_account'] = self.parent_account.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in sub_accounts (list)
        _items = []
        if self.sub_accounts:
            for _item_sub_accounts in self.sub_accounts:
                if _item_sub_accounts:
                    _items.append(_item_sub_accounts.to_dict())
            _dict['sub_accounts'] = _items
        # override the default output from pydantic by calling `to_dict()` of tax_rate
        if self.tax_rate:
            _dict['tax_rate'] = self.tax_rate.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        # set to None if active (nullable) is None
        # and model_fields_set contains the field
        if self.active is None and "active" in self.model_fields_set:
            _dict['active'] = None

        # set to None if classification (nullable) is None
        # and model_fields_set contains the field
        if self.classification is None and "classification" in self.model_fields_set:
            _dict['classification'] = None

        # set to None if code (nullable) is None
        # and model_fields_set contains the field
        if self.code is None and "code" in self.model_fields_set:
            _dict['code'] = None

        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if created_by (nullable) is None
        # and model_fields_set contains the field
        if self.created_by is None and "created_by" in self.model_fields_set:
            _dict['created_by'] = None

        # set to None if currency (nullable) is None
        # and model_fields_set contains the field
        if self.currency is None and "currency" in self.model_fields_set:
            _dict['currency'] = None

        # set to None if current_balance (nullable) is None
        # and model_fields_set contains the field
        if self.current_balance is None and "current_balance" in self.model_fields_set:
            _dict['current_balance'] = None

        # set to None if custom_mappings (nullable) is None
        # and model_fields_set contains the field
        if self.custom_mappings is None and "custom_mappings" in self.model_fields_set:
            _dict['custom_mappings'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if fully_qualified_name (nullable) is None
        # and model_fields_set contains the field
        if self.fully_qualified_name is None and "fully_qualified_name" in self.model_fields_set:
            _dict['fully_qualified_name'] = None

        # set to None if header (nullable) is None
        # and model_fields_set contains the field
        if self.header is None and "header" in self.model_fields_set:
            _dict['header'] = None

        # set to None if last_reconciliation_date (nullable) is None
        # and model_fields_set contains the field
        if self.last_reconciliation_date is None and "last_reconciliation_date" in self.model_fields_set:
            _dict['last_reconciliation_date'] = None

        # set to None if level (nullable) is None
        # and model_fields_set contains the field
        if self.level is None and "level" in self.model_fields_set:
            _dict['level'] = None

        # set to None if name (nullable) is None
        # and model_fields_set contains the field
        if self.name is None and "name" in self.model_fields_set:
            _dict['name'] = None

        # set to None if nominal_code (nullable) is None
        # and model_fields_set contains the field
        if self.nominal_code is None and "nominal_code" in self.model_fields_set:
            _dict['nominal_code'] = None

        # set to None if opening_balance (nullable) is None
        # and model_fields_set contains the field
        if self.opening_balance is None and "opening_balance" in self.model_fields_set:
            _dict['opening_balance'] = None

        # set to None if row_version (nullable) is None
        # and model_fields_set contains the field
        if self.row_version is None and "row_version" in self.model_fields_set:
            _dict['row_version'] = None

        # set to None if status (nullable) is None
        # and model_fields_set contains the field
        if self.status is None and "status" in self.model_fields_set:
            _dict['status'] = None

        # set to None if sub_account (nullable) is None
        # and model_fields_set contains the field
        if self.sub_account is None and "sub_account" in self.model_fields_set:
            _dict['sub_account'] = None

        # set to None if sub_type (nullable) is None
        # and model_fields_set contains the field
        if self.sub_type is None and "sub_type" in self.model_fields_set:
            _dict['sub_type'] = None

        # set to None if tax_type (nullable) is None
        # and model_fields_set contains the field
        if self.tax_type is None and "tax_type" in self.model_fields_set:
            _dict['tax_type'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if updated_by (nullable) is None
        # and model_fields_set contains the field
        if self.updated_by is None and "updated_by" in self.model_fields_set:
            _dict['updated_by'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of LedgerAccount from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "active": obj.get("active"),
            "bank_account": BankAccount.from_dict(obj["bank_account"]) if obj.get("bank_account") is not None else None,
            "categories": [CategoriesInner.from_dict(_item) for _item in obj["categories"]] if obj.get("categories") is not None else None,
            "classification": obj.get("classification"),
            "code": obj.get("code"),
            "created_at": obj.get("created_at"),
            "created_by": obj.get("created_by"),
            "currency": obj.get("currency"),
            "current_balance": obj.get("current_balance"),
            "custom_mappings": obj.get("custom_mappings"),
            "description": obj.get("description"),
            "display_id": obj.get("display_id"),
            "fully_qualified_name": obj.get("fully_qualified_name"),
            "header": obj.get("header"),
            "id": obj.get("id"),
            "last_reconciliation_date": obj.get("last_reconciliation_date"),
            "level": obj.get("level"),
            "name": obj.get("name"),
            "nominal_code": obj.get("nominal_code"),
            "opening_balance": obj.get("opening_balance"),
            "parent_account": LedgerAccountParentAccount.from_dict(obj["parent_account"]) if obj.get("parent_account") is not None else None,
            "row_version": obj.get("row_version"),
            "status": obj.get("status"),
            "sub_account": obj.get("sub_account"),
            "sub_accounts": [SubAccountsInner.from_dict(_item) for _item in obj["sub_accounts"]] if obj.get("sub_accounts") is not None else None,
            "sub_type": obj.get("sub_type"),
            "tax_rate": LinkedTaxRate.from_dict(obj["tax_rate"]) if obj.get("tax_rate") is not None else None,
            "tax_type": obj.get("tax_type"),
            "type": obj.get("type"),
            "updated_at": obj.get("updated_at"),
            "updated_by": obj.get("updated_by")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


