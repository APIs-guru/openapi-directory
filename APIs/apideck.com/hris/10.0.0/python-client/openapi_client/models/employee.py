# coding: utf-8

"""
    HRIS API

    Welcome to the HRIS API.  You can use this API to access all HRIS API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.address import Address
from openapi_client.models.bank_account import BankAccount
from openapi_client.models.custom_field import CustomField
from openapi_client.models.email import Email
from openapi_client.models.employee_compensation import EmployeeCompensation
from openapi_client.models.employee_employment_role import EmployeeEmploymentRole
from openapi_client.models.employee_job import EmployeeJob
from openapi_client.models.employee_manager import EmployeeManager
from openapi_client.models.employment_status import EmploymentStatus
from openapi_client.models.gender import Gender
from openapi_client.models.person import Person
from openapi_client.models.phone_number import PhoneNumber
from openapi_client.models.probation_period import ProbationPeriod
from openapi_client.models.social_link import SocialLink
from openapi_client.models.team import Team
from typing import Optional, Set
from typing_extensions import Self

class Employee(BaseModel):
    """
    Employee
    """ # noqa: E501
    addresses: Optional[List[Address]] = None
    bank_accounts: Optional[List[BankAccount]] = None
    birthday: Optional[date] = Field(default=None, description="The date of birth of the person.")
    company_id: Optional[StrictStr] = Field(default=None, description="The unique identifier of the company.")
    company_name: Optional[StrictStr] = Field(default=None, description="The name of the company.")
    compensations: Optional[List[EmployeeCompensation]] = None
    country_of_birth: Optional[Annotated[str, Field(min_length=2, strict=True, max_length=2)]] = Field(default=None, description="Country code according to ISO 3166-1 alpha-2.")
    created_at: Optional[datetime] = Field(default=None, description="The date and time when the object was created.")
    created_by: Optional[StrictStr] = Field(default=None, description="The user who created the object.")
    custom_fields: Optional[List[CustomField]] = None
    custom_mappings: Optional[Dict[str, Any]] = Field(default=None, description="When custom mappings are configured on the resource, the result is included here.")
    deceased_on: Optional[date] = Field(default=None, description="The date the person deceased.")
    deleted: Optional[StrictBool] = Field(default=None, description="Flag to indicate if the object is deleted.")
    department: Optional[StrictStr] = Field(default=None, description="The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.")
    department_id: Optional[StrictStr] = Field(default=None, description="Unique identifier of the department ID this employee belongs to.")
    department_name: Optional[StrictStr] = Field(default=None, description="Name of the department this employee belongs to.")
    description: Optional[StrictStr] = Field(default=None, description="A description of the object.")
    dietary_preference: Optional[StrictStr] = Field(default=None, description="Indicate the employee's dietary preference.")
    direct_reports: Optional[List[StrictStr]] = Field(default=None, description="Direct reports is an array of ids that reflect the individuals in an organizational hierarchy who are directly supervised by this specific employee.")
    display_name: Optional[StrictStr] = Field(default=None, description="The name used to display the employee, often a combination of their first and last names.")
    division: Optional[StrictStr] = Field(default=None, description="The division the person is currently in. Usually a collection of departments or teams or regions.")
    division_id: Optional[StrictStr] = Field(default=None, description="Unique identifier of the division this employee belongs to.")
    emails: Optional[List[Email]] = None
    employee_number: Optional[StrictStr] = Field(default=None, description="An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.")
    employment_end_date: Optional[StrictStr] = Field(default=None, description="An End Date is the date that the employee ended working at the company")
    employment_role: Optional[EmployeeEmploymentRole] = None
    employment_start_date: Optional[StrictStr] = Field(default=None, description="A Start Date is the date that the employee started working at the company")
    employment_status: Optional[EmploymentStatus] = None
    ethnicity: Optional[StrictStr] = Field(default=None, description="The ethnicity of the employee")
    first_name: Optional[StrictStr] = Field(default=None, description="The first name of the person.")
    food_allergies: Optional[List[StrictStr]] = Field(default=None, description="Indicate the employee's food allergies.")
    gender: Optional[Gender] = None
    id: StrictStr = Field(description="A unique identifier for an object.")
    initials: Optional[StrictStr] = Field(default=None, description="The initials of the person, usually derived from their first, middle, and last names.")
    jobs: Optional[List[EmployeeJob]] = None
    languages: Optional[List[Optional[StrictStr]]] = None
    last_name: Optional[StrictStr] = Field(default=None, description="The last name of the person.")
    leaving_reason: Optional[StrictStr] = Field(default=None, description="The reason because the employment ended.")
    manager: Optional[EmployeeManager] = None
    marital_status: Optional[StrictStr] = Field(default=None, description="The marital status of the employee.")
    middle_name: Optional[StrictStr] = Field(default=None, description="Middle name of the person.")
    nationalities: Optional[List[Optional[StrictStr]]] = None
    partner: Optional[Person] = None
    phone_numbers: Optional[List[PhoneNumber]] = None
    photo_url: Optional[StrictStr] = Field(default=None, description="The URL of the photo of a person.")
    preferred_language: Optional[StrictStr] = Field(default=None, description="language code according to ISO 639-1. For the United States - EN")
    preferred_name: Optional[StrictStr] = Field(default=None, description="The name the employee prefers to be addressed by, which may be different from their legal name.")
    probation_period: Optional[ProbationPeriod] = None
    pronouns: Optional[StrictStr] = Field(default=None, description="The preferred pronouns of the person.")
    record_url: Optional[StrictStr] = None
    row_version: Optional[StrictStr] = Field(default=None, description="A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.")
    salutation: Optional[StrictStr] = Field(default=None, description="A formal salutation for the person. For example, 'Mr', 'Mrs'")
    social_links: Optional[List[SocialLink]] = None
    social_security_number: Optional[StrictStr] = Field(default=None, description="A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.")
    source: Optional[StrictStr] = Field(default=None, description="When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.")
    source_id: Optional[StrictStr] = Field(default=None, description="Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).")
    tags: Optional[List[StrictStr]] = None
    tax_code: Optional[StrictStr] = None
    tax_id: Optional[StrictStr] = None
    team: Optional[Team] = None
    timezone: Optional[StrictStr] = Field(default=None, description="The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.")
    title: Optional[StrictStr] = Field(default=None, description="The job title of the person.")
    updated_at: Optional[datetime] = Field(default=None, description="The date and time when the object was last updated.")
    updated_by: Optional[StrictStr] = Field(default=None, description="The user who last updated the object.")
    works_remote: Optional[StrictBool] = Field(default=None, description="Indicates if the employee works from a remote location.")
    __properties: ClassVar[List[str]] = ["addresses", "bank_accounts", "birthday", "company_id", "company_name", "compensations", "country_of_birth", "created_at", "created_by", "custom_fields", "custom_mappings", "deceased_on", "deleted", "department", "department_id", "department_name", "description", "dietary_preference", "direct_reports", "display_name", "division", "division_id", "emails", "employee_number", "employment_end_date", "employment_role", "employment_start_date", "employment_status", "ethnicity", "first_name", "food_allergies", "gender", "id", "initials", "jobs", "languages", "last_name", "leaving_reason", "manager", "marital_status", "middle_name", "nationalities", "partner", "phone_numbers", "photo_url", "preferred_language", "preferred_name", "probation_period", "pronouns", "record_url", "row_version", "salutation", "social_links", "social_security_number", "source", "source_id", "tags", "tax_code", "tax_id", "team", "timezone", "title", "updated_at", "updated_by", "works_remote"]

    @field_validator('leaving_reason')
    def leaving_reason_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['dismissed', 'resigned', 'redundancy', 'other']):
            raise ValueError("must be one of enum values ('dismissed', 'resigned', 'redundancy', 'other')")
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
        """Create an instance of Employee from a JSON string"""
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
        """
        excluded_fields: Set[str] = set([
            "created_at",
            "created_by",
            "id",
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
        # override the default output from pydantic by calling `to_dict()` of each item in compensations (list)
        _items = []
        if self.compensations:
            for _item_compensations in self.compensations:
                if _item_compensations:
                    _items.append(_item_compensations.to_dict())
            _dict['compensations'] = _items
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
        # override the default output from pydantic by calling `to_dict()` of employment_role
        if self.employment_role:
            _dict['employment_role'] = self.employment_role.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in jobs (list)
        _items = []
        if self.jobs:
            for _item_jobs in self.jobs:
                if _item_jobs:
                    _items.append(_item_jobs.to_dict())
            _dict['jobs'] = _items
        # override the default output from pydantic by calling `to_dict()` of manager
        if self.manager:
            _dict['manager'] = self.manager.to_dict()
        # override the default output from pydantic by calling `to_dict()` of partner
        if self.partner:
            _dict['partner'] = self.partner.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in phone_numbers (list)
        _items = []
        if self.phone_numbers:
            for _item_phone_numbers in self.phone_numbers:
                if _item_phone_numbers:
                    _items.append(_item_phone_numbers.to_dict())
            _dict['phone_numbers'] = _items
        # override the default output from pydantic by calling `to_dict()` of probation_period
        if self.probation_period:
            _dict['probation_period'] = self.probation_period.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in social_links (list)
        _items = []
        if self.social_links:
            for _item_social_links in self.social_links:
                if _item_social_links:
                    _items.append(_item_social_links.to_dict())
            _dict['social_links'] = _items
        # override the default output from pydantic by calling `to_dict()` of team
        if self.team:
            _dict['team'] = self.team.to_dict()
        # set to None if birthday (nullable) is None
        # and model_fields_set contains the field
        if self.birthday is None and "birthday" in self.model_fields_set:
            _dict['birthday'] = None

        # set to None if company_id (nullable) is None
        # and model_fields_set contains the field
        if self.company_id is None and "company_id" in self.model_fields_set:
            _dict['company_id'] = None

        # set to None if company_name (nullable) is None
        # and model_fields_set contains the field
        if self.company_name is None and "company_name" in self.model_fields_set:
            _dict['company_name'] = None

        # set to None if compensations (nullable) is None
        # and model_fields_set contains the field
        if self.compensations is None and "compensations" in self.model_fields_set:
            _dict['compensations'] = None

        # set to None if country_of_birth (nullable) is None
        # and model_fields_set contains the field
        if self.country_of_birth is None and "country_of_birth" in self.model_fields_set:
            _dict['country_of_birth'] = None

        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if created_by (nullable) is None
        # and model_fields_set contains the field
        if self.created_by is None and "created_by" in self.model_fields_set:
            _dict['created_by'] = None

        # set to None if custom_mappings (nullable) is None
        # and model_fields_set contains the field
        if self.custom_mappings is None and "custom_mappings" in self.model_fields_set:
            _dict['custom_mappings'] = None

        # set to None if deceased_on (nullable) is None
        # and model_fields_set contains the field
        if self.deceased_on is None and "deceased_on" in self.model_fields_set:
            _dict['deceased_on'] = None

        # set to None if deleted (nullable) is None
        # and model_fields_set contains the field
        if self.deleted is None and "deleted" in self.model_fields_set:
            _dict['deleted'] = None

        # set to None if department (nullable) is None
        # and model_fields_set contains the field
        if self.department is None and "department" in self.model_fields_set:
            _dict['department'] = None

        # set to None if department_id (nullable) is None
        # and model_fields_set contains the field
        if self.department_id is None and "department_id" in self.model_fields_set:
            _dict['department_id'] = None

        # set to None if department_name (nullable) is None
        # and model_fields_set contains the field
        if self.department_name is None and "department_name" in self.model_fields_set:
            _dict['department_name'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if dietary_preference (nullable) is None
        # and model_fields_set contains the field
        if self.dietary_preference is None and "dietary_preference" in self.model_fields_set:
            _dict['dietary_preference'] = None

        # set to None if direct_reports (nullable) is None
        # and model_fields_set contains the field
        if self.direct_reports is None and "direct_reports" in self.model_fields_set:
            _dict['direct_reports'] = None

        # set to None if display_name (nullable) is None
        # and model_fields_set contains the field
        if self.display_name is None and "display_name" in self.model_fields_set:
            _dict['display_name'] = None

        # set to None if division (nullable) is None
        # and model_fields_set contains the field
        if self.division is None and "division" in self.model_fields_set:
            _dict['division'] = None

        # set to None if division_id (nullable) is None
        # and model_fields_set contains the field
        if self.division_id is None and "division_id" in self.model_fields_set:
            _dict['division_id'] = None

        # set to None if employee_number (nullable) is None
        # and model_fields_set contains the field
        if self.employee_number is None and "employee_number" in self.model_fields_set:
            _dict['employee_number'] = None

        # set to None if employment_end_date (nullable) is None
        # and model_fields_set contains the field
        if self.employment_end_date is None and "employment_end_date" in self.model_fields_set:
            _dict['employment_end_date'] = None

        # set to None if employment_start_date (nullable) is None
        # and model_fields_set contains the field
        if self.employment_start_date is None and "employment_start_date" in self.model_fields_set:
            _dict['employment_start_date'] = None

        # set to None if employment_status (nullable) is None
        # and model_fields_set contains the field
        if self.employment_status is None and "employment_status" in self.model_fields_set:
            _dict['employment_status'] = None

        # set to None if ethnicity (nullable) is None
        # and model_fields_set contains the field
        if self.ethnicity is None and "ethnicity" in self.model_fields_set:
            _dict['ethnicity'] = None

        # set to None if first_name (nullable) is None
        # and model_fields_set contains the field
        if self.first_name is None and "first_name" in self.model_fields_set:
            _dict['first_name'] = None

        # set to None if food_allergies (nullable) is None
        # and model_fields_set contains the field
        if self.food_allergies is None and "food_allergies" in self.model_fields_set:
            _dict['food_allergies'] = None

        # set to None if gender (nullable) is None
        # and model_fields_set contains the field
        if self.gender is None and "gender" in self.model_fields_set:
            _dict['gender'] = None

        # set to None if initials (nullable) is None
        # and model_fields_set contains the field
        if self.initials is None and "initials" in self.model_fields_set:
            _dict['initials'] = None

        # set to None if jobs (nullable) is None
        # and model_fields_set contains the field
        if self.jobs is None and "jobs" in self.model_fields_set:
            _dict['jobs'] = None

        # set to None if last_name (nullable) is None
        # and model_fields_set contains the field
        if self.last_name is None and "last_name" in self.model_fields_set:
            _dict['last_name'] = None

        # set to None if leaving_reason (nullable) is None
        # and model_fields_set contains the field
        if self.leaving_reason is None and "leaving_reason" in self.model_fields_set:
            _dict['leaving_reason'] = None

        # set to None if marital_status (nullable) is None
        # and model_fields_set contains the field
        if self.marital_status is None and "marital_status" in self.model_fields_set:
            _dict['marital_status'] = None

        # set to None if middle_name (nullable) is None
        # and model_fields_set contains the field
        if self.middle_name is None and "middle_name" in self.model_fields_set:
            _dict['middle_name'] = None

        # set to None if photo_url (nullable) is None
        # and model_fields_set contains the field
        if self.photo_url is None and "photo_url" in self.model_fields_set:
            _dict['photo_url'] = None

        # set to None if preferred_language (nullable) is None
        # and model_fields_set contains the field
        if self.preferred_language is None and "preferred_language" in self.model_fields_set:
            _dict['preferred_language'] = None

        # set to None if preferred_name (nullable) is None
        # and model_fields_set contains the field
        if self.preferred_name is None and "preferred_name" in self.model_fields_set:
            _dict['preferred_name'] = None

        # set to None if pronouns (nullable) is None
        # and model_fields_set contains the field
        if self.pronouns is None and "pronouns" in self.model_fields_set:
            _dict['pronouns'] = None

        # set to None if record_url (nullable) is None
        # and model_fields_set contains the field
        if self.record_url is None and "record_url" in self.model_fields_set:
            _dict['record_url'] = None

        # set to None if row_version (nullable) is None
        # and model_fields_set contains the field
        if self.row_version is None and "row_version" in self.model_fields_set:
            _dict['row_version'] = None

        # set to None if salutation (nullable) is None
        # and model_fields_set contains the field
        if self.salutation is None and "salutation" in self.model_fields_set:
            _dict['salutation'] = None

        # set to None if social_security_number (nullable) is None
        # and model_fields_set contains the field
        if self.social_security_number is None and "social_security_number" in self.model_fields_set:
            _dict['social_security_number'] = None

        # set to None if source (nullable) is None
        # and model_fields_set contains the field
        if self.source is None and "source" in self.model_fields_set:
            _dict['source'] = None

        # set to None if source_id (nullable) is None
        # and model_fields_set contains the field
        if self.source_id is None and "source_id" in self.model_fields_set:
            _dict['source_id'] = None

        # set to None if tags (nullable) is None
        # and model_fields_set contains the field
        if self.tags is None and "tags" in self.model_fields_set:
            _dict['tags'] = None

        # set to None if tax_code (nullable) is None
        # and model_fields_set contains the field
        if self.tax_code is None and "tax_code" in self.model_fields_set:
            _dict['tax_code'] = None

        # set to None if tax_id (nullable) is None
        # and model_fields_set contains the field
        if self.tax_id is None and "tax_id" in self.model_fields_set:
            _dict['tax_id'] = None

        # set to None if team (nullable) is None
        # and model_fields_set contains the field
        if self.team is None and "team" in self.model_fields_set:
            _dict['team'] = None

        # set to None if timezone (nullable) is None
        # and model_fields_set contains the field
        if self.timezone is None and "timezone" in self.model_fields_set:
            _dict['timezone'] = None

        # set to None if title (nullable) is None
        # and model_fields_set contains the field
        if self.title is None and "title" in self.model_fields_set:
            _dict['title'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if updated_by (nullable) is None
        # and model_fields_set contains the field
        if self.updated_by is None and "updated_by" in self.model_fields_set:
            _dict['updated_by'] = None

        # set to None if works_remote (nullable) is None
        # and model_fields_set contains the field
        if self.works_remote is None and "works_remote" in self.model_fields_set:
            _dict['works_remote'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Employee from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "addresses": [Address.from_dict(_item) for _item in obj["addresses"]] if obj.get("addresses") is not None else None,
            "bank_accounts": [BankAccount.from_dict(_item) for _item in obj["bank_accounts"]] if obj.get("bank_accounts") is not None else None,
            "birthday": obj.get("birthday"),
            "company_id": obj.get("company_id"),
            "company_name": obj.get("company_name"),
            "compensations": [EmployeeCompensation.from_dict(_item) for _item in obj["compensations"]] if obj.get("compensations") is not None else None,
            "country_of_birth": obj.get("country_of_birth"),
            "created_at": obj.get("created_at"),
            "created_by": obj.get("created_by"),
            "custom_fields": [CustomField.from_dict(_item) for _item in obj["custom_fields"]] if obj.get("custom_fields") is not None else None,
            "custom_mappings": obj.get("custom_mappings"),
            "deceased_on": obj.get("deceased_on"),
            "deleted": obj.get("deleted"),
            "department": obj.get("department"),
            "department_id": obj.get("department_id"),
            "department_name": obj.get("department_name"),
            "description": obj.get("description"),
            "dietary_preference": obj.get("dietary_preference"),
            "direct_reports": obj.get("direct_reports"),
            "display_name": obj.get("display_name"),
            "division": obj.get("division"),
            "division_id": obj.get("division_id"),
            "emails": [Email.from_dict(_item) for _item in obj["emails"]] if obj.get("emails") is not None else None,
            "employee_number": obj.get("employee_number"),
            "employment_end_date": obj.get("employment_end_date"),
            "employment_role": EmployeeEmploymentRole.from_dict(obj["employment_role"]) if obj.get("employment_role") is not None else None,
            "employment_start_date": obj.get("employment_start_date"),
            "employment_status": obj.get("employment_status"),
            "ethnicity": obj.get("ethnicity"),
            "first_name": obj.get("first_name"),
            "food_allergies": obj.get("food_allergies"),
            "gender": obj.get("gender"),
            "id": obj.get("id"),
            "initials": obj.get("initials"),
            "jobs": [EmployeeJob.from_dict(_item) for _item in obj["jobs"]] if obj.get("jobs") is not None else None,
            "languages": obj.get("languages"),
            "last_name": obj.get("last_name"),
            "leaving_reason": obj.get("leaving_reason"),
            "manager": EmployeeManager.from_dict(obj["manager"]) if obj.get("manager") is not None else None,
            "marital_status": obj.get("marital_status"),
            "middle_name": obj.get("middle_name"),
            "nationalities": obj.get("nationalities"),
            "partner": Person.from_dict(obj["partner"]) if obj.get("partner") is not None else None,
            "phone_numbers": [PhoneNumber.from_dict(_item) for _item in obj["phone_numbers"]] if obj.get("phone_numbers") is not None else None,
            "photo_url": obj.get("photo_url"),
            "preferred_language": obj.get("preferred_language"),
            "preferred_name": obj.get("preferred_name"),
            "probation_period": ProbationPeriod.from_dict(obj["probation_period"]) if obj.get("probation_period") is not None else None,
            "pronouns": obj.get("pronouns"),
            "record_url": obj.get("record_url"),
            "row_version": obj.get("row_version"),
            "salutation": obj.get("salutation"),
            "social_links": [SocialLink.from_dict(_item) for _item in obj["social_links"]] if obj.get("social_links") is not None else None,
            "social_security_number": obj.get("social_security_number"),
            "source": obj.get("source"),
            "source_id": obj.get("source_id"),
            "tags": obj.get("tags"),
            "tax_code": obj.get("tax_code"),
            "tax_id": obj.get("tax_id"),
            "team": Team.from_dict(obj["team"]) if obj.get("team") is not None else None,
            "timezone": obj.get("timezone"),
            "title": obj.get("title"),
            "updated_at": obj.get("updated_at"),
            "updated_by": obj.get("updated_by"),
            "works_remote": obj.get("works_remote")
        })
        return _obj


