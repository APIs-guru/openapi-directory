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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.address import Address
from openapi_client.models.bank_account import BankAccount
from openapi_client.models.company_row_type import CompanyRowType
from openapi_client.models.currency import Currency
from openapi_client.models.custom_field import CustomField
from openapi_client.models.email import Email
from openapi_client.models.phone_number import PhoneNumber
from openapi_client.models.social_link import SocialLink
from openapi_client.models.website import Website
from typing import Optional, Set
from typing_extensions import Self

class Company(BaseModel):
    """
    Company
    """ # noqa: E501
    abn_branch: Optional[StrictStr] = Field(default=None, description="An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.")
    abn_or_tfn: Optional[StrictStr] = Field(default=None, description="An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.")
    acn: Optional[StrictStr] = Field(default=None, description="The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.")
    addresses: Optional[List[Address]] = None
    annual_revenue: Optional[StrictStr] = Field(default=None, description="The annual revenue of the company")
    bank_accounts: Optional[List[BankAccount]] = None
    birthday: Optional[date] = Field(default=None, description="The date of birth of the person.")
    created_at: Optional[datetime] = Field(default=None, description="Creation date")
    created_by: Optional[StrictStr] = Field(default=None, description="Created by user ID")
    currency: Optional[Currency] = None
    custom_fields: Optional[List[CustomField]] = None
    custom_mappings: Optional[Dict[str, Any]] = Field(default=None, description="When custom mappings are configured on the resource, the result is included here.")
    deleted: Optional[StrictBool] = Field(default=None, description="Whether the company is deleted or not")
    description: Optional[StrictStr] = Field(default=None, description="A description of the company")
    emails: Optional[List[Email]] = None
    fax: Optional[StrictStr] = Field(default=None, description="The fax number of the company")
    first_name: Optional[StrictStr] = Field(default=None, description="The first name of the person.")
    id: Optional[StrictStr] = Field(default=None, description="Unique identifier for the company")
    image: Optional[StrictStr] = Field(default=None, description="The Image URL of the company")
    industry: Optional[StrictStr] = Field(default=None, description="The industry represents the type of business the company is in.")
    interaction_count: Optional[StrictInt] = Field(default=None, description="Number of interactions")
    last_activity_at: Optional[datetime] = Field(default=None, description="Last activity date")
    last_name: Optional[StrictStr] = Field(default=None, description="The last name of the person.")
    name: Annotated[str, Field(min_length=1, strict=True)] = Field(description="Name of the company")
    number_of_employees: Optional[StrictStr] = Field(default=None, description="Number of employees")
    owner_id: Optional[StrictStr] = Field(default=None, description="Owner ID")
    ownership: Optional[StrictStr] = Field(default=None, description="The ownership indicates the type of ownership of the company.")
    parent_id: Optional[StrictStr] = Field(default=None, description="Parent ID")
    payee_number: Optional[StrictStr] = Field(default=None, description="A payee number is a unique number that identifies a payee for tax purposes.")
    phone_numbers: Optional[List[PhoneNumber]] = None
    read_only: Optional[StrictBool] = Field(default=None, description="Whether the company is read-only or not")
    row_type: Optional[CompanyRowType] = None
    sales_tax_number: Optional[StrictStr] = Field(default=None, description="A sales tax number is a unique number that identifies a company for tax purposes.")
    salutation: Optional[StrictStr] = Field(default=None, description="A formal salutation for the person. For example, 'Mr', 'Mrs'")
    social_links: Optional[List[SocialLink]] = None
    status: Optional[StrictStr] = Field(default=None, description="The status of the company")
    tags: Optional[List[StrictStr]] = None
    updated_at: Optional[datetime] = Field(default=None, description="Last updated date")
    updated_by: Optional[StrictStr] = Field(default=None, description="Updated by user ID")
    vat_number: Optional[StrictStr] = Field(default=None, description="The VAT number of the company")
    websites: Optional[List[Website]] = None
    __properties: ClassVar[List[str]] = ["abn_branch", "abn_or_tfn", "acn", "addresses", "annual_revenue", "bank_accounts", "birthday", "created_at", "created_by", "currency", "custom_fields", "custom_mappings", "deleted", "description", "emails", "fax", "first_name", "id", "image", "industry", "interaction_count", "last_activity_at", "last_name", "name", "number_of_employees", "owner_id", "ownership", "parent_id", "payee_number", "phone_numbers", "read_only", "row_type", "sales_tax_number", "salutation", "social_links", "status", "tags", "updated_at", "updated_by", "vat_number", "websites"]

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
        """Create an instance of Company from a JSON string"""
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
        """
        excluded_fields: Set[str] = set([
            "created_at",
            "created_by",
            "deleted",
            "id",
            "interaction_count",
            "last_activity_at",
            "parent_id",
            "updated_at",
            "updated_by",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in addresses (list)
        _items = []
        if self.addresses:
            for _item_addresses in self.addresses:
                if _item_addresses:
                    _items.append(_item_addresses.to_dict())
            _dict['addresses'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in bank_accounts (list)
        _items = []
        if self.bank_accounts:
            for _item_bank_accounts in self.bank_accounts:
                if _item_bank_accounts:
                    _items.append(_item_bank_accounts.to_dict())
            _dict['bank_accounts'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in custom_fields (list)
        _items = []
        if self.custom_fields:
            for _item_custom_fields in self.custom_fields:
                if _item_custom_fields:
                    _items.append(_item_custom_fields.to_dict())
            _dict['custom_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in emails (list)
        _items = []
        if self.emails:
            for _item_emails in self.emails:
                if _item_emails:
                    _items.append(_item_emails.to_dict())
            _dict['emails'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in phone_numbers (list)
        _items = []
        if self.phone_numbers:
            for _item_phone_numbers in self.phone_numbers:
                if _item_phone_numbers:
                    _items.append(_item_phone_numbers.to_dict())
            _dict['phone_numbers'] = _items
        # override the default output from pydantic by calling `to_dict()` of row_type
        if self.row_type:
            _dict['row_type'] = self.row_type.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in social_links (list)
        _items = []
        if self.social_links:
            for _item_social_links in self.social_links:
                if _item_social_links:
                    _items.append(_item_social_links.to_dict())
            _dict['social_links'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in websites (list)
        _items = []
        if self.websites:
            for _item_websites in self.websites:
                if _item_websites:
                    _items.append(_item_websites.to_dict())
            _dict['websites'] = _items
        # set to None if abn_branch (nullable) is None
        # and model_fields_set contains the field
        if self.abn_branch is None and "abn_branch" in self.model_fields_set:
            _dict['abn_branch'] = None

        # set to None if abn_or_tfn (nullable) is None
        # and model_fields_set contains the field
        if self.abn_or_tfn is None and "abn_or_tfn" in self.model_fields_set:
            _dict['abn_or_tfn'] = None

        # set to None if acn (nullable) is None
        # and model_fields_set contains the field
        if self.acn is None and "acn" in self.model_fields_set:
            _dict['acn'] = None

        # set to None if annual_revenue (nullable) is None
        # and model_fields_set contains the field
        if self.annual_revenue is None and "annual_revenue" in self.model_fields_set:
            _dict['annual_revenue'] = None

        # set to None if birthday (nullable) is None
        # and model_fields_set contains the field
        if self.birthday is None and "birthday" in self.model_fields_set:
            _dict['birthday'] = None

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

        # set to None if custom_mappings (nullable) is None
        # and model_fields_set contains the field
        if self.custom_mappings is None and "custom_mappings" in self.model_fields_set:
            _dict['custom_mappings'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if fax (nullable) is None
        # and model_fields_set contains the field
        if self.fax is None and "fax" in self.model_fields_set:
            _dict['fax'] = None

        # set to None if first_name (nullable) is None
        # and model_fields_set contains the field
        if self.first_name is None and "first_name" in self.model_fields_set:
            _dict['first_name'] = None

        # set to None if image (nullable) is None
        # and model_fields_set contains the field
        if self.image is None and "image" in self.model_fields_set:
            _dict['image'] = None

        # set to None if industry (nullable) is None
        # and model_fields_set contains the field
        if self.industry is None and "industry" in self.model_fields_set:
            _dict['industry'] = None

        # set to None if interaction_count (nullable) is None
        # and model_fields_set contains the field
        if self.interaction_count is None and "interaction_count" in self.model_fields_set:
            _dict['interaction_count'] = None

        # set to None if last_activity_at (nullable) is None
        # and model_fields_set contains the field
        if self.last_activity_at is None and "last_activity_at" in self.model_fields_set:
            _dict['last_activity_at'] = None

        # set to None if last_name (nullable) is None
        # and model_fields_set contains the field
        if self.last_name is None and "last_name" in self.model_fields_set:
            _dict['last_name'] = None

        # set to None if number_of_employees (nullable) is None
        # and model_fields_set contains the field
        if self.number_of_employees is None and "number_of_employees" in self.model_fields_set:
            _dict['number_of_employees'] = None

        # set to None if owner_id (nullable) is None
        # and model_fields_set contains the field
        if self.owner_id is None and "owner_id" in self.model_fields_set:
            _dict['owner_id'] = None

        # set to None if ownership (nullable) is None
        # and model_fields_set contains the field
        if self.ownership is None and "ownership" in self.model_fields_set:
            _dict['ownership'] = None

        # set to None if parent_id (nullable) is None
        # and model_fields_set contains the field
        if self.parent_id is None and "parent_id" in self.model_fields_set:
            _dict['parent_id'] = None

        # set to None if payee_number (nullable) is None
        # and model_fields_set contains the field
        if self.payee_number is None and "payee_number" in self.model_fields_set:
            _dict['payee_number'] = None

        # set to None if read_only (nullable) is None
        # and model_fields_set contains the field
        if self.read_only is None and "read_only" in self.model_fields_set:
            _dict['read_only'] = None

        # set to None if sales_tax_number (nullable) is None
        # and model_fields_set contains the field
        if self.sales_tax_number is None and "sales_tax_number" in self.model_fields_set:
            _dict['sales_tax_number'] = None

        # set to None if salutation (nullable) is None
        # and model_fields_set contains the field
        if self.salutation is None and "salutation" in self.model_fields_set:
            _dict['salutation'] = None

        # set to None if status (nullable) is None
        # and model_fields_set contains the field
        if self.status is None and "status" in self.model_fields_set:
            _dict['status'] = None

        # set to None if tags (nullable) is None
        # and model_fields_set contains the field
        if self.tags is None and "tags" in self.model_fields_set:
            _dict['tags'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if updated_by (nullable) is None
        # and model_fields_set contains the field
        if self.updated_by is None and "updated_by" in self.model_fields_set:
            _dict['updated_by'] = None

        # set to None if vat_number (nullable) is None
        # and model_fields_set contains the field
        if self.vat_number is None and "vat_number" in self.model_fields_set:
            _dict['vat_number'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Company from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "abn_branch": obj.get("abn_branch"),
            "abn_or_tfn": obj.get("abn_or_tfn"),
            "acn": obj.get("acn"),
            "addresses": [Address.from_dict(_item) for _item in obj["addresses"]] if obj.get("addresses") is not None else None,
            "annual_revenue": obj.get("annual_revenue"),
            "bank_accounts": [BankAccount.from_dict(_item) for _item in obj["bank_accounts"]] if obj.get("bank_accounts") is not None else None,
            "birthday": obj.get("birthday"),
            "created_at": obj.get("created_at"),
            "created_by": obj.get("created_by"),
            "currency": obj.get("currency"),
            "custom_fields": [CustomField.from_dict(_item) for _item in obj["custom_fields"]] if obj.get("custom_fields") is not None else None,
            "custom_mappings": obj.get("custom_mappings"),
            "deleted": obj.get("deleted"),
            "description": obj.get("description"),
            "emails": [Email.from_dict(_item) for _item in obj["emails"]] if obj.get("emails") is not None else None,
            "fax": obj.get("fax"),
            "first_name": obj.get("first_name"),
            "id": obj.get("id"),
            "image": obj.get("image"),
            "industry": obj.get("industry"),
            "interaction_count": obj.get("interaction_count"),
            "last_activity_at": obj.get("last_activity_at"),
            "last_name": obj.get("last_name"),
            "name": obj.get("name"),
            "number_of_employees": obj.get("number_of_employees"),
            "owner_id": obj.get("owner_id"),
            "ownership": obj.get("ownership"),
            "parent_id": obj.get("parent_id"),
            "payee_number": obj.get("payee_number"),
            "phone_numbers": [PhoneNumber.from_dict(_item) for _item in obj["phone_numbers"]] if obj.get("phone_numbers") is not None else None,
            "read_only": obj.get("read_only"),
            "row_type": CompanyRowType.from_dict(obj["row_type"]) if obj.get("row_type") is not None else None,
            "sales_tax_number": obj.get("sales_tax_number"),
            "salutation": obj.get("salutation"),
            "social_links": [SocialLink.from_dict(_item) for _item in obj["social_links"]] if obj.get("social_links") is not None else None,
            "status": obj.get("status"),
            "tags": obj.get("tags"),
            "updated_at": obj.get("updated_at"),
            "updated_by": obj.get("updated_by"),
            "vat_number": obj.get("vat_number"),
            "websites": [Website.from_dict(_item) for _item in obj["websites"]] if obj.get("websites") is not None else None
        })
        return _obj


