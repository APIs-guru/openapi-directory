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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.id import Id
from typing import Optional, Set
from typing_extensions import Self

class PromotionEditFields(BaseModel):
    """
    PromotionEditFields
    """ # noqa: E501
    begins_at: Optional[StrictStr] = Field(default=None, description="Creation date of the promotion (requires 'lasts' param - 'date')")
    buys_at_least: Optional[StrictStr] = Field(default=None, description="Controls the promotion's condition ('none', 'price', 'qty')")
    categories: Optional[List[Id]] = Field(default=None, description="Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories')")
    code: Optional[StrictStr] = Field(default=None, description="Code of the promotion")
    condition_price: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')")
    condition_qty: Optional[StrictInt] = Field(default=None, description="Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')")
    cumulative: Optional[StrictBool] = Field(default=False, description="True if the promotion can be acumulated with others")
    customer_categories: Optional[List[Id]] = Field(default=None, description="Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories')")
    customers: Optional[StrictStr] = Field(default=None, description="Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests')")
    discount_amount_fix: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Fixed discount amount of the promotion (requires 'type' param - 'fix')")
    discount_amount_percent: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Percentual discount amount of the promotion (requires 'type' param - 'percentage')")
    discount_target: Optional[StrictStr] = Field(default=None, description="Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y)")
    enabled: Optional[StrictBool] = Field(default=True, description="If the promotion is to be temporarily disabled")
    expires_at: Optional[StrictStr] = Field(default=None, description="Expiration date of the promotion (requires 'lasts' param - 'date')")
    lasts: Optional[StrictStr] = Field(default=None, description="Controls when the promotion will expire ('none', 'date', 'max_times_used')")
    max_times_used: Optional[StrictInt] = Field(default=None, description="Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')")
    name: Optional[StrictStr] = Field(default=None, description="Name of the product")
    products: Optional[List[Id]] = Field(default=None, description="Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y')")
    products_x: Optional[List[Id]] = Field(default=None, description="Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')")
    quantity_x: Optional[StrictInt] = Field(default=None, description="Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')")
    type: Optional[StrictStr] = Field(default=None, description="Controls if the discount will be a fixed area ('fix', 'percentage')")
    __properties: ClassVar[List[str]] = ["begins_at", "buys_at_least", "categories", "code", "condition_price", "condition_qty", "cumulative", "customer_categories", "customers", "discount_amount_fix", "discount_amount_percent", "discount_target", "enabled", "expires_at", "lasts", "max_times_used", "name", "products", "products_x", "quantity_x", "type"]

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
        """Create an instance of PromotionEditFields from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in categories (list)
        _items = []
        if self.categories:
            for _item_categories in self.categories:
                if _item_categories:
                    _items.append(_item_categories.to_dict())
            _dict['categories'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in customer_categories (list)
        _items = []
        if self.customer_categories:
            for _item_customer_categories in self.customer_categories:
                if _item_customer_categories:
                    _items.append(_item_customer_categories.to_dict())
            _dict['customer_categories'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in products (list)
        _items = []
        if self.products:
            for _item_products in self.products:
                if _item_products:
                    _items.append(_item_products.to_dict())
            _dict['products'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in products_x (list)
        _items = []
        if self.products_x:
            for _item_products_x in self.products_x:
                if _item_products_x:
                    _items.append(_item_products_x.to_dict())
            _dict['products_x'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PromotionEditFields from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "begins_at": obj.get("begins_at"),
            "buys_at_least": obj.get("buys_at_least"),
            "categories": [Id.from_dict(_item) for _item in obj["categories"]] if obj.get("categories") is not None else None,
            "code": obj.get("code"),
            "condition_price": obj.get("condition_price"),
            "condition_qty": obj.get("condition_qty"),
            "cumulative": obj.get("cumulative") if obj.get("cumulative") is not None else False,
            "customer_categories": [Id.from_dict(_item) for _item in obj["customer_categories"]] if obj.get("customer_categories") is not None else None,
            "customers": obj.get("customers"),
            "discount_amount_fix": obj.get("discount_amount_fix"),
            "discount_amount_percent": obj.get("discount_amount_percent"),
            "discount_target": obj.get("discount_target"),
            "enabled": obj.get("enabled") if obj.get("enabled") is not None else True,
            "expires_at": obj.get("expires_at"),
            "lasts": obj.get("lasts"),
            "max_times_used": obj.get("max_times_used"),
            "name": obj.get("name"),
            "products": [Id.from_dict(_item) for _item in obj["products"]] if obj.get("products") is not None else None,
            "products_x": [Id.from_dict(_item) for _item in obj["products_x"]] if obj.get("products_x") is not None else None,
            "quantity_x": obj.get("quantity_x"),
            "type": obj.get("type")
        })
        return _obj


