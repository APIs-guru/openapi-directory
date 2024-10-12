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
from openapi_client.models.category_fields import CategoryFields
from openapi_client.models.image_fields import ImageFields
from openapi_client.models.variant_fields import VariantFields
from typing import Optional, Set
from typing_extensions import Self

class ProductFields(BaseModel):
    """
    ProductFields
    """ # noqa: E501
    barcode: Optional[StrictStr] = Field(default=None, description="Barcode of the product")
    categories: Optional[List[CategoryFields]] = None
    created_at: Optional[StrictStr] = Field(default=None, description="Date of product creation")
    description: Optional[StrictStr] = Field(default=None, description="Description of the product")
    diameter: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Diameter of the product")
    discount: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Discount of the product")
    featured: Optional[StrictBool] = Field(default=False, description="True if the product is featured")
    google_product_category: Optional[StrictStr] = Field(default=None, description="Category of a Product based on the Google product taxonomy")
    height: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Height of the product")
    id: Optional[StrictInt] = Field(default=None, description="Unique identifier of the product")
    images: Optional[List[ImageFields]] = None
    length: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Length of the product")
    name: Optional[StrictStr] = Field(default=None, description="Name of the product")
    package_format: Optional[StrictStr] = Field(default='box', description="Format the product package")
    permalink: Optional[StrictStr] = Field(default=None, description="Product unique URL path")
    price: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Price of the product")
    sku: Optional[StrictStr] = Field(default=None, description="Stock Keeping Unit of the product")
    status: Optional[StrictStr] = Field(default='available', description="Status of the product")
    stock: Optional[StrictInt] = Field(default=100, description="Quantity in stock for the product")
    stock_unlimited: Optional[StrictBool] = Field(default=None, description="True if the Product has unlimited stock")
    variants: Optional[List[VariantFields]] = None
    weight: Optional[Union[StrictFloat, StrictInt]] = Field(default=1, description="Weight of the product")
    width: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Width of the product")
    __properties: ClassVar[List[str]] = ["barcode", "categories", "created_at", "description", "diameter", "discount", "featured", "google_product_category", "height", "id", "images", "length", "name", "package_format", "permalink", "price", "sku", "status", "stock", "stock_unlimited", "variants", "weight", "width"]

    @field_validator('package_format')
    def package_format_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['box', 'cylinder']):
            raise ValueError("must be one of enum values ('box', 'cylinder')")
        return value

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['available', 'not-available', 'disabled']):
            raise ValueError("must be one of enum values ('available', 'not-available', 'disabled')")
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
        """Create an instance of ProductFields from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in images (list)
        _items = []
        if self.images:
            for _item_images in self.images:
                if _item_images:
                    _items.append(_item_images.to_dict())
            _dict['images'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in variants (list)
        _items = []
        if self.variants:
            for _item_variants in self.variants:
                if _item_variants:
                    _items.append(_item_variants.to_dict())
            _dict['variants'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProductFields from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "barcode": obj.get("barcode"),
            "categories": [CategoryFields.from_dict(_item) for _item in obj["categories"]] if obj.get("categories") is not None else None,
            "created_at": obj.get("created_at"),
            "description": obj.get("description"),
            "diameter": obj.get("diameter"),
            "discount": obj.get("discount"),
            "featured": obj.get("featured") if obj.get("featured") is not None else False,
            "google_product_category": obj.get("google_product_category"),
            "height": obj.get("height"),
            "id": obj.get("id"),
            "images": [ImageFields.from_dict(_item) for _item in obj["images"]] if obj.get("images") is not None else None,
            "length": obj.get("length"),
            "name": obj.get("name"),
            "package_format": obj.get("package_format") if obj.get("package_format") is not None else 'box',
            "permalink": obj.get("permalink"),
            "price": obj.get("price"),
            "sku": obj.get("sku"),
            "status": obj.get("status") if obj.get("status") is not None else 'available',
            "stock": obj.get("stock") if obj.get("stock") is not None else 100,
            "stock_unlimited": obj.get("stock_unlimited"),
            "variants": [VariantFields.from_dict(_item) for _item in obj["variants"]] if obj.get("variants") is not None else None,
            "weight": obj.get("weight") if obj.get("weight") is not None else 1,
            "width": obj.get("width")
        })
        return _obj


