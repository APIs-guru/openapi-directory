# coding: utf-8

"""
    Ecommerce API

    Welcome to the Ecommerce API.  You can use this API to access all Ecommerce API endpoints.  ## Base URL  The base URL for all API requests is `https://unify.apideck.com`  ## Headers  Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.  | Name                  | Type    | Required | Description                                                                                                                                                    | | --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | | x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. | | x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             | | x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      | | x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             | | Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |  ## Authorization  You can interact with the API through the authorization methods below.  <!-- ReDoc-Inject: <security-definitions> -->  ## Pagination  All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.  To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.  In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.  ### Query Parameters  | Name   | Type   | Required | Description                                                                                                        | | ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ | | cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. | | limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |  ### Response Body  | Name                  | Type   | Description                                                        | | --------------------- | ------ | ------------------------------------------------------------------ | | meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API | | meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  | | meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     | | meta.items_on_page    | Number | Number of items returned in the data property of the response      | | links.previous        | String | Link to navigate to the previous page of results through the API   | | links.current         | String | Link to navigate to the current page of results through the API    | | links.next            | String | Link to navigate to the next page of results through the API       |  ⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.  ## SDKs and API Clients  We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK. Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).  ## Debugging  Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.  ## Errors  The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.  | Code | Title                | Description                                                                                                                                                                                              | | ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | | 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                | | 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              | | 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          | | 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. | | 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              | | 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      | | 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            | | 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           | | 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      | | 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     | | 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     | | 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |  ### Handling errors  The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.  ### Error Types  #### RequestValidationError  Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.  #### UnsupportedFiltersError  Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.  #### UnsupportedSortFieldError  Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.  #### InvalidCursorError  Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.  #### ConnectorExecutionError  A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.  #### UnauthorizedError  We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`  #### ConnectorCredentialsError  A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.  #### ConnectorDisabledError  A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.  #### ConnectorRateLimitError  You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.  #### RequestLimitError  You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.  #### EntityNotFoundError  You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.  #### OAuthCredentialsNotFoundError  When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.  #### IntegrationNotFoundError  The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.  #### ConnectionNotFoundError  A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.  #### ConnectionSettingsError  The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.  #### ConnectorNotFoundError  A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.  #### OAuthRedirectUriError  A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.  #### OAuthInvalidStateError  The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.  #### OAuthCodeExchangeError  When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.  #### OAuthConnectorError  It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### MappingError  There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.  #### ConnectorMappingNotFoundError  It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorResponseMappingNotFoundError  We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationMappingNotFoundError  Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorWorkflowMappingError  The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  #### ConnectorOperationUnsupportedError  You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.  #### PaginationNotSupportedError  Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.  ## API Design  ### API Styles and data formats  #### REST API  The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.  ##### Available HTTP methods  The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.  ``` POST /messages GET /messages GET /messages/{messageId} PATCH /messages/{messageId} DELETE /messages/{messageId} ```  Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.  ### Schema  All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.  ### Meta  Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.  ### Idempotence (upcoming)  To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.  Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)  ### Request IDs  Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.  ### Fixed field types  #### Dates  The dates returned by the API are all represented in UTC (ISO8601 format).  This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.  The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.  #### Prices and Currencies  All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).  For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.  All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).  ## Support  If you have problems or need help with your case, you can always reach out to our Support.  

    The version of the OpenAPI document: 10.0.0
    Contact: hello@apideck.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.currency import Currency
from openapi_client.models.ecommerce_address import EcommerceAddress
from openapi_client.models.ecommerce_discount import EcommerceDiscount
from openapi_client.models.ecommerce_order_line_item import EcommerceOrderLineItem
from openapi_client.models.ecommerce_order_status import EcommerceOrderStatus
from openapi_client.models.linked_ecommerce_customer import LinkedEcommerceCustomer
from openapi_client.models.tracking_item import TrackingItem
from typing import Optional, Set
from typing_extensions import Self

class EcommerceOrder(BaseModel):
    """
    EcommerceOrder
    """ # noqa: E501
    billing_address: Optional[EcommerceAddress] = None
    created_at: Optional[datetime] = Field(default=None, description="The date and time when the object was created.")
    currency: Optional[Currency] = None
    custom_mappings: Optional[Dict[str, Any]] = Field(default=None, description="When custom mappings are configured on the resource, the result is included here.")
    customer: Optional[LinkedEcommerceCustomer] = None
    discounts: Optional[List[EcommerceDiscount]] = None
    fulfillment_status: Optional[StrictStr] = Field(default=None, description="Current fulfillment status of the order.")
    id: StrictStr = Field(description="A unique identifier for an object.")
    line_items: Optional[List[EcommerceOrderLineItem]] = None
    note: Optional[StrictStr] = Field(default=None, description="Note for the order.")
    order_number: Optional[StrictStr] = Field(default=None, description="Order number, if any.")
    payment_method: Optional[StrictStr] = Field(default=None, description="Payment method used for this order.")
    payment_status: Optional[StrictStr] = Field(default=None, description="Current payment status of the order.")
    shipping_address: Optional[EcommerceAddress] = None
    shipping_cost: Optional[StrictStr] = Field(default=None, description="Shipping cost, if any.")
    status: Optional[EcommerceOrderStatus] = None
    sub_total: Optional[StrictStr] = Field(default=None, description="Sub-total amount, normally before tax.")
    total_amount: Optional[StrictStr] = Field(default=None, description="Total amount due.")
    total_discount: Optional[StrictStr] = Field(default=None, description="Total discount, if any.")
    total_tax: Optional[StrictStr] = Field(default=None, description="Total tax, if any.")
    tracking: Optional[List[TrackingItem]] = None
    updated_at: Optional[datetime] = Field(default=None, description="The date and time when the object was last updated.")
    __properties: ClassVar[List[str]] = ["billing_address", "created_at", "currency", "custom_mappings", "customer", "discounts", "fulfillment_status", "id", "line_items", "note", "order_number", "payment_method", "payment_status", "shipping_address", "shipping_cost", "status", "sub_total", "total_amount", "total_discount", "total_tax", "tracking", "updated_at"]

    @field_validator('fulfillment_status')
    def fulfillment_status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['pending', 'shipped', 'partial', 'delivered', 'cancelled', 'returned', 'unknown']):
            raise ValueError("must be one of enum values ('pending', 'shipped', 'partial', 'delivered', 'cancelled', 'returned', 'unknown')")
        return value

    @field_validator('payment_status')
    def payment_status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['pending', 'authorized', 'paid', 'partial', 'refunded', 'voided', 'unknown']):
            raise ValueError("must be one of enum values ('pending', 'authorized', 'paid', 'partial', 'refunded', 'voided', 'unknown')")
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
        """Create an instance of EcommerceOrder from a JSON string"""
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
        """
        excluded_fields: Set[str] = set([
            "created_at",
            "id",
            "updated_at",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of billing_address
        if self.billing_address:
            _dict['billing_address'] = self.billing_address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of customer
        if self.customer:
            _dict['customer'] = self.customer.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in discounts (list)
        _items = []
        if self.discounts:
            for _item_discounts in self.discounts:
                if _item_discounts:
                    _items.append(_item_discounts.to_dict())
            _dict['discounts'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in line_items (list)
        _items = []
        if self.line_items:
            for _item_line_items in self.line_items:
                if _item_line_items:
                    _items.append(_item_line_items.to_dict())
            _dict['line_items'] = _items
        # override the default output from pydantic by calling `to_dict()` of shipping_address
        if self.shipping_address:
            _dict['shipping_address'] = self.shipping_address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in tracking (list)
        _items = []
        if self.tracking:
            for _item_tracking in self.tracking:
                if _item_tracking:
                    _items.append(_item_tracking.to_dict())
            _dict['tracking'] = _items
        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['created_at'] = None

        # set to None if currency (nullable) is None
        # and model_fields_set contains the field
        if self.currency is None and "currency" in self.model_fields_set:
            _dict['currency'] = None

        # set to None if custom_mappings (nullable) is None
        # and model_fields_set contains the field
        if self.custom_mappings is None and "custom_mappings" in self.model_fields_set:
            _dict['custom_mappings'] = None

        # set to None if fulfillment_status (nullable) is None
        # and model_fields_set contains the field
        if self.fulfillment_status is None and "fulfillment_status" in self.model_fields_set:
            _dict['fulfillment_status'] = None

        # set to None if note (nullable) is None
        # and model_fields_set contains the field
        if self.note is None and "note" in self.model_fields_set:
            _dict['note'] = None

        # set to None if order_number (nullable) is None
        # and model_fields_set contains the field
        if self.order_number is None and "order_number" in self.model_fields_set:
            _dict['order_number'] = None

        # set to None if payment_method (nullable) is None
        # and model_fields_set contains the field
        if self.payment_method is None and "payment_method" in self.model_fields_set:
            _dict['payment_method'] = None

        # set to None if payment_status (nullable) is None
        # and model_fields_set contains the field
        if self.payment_status is None and "payment_status" in self.model_fields_set:
            _dict['payment_status'] = None

        # set to None if shipping_cost (nullable) is None
        # and model_fields_set contains the field
        if self.shipping_cost is None and "shipping_cost" in self.model_fields_set:
            _dict['shipping_cost'] = None

        # set to None if status (nullable) is None
        # and model_fields_set contains the field
        if self.status is None and "status" in self.model_fields_set:
            _dict['status'] = None

        # set to None if sub_total (nullable) is None
        # and model_fields_set contains the field
        if self.sub_total is None and "sub_total" in self.model_fields_set:
            _dict['sub_total'] = None

        # set to None if total_amount (nullable) is None
        # and model_fields_set contains the field
        if self.total_amount is None and "total_amount" in self.model_fields_set:
            _dict['total_amount'] = None

        # set to None if total_discount (nullable) is None
        # and model_fields_set contains the field
        if self.total_discount is None and "total_discount" in self.model_fields_set:
            _dict['total_discount'] = None

        # set to None if total_tax (nullable) is None
        # and model_fields_set contains the field
        if self.total_tax is None and "total_tax" in self.model_fields_set:
            _dict['total_tax'] = None

        # set to None if updated_at (nullable) is None
        # and model_fields_set contains the field
        if self.updated_at is None and "updated_at" in self.model_fields_set:
            _dict['updated_at'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of EcommerceOrder from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "billing_address": EcommerceAddress.from_dict(obj["billing_address"]) if obj.get("billing_address") is not None else None,
            "created_at": obj.get("created_at"),
            "currency": obj.get("currency"),
            "custom_mappings": obj.get("custom_mappings"),
            "customer": LinkedEcommerceCustomer.from_dict(obj["customer"]) if obj.get("customer") is not None else None,
            "discounts": [EcommerceDiscount.from_dict(_item) for _item in obj["discounts"]] if obj.get("discounts") is not None else None,
            "fulfillment_status": obj.get("fulfillment_status"),
            "id": obj.get("id"),
            "line_items": [EcommerceOrderLineItem.from_dict(_item) for _item in obj["line_items"]] if obj.get("line_items") is not None else None,
            "note": obj.get("note"),
            "order_number": obj.get("order_number"),
            "payment_method": obj.get("payment_method"),
            "payment_status": obj.get("payment_status"),
            "shipping_address": EcommerceAddress.from_dict(obj["shipping_address"]) if obj.get("shipping_address") is not None else None,
            "shipping_cost": obj.get("shipping_cost"),
            "status": obj.get("status"),
            "sub_total": obj.get("sub_total"),
            "total_amount": obj.get("total_amount"),
            "total_discount": obj.get("total_discount"),
            "total_tax": obj.get("total_tax"),
            "tracking": [TrackingItem.from_dict(_item) for _item in obj["tracking"]] if obj.get("tracking") is not None else None,
            "updated_at": obj.get("updated_at")
        })
        return _obj


