# coding: utf-8

"""
    CRM API

    Welcome to the CRM API.  You can use this API to access all CRM API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.activity_attendee import ActivityAttendee
from openapi_client.models.address import Address
from openapi_client.models.custom_field import CustomField
from typing import Optional, Set
from typing_extensions import Self

class Activity(BaseModel):
    """
    Activity
    """ # noqa: E501
    account_id: Optional[StrictStr] = Field(default=None, description="The account related to the activity")
    activity_date: Optional[StrictStr] = Field(default=None, description="The date of the activity")
    activity_datetime: Optional[StrictStr] = Field(default=None, description="The date and time of the activity")
    all_day_event: Optional[StrictBool] = Field(default=None, description="Whether the Activity is an all day event or not")
    archived: Optional[StrictBool] = Field(default=None, description="Whether the activity is archived or not")
    asset_id: Optional[StrictStr] = Field(default=None, description="The asset related to the activity")
    attendees: Optional[List[ActivityAttendee]] = None
    campaign_id: Optional[StrictStr] = Field(default=None, description="The campaign related to the activity")
    case_id: Optional[StrictStr] = Field(default=None, description="The case related to the activity")
    child: Optional[StrictBool] = Field(default=None, description="Whether the activity is a child of another activity or not")
    company_id: Optional[StrictStr] = Field(default=None, description="The company related to the activity")
    contact_id: Optional[StrictStr] = Field(default=None, description="The contact related to the activity")
    contract_id: Optional[StrictStr] = Field(default=None, description="The contract related to the activity")
    created_at: Optional[StrictStr] = Field(default=None, description="The date and time when the activity was created")
    created_by: Optional[StrictStr] = Field(default=None, description="The user who created the activity")
    custom_fields: Optional[List[CustomField]] = Field(default=None, description="Custom fields of the activity")
    custom_mappings: Optional[Dict[str, Any]] = Field(default=None, description="When custom mappings are configured on the resource, the result is included here.")
    custom_object_id: Optional[StrictStr] = Field(default=None, description="The custom object related to the activity")
    deleted: Optional[StrictBool] = Field(default=None, description="Whether the activity is deleted or not")
    description: Optional[StrictStr] = Field(default=None, description="A description of the activity")
    done: Optional[StrictBool] = Field(default=None, description="Whether the Activity is done or not")
    downstream_id: Optional[StrictStr] = Field(default=None, description="The third-party API ID of original entity")
    duration_minutes: Optional[StrictInt] = Field(default=None, description="The duration of the activity in minutes")
    duration_seconds: Optional[Annotated[int, Field(strict=True, ge=0)]] = Field(default=None, description="The duration of the activity in seconds")
    end_date: Optional[StrictStr] = Field(default=None, description="The end date of the activity")
    end_datetime: Optional[StrictStr] = Field(default=None, description="The end date and time of the activity")
    event_sub_type: Optional[StrictStr] = Field(default=None, description="The sub type of the group event")
    group_event: Optional[StrictBool] = Field(default=None, description="Whether the Activity is a group event or not")
    group_event_type: Optional[StrictStr] = Field(default=None, description="The type of the group event")
    id: Optional[StrictStr] = Field(default=None, description="The unique identifier of the activity")
    lead_id: Optional[StrictStr] = Field(default=None, description="The lead related to the activity")
    location: Optional[StrictStr] = Field(default=None, description="The location of the activity")
    location_address: Optional[Address] = None
    note: Optional[StrictStr] = Field(default=None, description="An internal note about the activity")
    opportunity_id: Optional[StrictStr] = Field(default=None, description="The opportunity related to the activity")
    owner_id: Optional[StrictStr] = Field(default=None, description="The owner of the activity")
    private: Optional[StrictBool] = Field(default=None, description="Whether the Activity is private or not")
    product_id: Optional[StrictStr] = Field(default=None, description="The product related to the activity")
    recurrent: Optional[StrictBool] = Field(default=None, description="Whether the activity is recurrent or not")
    reminder_datetime: Optional[StrictStr] = Field(default=None, description="The date and time of the reminder")
    reminder_set: Optional[StrictBool] = Field(default=None, description="Whether the reminder is set or not")
    show_as: Optional[StrictStr] = None
    solution_id: Optional[StrictStr] = Field(default=None, description="The solution related to the activity")
    start_datetime: Optional[StrictStr] = Field(default=None, description="The start date and time of the activity")
    title: Optional[StrictStr] = Field(default=None, description="The title of the activity")
    type: Optional[StrictStr] = Field(description="The type of the activity")
    updated_at: Optional[StrictStr] = Field(default=None, description="The date and time when the activity was last updated")
    updated_by: Optional[StrictStr] = Field(default=None, description="The user who last updated the activity")
    user_id: Optional[StrictStr] = Field(default=None, description="The user related to the activity")
    video_conference_id: Optional[StrictStr] = Field(default=None, description="The ID of the video conference")
    video_conference_url: Optional[StrictStr] = Field(default=None, description="The URL of the video conference")
    __properties: ClassVar[List[str]] = ["account_id", "activity_date", "activity_datetime", "all_day_event", "archived", "asset_id", "attendees", "campaign_id", "case_id", "child", "company_id", "contact_id", "contract_id", "created_at", "created_by", "custom_fields", "custom_mappings", "custom_object_id", "deleted", "description", "done", "downstream_id", "duration_minutes", "duration_seconds", "end_date", "end_datetime", "event_sub_type", "group_event", "group_event_type", "id", "lead_id", "location", "location_address", "note", "opportunity_id", "owner_id", "private", "product_id", "recurrent", "reminder_datetime", "reminder_set", "show_as", "solution_id", "start_datetime", "title", "type", "updated_at", "updated_by", "user_id", "video_conference_id", "video_conference_url"]

    @field_validator('show_as')
    def show_as_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['free', 'busy']):
            raise ValueError("must be one of enum values ('free', 'busy')")
        return value

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['call', 'meeting', 'email', 'note', 'task', 'deadline', 'send-letter', 'send-quote', 'other']):
            raise ValueError("must be one of enum values ('call', 'meeting', 'email', 'note', 'task', 'deadline', 'send-letter', 'send-quote', 'other')")
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
        """Create an instance of Activity from a JSON string"""
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
            "created_at",
            "created_by",
            "downstream_id",
            "duration_minutes",
            "id",
            "updated_at",
            "updated_by",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in attendees (list)
        _items = []
        if self.attendees:
            for _item_attendees in self.attendees:
                if _item_attendees:
                    _items.append(_item_attendees.to_dict())
            _dict['attendees'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in custom_fields (list)
        _items = []
        if self.custom_fields:
            for _item_custom_fields in self.custom_fields:
                if _item_custom_fields:
                    _items.append(_item_custom_fields.to_dict())
            _dict['custom_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of location_address
        if self.location_address:
            _dict['location_address'] = self.location_address.to_dict()
        # set to None if account_id (nullable) is None
        # and model_fields_set contains the field
        if self.account_id is None and "account_id" in self.model_fields_set:
            _dict['account_id'] = None

        # set to None if activity_date (nullable) is None
        # and model_fields_set contains the field
        if self.activity_date is None and "activity_date" in self.model_fields_set:
            _dict['activity_date'] = None

        # set to None if activity_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.activity_datetime is None and "activity_datetime" in self.model_fields_set:
            _dict['activity_datetime'] = None

        # set to None if all_day_event (nullable) is None
        # and model_fields_set contains the field
        if self.all_day_event is None and "all_day_event" in self.model_fields_set:
            _dict['all_day_event'] = None

        # set to None if archived (nullable) is None
        # and model_fields_set contains the field
        if self.archived is None and "archived" in self.model_fields_set:
            _dict['archived'] = None

        # set to None if asset_id (nullable) is None
        # and model_fields_set contains the field
        if self.asset_id is None and "asset_id" in self.model_fields_set:
            _dict['asset_id'] = None

        # set to None if campaign_id (nullable) is None
        # and model_fields_set contains the field
        if self.campaign_id is None and "campaign_id" in self.model_fields_set:
            _dict['campaign_id'] = None

        # set to None if case_id (nullable) is None
        # and model_fields_set contains the field
        if self.case_id is None and "case_id" in self.model_fields_set:
            _dict['case_id'] = None

        # set to None if child (nullable) is None
        # and model_fields_set contains the field
        if self.child is None and "child" in self.model_fields_set:
            _dict['child'] = None

        # set to None if company_id (nullable) is None
        # and model_fields_set contains the field
        if self.company_id is None and "company_id" in self.model_fields_set:
            _dict['company_id'] = None

        # set to None if contact_id (nullable) is None
        # and model_fields_set contains the field
        if self.contact_id is None and "contact_id" in self.model_fields_set:
            _dict['contact_id'] = None

        # set to None if contract_id (nullable) is None
        # and model_fields_set contains the field
        if self.contract_id is None and "contract_id" in self.model_fields_set:
            _dict['contract_id'] = None

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

        # set to None if custom_object_id (nullable) is None
        # and model_fields_set contains the field
        if self.custom_object_id is None and "custom_object_id" in self.model_fields_set:
            _dict['custom_object_id'] = None

        # set to None if deleted (nullable) is None
        # and model_fields_set contains the field
        if self.deleted is None and "deleted" in self.model_fields_set:
            _dict['deleted'] = None

        # set to None if description (nullable) is None
        # and model_fields_set contains the field
        if self.description is None and "description" in self.model_fields_set:
            _dict['description'] = None

        # set to None if done (nullable) is None
        # and model_fields_set contains the field
        if self.done is None and "done" in self.model_fields_set:
            _dict['done'] = None

        # set to None if downstream_id (nullable) is None
        # and model_fields_set contains the field
        if self.downstream_id is None and "downstream_id" in self.model_fields_set:
            _dict['downstream_id'] = None

        # set to None if duration_minutes (nullable) is None
        # and model_fields_set contains the field
        if self.duration_minutes is None and "duration_minutes" in self.model_fields_set:
            _dict['duration_minutes'] = None

        # set to None if duration_seconds (nullable) is None
        # and model_fields_set contains the field
        if self.duration_seconds is None and "duration_seconds" in self.model_fields_set:
            _dict['duration_seconds'] = None

        # set to None if end_date (nullable) is None
        # and model_fields_set contains the field
        if self.end_date is None and "end_date" in self.model_fields_set:
            _dict['end_date'] = None

        # set to None if end_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.end_datetime is None and "end_datetime" in self.model_fields_set:
            _dict['end_datetime'] = None

        # set to None if event_sub_type (nullable) is None
        # and model_fields_set contains the field
        if self.event_sub_type is None and "event_sub_type" in self.model_fields_set:
            _dict['event_sub_type'] = None

        # set to None if group_event (nullable) is None
        # and model_fields_set contains the field
        if self.group_event is None and "group_event" in self.model_fields_set:
            _dict['group_event'] = None

        # set to None if group_event_type (nullable) is None
        # and model_fields_set contains the field
        if self.group_event_type is None and "group_event_type" in self.model_fields_set:
            _dict['group_event_type'] = None

        # set to None if lead_id (nullable) is None
        # and model_fields_set contains the field
        if self.lead_id is None and "lead_id" in self.model_fields_set:
            _dict['lead_id'] = None

        # set to None if location (nullable) is None
        # and model_fields_set contains the field
        if self.location is None and "location" in self.model_fields_set:
            _dict['location'] = None

        # set to None if note (nullable) is None
        # and model_fields_set contains the field
        if self.note is None and "note" in self.model_fields_set:
            _dict['note'] = None

        # set to None if opportunity_id (nullable) is None
        # and model_fields_set contains the field
        if self.opportunity_id is None and "opportunity_id" in self.model_fields_set:
            _dict['opportunity_id'] = None

        # set to None if owner_id (nullable) is None
        # and model_fields_set contains the field
        if self.owner_id is None and "owner_id" in self.model_fields_set:
            _dict['owner_id'] = None

        # set to None if private (nullable) is None
        # and model_fields_set contains the field
        if self.private is None and "private" in self.model_fields_set:
            _dict['private'] = None

        # set to None if product_id (nullable) is None
        # and model_fields_set contains the field
        if self.product_id is None and "product_id" in self.model_fields_set:
            _dict['product_id'] = None

        # set to None if reminder_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.reminder_datetime is None and "reminder_datetime" in self.model_fields_set:
            _dict['reminder_datetime'] = None

        # set to None if reminder_set (nullable) is None
        # and model_fields_set contains the field
        if self.reminder_set is None and "reminder_set" in self.model_fields_set:
            _dict['reminder_set'] = None

        # set to None if show_as (nullable) is None
        # and model_fields_set contains the field
        if self.show_as is None and "show_as" in self.model_fields_set:
            _dict['show_as'] = None

        # set to None if solution_id (nullable) is None
        # and model_fields_set contains the field
        if self.solution_id is None and "solution_id" in self.model_fields_set:
            _dict['solution_id'] = None

        # set to None if start_datetime (nullable) is None
        # and model_fields_set contains the field
        if self.start_datetime is None and "start_datetime" in self.model_fields_set:
            _dict['start_datetime'] = None

        # set to None if title (nullable) is None
        # and model_fields_set contains the field
        if self.title is None and "title" in self.model_fields_set:
            _dict['title'] = None

        # set to None if type (nullable) is None
        # and model_fields_set contains the field
        if self.type is None and "type" in self.model_fields_set:
            _dict['type'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        # set to None if updated_by (nullable) is None
        # and model_fields_set contains the field
        if self.updated_by is None and "updated_by" in self.model_fields_set:
            _dict['updated_by'] = None

        # set to None if user_id (nullable) is None
        # and model_fields_set contains the field
        if self.user_id is None and "user_id" in self.model_fields_set:
            _dict['user_id'] = None

        # set to None if video_conference_id (nullable) is None
        # and model_fields_set contains the field
        if self.video_conference_id is None and "video_conference_id" in self.model_fields_set:
            _dict['video_conference_id'] = None

        # set to None if video_conference_url (nullable) is None
        # and model_fields_set contains the field
        if self.video_conference_url is None and "video_conference_url" in self.model_fields_set:
            _dict['video_conference_url'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Activity from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "account_id": obj.get("account_id"),
            "activity_date": obj.get("activity_date"),
            "activity_datetime": obj.get("activity_datetime"),
            "all_day_event": obj.get("all_day_event"),
            "archived": obj.get("archived"),
            "asset_id": obj.get("asset_id"),
            "attendees": [ActivityAttendee.from_dict(_item) for _item in obj["attendees"]] if obj.get("attendees") is not None else None,
            "campaign_id": obj.get("campaign_id"),
            "case_id": obj.get("case_id"),
            "child": obj.get("child"),
            "company_id": obj.get("company_id"),
            "contact_id": obj.get("contact_id"),
            "contract_id": obj.get("contract_id"),
            "created_at": obj.get("created_at"),
            "created_by": obj.get("created_by"),
            "custom_fields": [CustomField.from_dict(_item) for _item in obj["custom_fields"]] if obj.get("custom_fields") is not None else None,
            "custom_mappings": obj.get("custom_mappings"),
            "custom_object_id": obj.get("custom_object_id"),
            "deleted": obj.get("deleted"),
            "description": obj.get("description"),
            "done": obj.get("done"),
            "downstream_id": obj.get("downstream_id"),
            "duration_minutes": obj.get("duration_minutes"),
            "duration_seconds": obj.get("duration_seconds"),
            "end_date": obj.get("end_date"),
            "end_datetime": obj.get("end_datetime"),
            "event_sub_type": obj.get("event_sub_type"),
            "group_event": obj.get("group_event"),
            "group_event_type": obj.get("group_event_type"),
            "id": obj.get("id"),
            "lead_id": obj.get("lead_id"),
            "location": obj.get("location"),
            "location_address": Address.from_dict(obj["location_address"]) if obj.get("location_address") is not None else None,
            "note": obj.get("note"),
            "opportunity_id": obj.get("opportunity_id"),
            "owner_id": obj.get("owner_id"),
            "private": obj.get("private"),
            "product_id": obj.get("product_id"),
            "recurrent": obj.get("recurrent"),
            "reminder_datetime": obj.get("reminder_datetime"),
            "reminder_set": obj.get("reminder_set"),
            "show_as": obj.get("show_as"),
            "solution_id": obj.get("solution_id"),
            "start_datetime": obj.get("start_datetime"),
            "title": obj.get("title"),
            "type": obj.get("type"),
            "updated_at": obj.get("updated_at"),
            "updated_by": obj.get("updated_by"),
            "user_id": obj.get("user_id"),
            "video_conference_id": obj.get("video_conference_id"),
            "video_conference_url": obj.get("video_conference_url")
        })
        return _obj


