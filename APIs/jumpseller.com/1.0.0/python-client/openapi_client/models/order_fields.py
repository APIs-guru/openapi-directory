# coding: utf-8

"""
    Jumpseller API

    # Endpoint Structure  All URLs are in the format:   ```text https://api.jumpseller.com/v1/path.json?login=XXXXXX&authtoken=storetoken   ```  The path is prefixed by the API version and the URL takes as parameters the login (your store specific API login) and your authentication token. <br/><br/> ***  # Version  The current version of the API is **v1**.   If we change the API in backward-incompatible ways, we'll increase the version number and maintain stable support for the old urls. <br/><br/> ***  # Authentication  The API uses a token-based authentication with a combination of a login key and an auth token. **Both parameters can be found on the left sidebar of the Account section, accessed from the main menu of your Admin Panel**. The auth token of the user can be reset on the same page.  ![Store Login](/images/support/api/apilogin.png)  The auth token is a **32 characters** string.  If you are developing a Jumpseller App, the authentication should be done using [OAuth-2](/support/oauth-2). Please read the article [Build an App](/support/apps) for more information. <br/><br/> ***  # Curl Examples  To request all the products at your store, you would append the products index path to the base url to create an URL with the format:    ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX ```  In curl, you can invoque that URL with:    ```text curl -X GET \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" ```  To create a product, you will include the JSON data and specify the MIME Type:    ```text curl -X POST -d '{ \"product\" : {\"name\": \"My new Product!\", \"price\": 100} }' \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  and to update the product identified with 123:    ```text curl -X PUT -d '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }' \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  or delete it:    ```text curl -X DELETE \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ``` <br/><br/> ***  # PHP Examples  Create a new Product (POST method)  ```php $url = 'https://api.jumpseller.com/v1/products.json?login=XXXXX&authtoken=XXXXX; $ch = curl_init($url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"POST\"); //post method curl_setopt($ch, CURLOPT_POSTFIELDS, '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }');  $result = curl_exec($ch); print_r($result); curl_close($ch); ``` <br/><br/> ***  # Plain JSON only. No XML.  * We only support JSON for data serialization. * Our node format has no root element.   * We use snake_case to describe attribute keys (like \"created_at\").   * All empty value are replaced with **null** strings. * All API URLs end in .json to indicate that they accept and return JSON. * POST and PUT methods require you to explicitly state the MIME type of your request's body content as **\"application/json\"**. <br/><br/> ***  # Rate Limit You can perform a maximum of:  + 240 (two hundred forty) requests per minute and + 8 (eight) requests per second   If you exceed this limit, you'll get a 403 Forbidden (Rate Limit Exceeded) response for subsequent requests.    The rate limits apply by IP address and by store. This means that multiple requests on different stores are not counted towards the same rate limit.  This limits are necessary to ensure resources are correctly used. Your application should be aware of this limits and retry any unsuccessful request, check the following Ruby stub:  ```ruby tries = 0; max_tries = 3; begin   HTTParty.send(method, uri) # perform an API call.   sleep 0.5   tries += 1 rescue   unless tries >= max_tries     sleep 1.0 # wait the necessary time before retrying the call again.     retry   end end ```  Finally, you can review the Response Headers of each request:  ```text Jumpseller-PerMinuteRateLimit-Limit: 60   Jumpseller-PerMinuteRateLimit-Remaining: 59 # requests available on the per-second interval   Jumpseller-PerSecondRateLimit-Limit: 2   Jumpseller-PerSecondRateLimit-Remaining: 1 # requests available on the per-second interval ```   to better model your application requests intervals.  In the event of getting your IP banned, the Response Header `Jumpseller-BannedByRateLimit-Reset` informs you the time when will your ban be reseted. <br/><br/> ***  # Pagination  By default we will return 50 objects (products, orders, etc) per page. There is a maximum of 100, using a query string `&limit=100`. If the result set gets paginated it is your responsibility to check the next page for more objects -- you do this by using query strings `&page=2`, `&page=3` and so on.  ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX&page=3&limit=100 ``` <br/><br/> ***  # More * [Jumpseller API wrapper](https://gitlab.com/jumpseller-api/ruby) provides a public Ruby abstraction over our API; * [Apps Page](/apps) showcases external integrations with Jumpseller done by technical experts; * [Imgbb API](https://api.imgbb.com/) provides an easy way to upload and temporaly host for images and files. <br/><br/> *** <br/><br/> 

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.customer import Customer
from openapi_client.models.order_additional_fields import OrderAdditionalFields
from openapi_client.models.order_billing_address import OrderBillingAddress
from openapi_client.models.order_product import OrderProduct
from openapi_client.models.order_shipping_address import OrderShippingAddress
from openapi_client.models.order_shipping_tax import OrderShippingTax
from openapi_client.models.traffic_source import TrafficSource
from typing import Optional, Set
from typing_extensions import Self

class OrderFields(BaseModel):
    """
    OrderFields
    """ # noqa: E501
    additional_fields: Optional[List[OrderAdditionalFields]] = Field(default=None, description="Array of additional fields for the given Order")
    additional_information: Optional[StrictStr] = Field(default=None, description="Additional information for the given Order")
    billing_address: Optional[OrderBillingAddress] = None
    checkout_url: Optional[StrictStr] = Field(default=None, description="Store Checkout Order URL for the given Order")
    coupons: Optional[StrictStr] = Field(default=None, description="Promotion Coupons used on the given Order")
    created_at: Optional[StrictStr] = Field(default=None, description="Order date")
    currency: Optional[StrictStr] = Field(default=None, description="Currency of the Order")
    customer: Optional[Customer] = None
    discount: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Discount value for the given Order")
    duplicate_url: Optional[StrictStr] = Field(default=None, description="Duplicate Order URL for the given Order")
    external_shipping_rate_id: Optional[StrictStr] = Field(default=None, description="Rate id for selected External Shipping Method rate")
    id: Optional[StrictInt] = Field(default=None, description="Unique identifier of the Order")
    payment_information: Optional[StrictStr] = Field(default=None, description="Payment information for the given Order")
    payment_method_name: Optional[StrictStr] = Field(default=None, description="Payment Method name used e.g. PayPal")
    payment_method_type: Optional[StrictStr] = Field(default=None, description="Payment Method type used e.g. paypal")
    products: Optional[List[OrderProduct]] = None
    recovery_url: Optional[StrictStr] = Field(default=None, description="Recovery Order URL for the given Order")
    shipment_status: Optional[StrictStr] = Field(default=None, description="Shipment Status for Order Fulfillment.")
    shipping: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Shipping value for the given Order")
    shipping_address: Optional[OrderShippingAddress] = None
    shipping_discount: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Shipping Discount value for the given order")
    shipping_method_id: Optional[StrictInt] = Field(default=None, description="Shipping method e.g. Royal Mail")
    shipping_method_name: Optional[StrictStr] = Field(default=None, description="Shipping method e.g. Royal Mail")
    shipping_option: Optional[StrictStr] = Field(default=None, description="Shipping option for this order.")
    shipping_required: Optional[StrictBool] = Field(default=True, description="False if the order is digital.")
    shipping_tax: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Shipping Tax value for the given order")
    shipping_taxes: Optional[List[OrderShippingTax]] = None
    source: Optional[TrafficSource] = None
    status: Optional[StrictStr] = Field(default=None, description="Status of the Order")
    subtotal: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Subtotal value for the given Order. Excluding taxes, shipping and discounts")
    tax: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Tax value for the given order")
    total: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Total value for the given Order. Including taxes, shipping and discounts")
    tracking_company: Optional[StrictStr] = Field(default=None, description="Company Used for Order Fulfillment.")
    tracking_number: Optional[StrictStr] = Field(default=None, description="Tracking Number for Order Fulfillment.")
    tracking_url: Optional[StrictStr] = Field(default=None, description="Tracking URL for Order Fulfillment.")
    __properties: ClassVar[List[str]] = ["additional_fields", "additional_information", "billing_address", "checkout_url", "coupons", "created_at", "currency", "customer", "discount", "duplicate_url", "external_shipping_rate_id", "id", "payment_information", "payment_method_name", "payment_method_type", "products", "recovery_url", "shipment_status", "shipping", "shipping_address", "shipping_discount", "shipping_method_id", "shipping_method_name", "shipping_option", "shipping_required", "shipping_tax", "shipping_taxes", "source", "status", "subtotal", "tax", "total", "tracking_company", "tracking_number", "tracking_url"]

    @field_validator('shipment_status')
    def shipment_status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['delivered', 'requested', 'in_transit', 'failed', 'pickup_available']):
            raise ValueError("must be one of enum values ('delivered', 'requested', 'in_transit', 'failed', 'pickup_available')")
        return value

    @field_validator('shipping_option')
    def shipping_option_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['delivery', 'store_pickup', 'no_shipping']):
            raise ValueError("must be one of enum values ('delivery', 'store_pickup', 'no_shipping')")
        return value

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['Abandoned', 'Canceled', 'Pending Payment', 'Paid']):
            raise ValueError("must be one of enum values ('Abandoned', 'Canceled', 'Pending Payment', 'Paid')")
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
        """Create an instance of OrderFields from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in additional_fields (list)
        _items = []
        if self.additional_fields:
            for _item_additional_fields in self.additional_fields:
                if _item_additional_fields:
                    _items.append(_item_additional_fields.to_dict())
            _dict['additional_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of billing_address
        if self.billing_address:
            _dict['billing_address'] = self.billing_address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of customer
        if self.customer:
            _dict['customer'] = self.customer.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in products (list)
        _items = []
        if self.products:
            for _item_products in self.products:
                if _item_products:
                    _items.append(_item_products.to_dict())
            _dict['products'] = _items
        # override the default output from pydantic by calling `to_dict()` of shipping_address
        if self.shipping_address:
            _dict['shipping_address'] = self.shipping_address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in shipping_taxes (list)
        _items = []
        if self.shipping_taxes:
            for _item_shipping_taxes in self.shipping_taxes:
                if _item_shipping_taxes:
                    _items.append(_item_shipping_taxes.to_dict())
            _dict['shipping_taxes'] = _items
        # override the default output from pydantic by calling `to_dict()` of source
        if self.source:
            _dict['source'] = self.source.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of OrderFields from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "additional_fields": [OrderAdditionalFields.from_dict(_item) for _item in obj["additional_fields"]] if obj.get("additional_fields") is not None else None,
            "additional_information": obj.get("additional_information"),
            "billing_address": OrderBillingAddress.from_dict(obj["billing_address"]) if obj.get("billing_address") is not None else None,
            "checkout_url": obj.get("checkout_url"),
            "coupons": obj.get("coupons"),
            "created_at": obj.get("created_at"),
            "currency": obj.get("currency"),
            "customer": Customer.from_dict(obj["customer"]) if obj.get("customer") is not None else None,
            "discount": obj.get("discount"),
            "duplicate_url": obj.get("duplicate_url"),
            "external_shipping_rate_id": obj.get("external_shipping_rate_id"),
            "id": obj.get("id"),
            "payment_information": obj.get("payment_information"),
            "payment_method_name": obj.get("payment_method_name"),
            "payment_method_type": obj.get("payment_method_type"),
            "products": [OrderProduct.from_dict(_item) for _item in obj["products"]] if obj.get("products") is not None else None,
            "recovery_url": obj.get("recovery_url"),
            "shipment_status": obj.get("shipment_status"),
            "shipping": obj.get("shipping"),
            "shipping_address": OrderShippingAddress.from_dict(obj["shipping_address"]) if obj.get("shipping_address") is not None else None,
            "shipping_discount": obj.get("shipping_discount"),
            "shipping_method_id": obj.get("shipping_method_id"),
            "shipping_method_name": obj.get("shipping_method_name"),
            "shipping_option": obj.get("shipping_option"),
            "shipping_required": obj.get("shipping_required") if obj.get("shipping_required") is not None else True,
            "shipping_tax": obj.get("shipping_tax"),
            "shipping_taxes": [OrderShippingTax.from_dict(_item) for _item in obj["shipping_taxes"]] if obj.get("shipping_taxes") is not None else None,
            "source": TrafficSource.from_dict(obj["source"]) if obj.get("source") is not None else None,
            "status": obj.get("status"),
            "subtotal": obj.get("subtotal"),
            "tax": obj.get("tax"),
            "total": obj.get("total"),
            "tracking_company": obj.get("tracking_company"),
            "tracking_number": obj.get("tracking_number"),
            "tracking_url": obj.get("tracking_url")
        })
        return _obj


