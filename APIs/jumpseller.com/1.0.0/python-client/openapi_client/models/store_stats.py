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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from openapi_client.models.best_sold import BestSold
from openapi_client.models.daily_visits import DailyVisits
from openapi_client.models.payment_method_freq import PaymentMethodFreq
from openapi_client.models.referrer import Referrer
from openapi_client.models.shipping_method_freq import ShippingMethodFreq
from openapi_client.models.store_stats_conversions import StoreStatsConversions
from openapi_client.models.store_stats_new_vs_returning_customers import StoreStatsNewVsReturningCustomers
from openapi_client.models.store_stats_orders import StoreStatsOrders
from openapi_client.models.store_stats_region_orders import StoreStatsRegionOrders
from openapi_client.models.traffic_type import TrafficType
from typing import Optional, Set
from typing_extensions import Self

class StoreStats(BaseModel):
    """
    StoreStats
    """ # noqa: E501
    best_sold: Optional[List[BestSold]] = Field(default=None, description="Top 10 best sold products.")
    conversions: Optional[StoreStatsConversions] = None
    currency: Optional[StrictStr] = Field(default=None, description="Store currency.")
    daily_visits: Optional[List[DailyVisits]] = Field(default=None, description="Visits per day.")
    var_from: Optional[StrictStr] = Field(default=None, description="Statistics start date.", alias="from")
    new_vs_returning_customers: Optional[StoreStatsNewVsReturningCustomers] = None
    new_vs_returning_orders: Optional[StoreStatsNewVsReturningCustomers] = None
    orders: Optional[StoreStatsOrders] = None
    payment_methods: Optional[List[PaymentMethodFreq]] = Field(default=None, description="Store payment methods and their frequency.")
    referrers: Optional[List[Referrer]] = Field(default=None, description="Top 10 referrer sources and their frequency.")
    region_orders: Optional[StoreStatsRegionOrders] = None
    search_frequencies_all: Optional[List[Any]] = Field(default=None, description="Number of times each search was conducted under the form of an aggregation query.")
    search_frequencies_without_results: Optional[List[Any]] = Field(default=None, description="Number of times each search with zero results was conducted under the form of an aggregation query.")
    shipping_methods: Optional[List[ShippingMethodFreq]] = Field(default=None, description="Store shipping methods and their frequency.")
    to: Optional[StrictStr] = Field(default=None, description="Statistics end date.")
    traffic_type: Optional[List[TrafficType]] = Field(default=None, description="Type of store traffic and its frequency.")
    visits: Optional[StrictInt] = Field(default=None, description="Total number of visits.")
    __properties: ClassVar[List[str]] = ["best_sold", "conversions", "currency", "daily_visits", "from", "new_vs_returning_customers", "new_vs_returning_orders", "orders", "payment_methods", "referrers", "region_orders", "search_frequencies_all", "search_frequencies_without_results", "shipping_methods", "to", "traffic_type", "visits"]

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
        """Create an instance of StoreStats from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in best_sold (list)
        _items = []
        if self.best_sold:
            for _item_best_sold in self.best_sold:
                if _item_best_sold:
                    _items.append(_item_best_sold.to_dict())
            _dict['best_sold'] = _items
        # override the default output from pydantic by calling `to_dict()` of conversions
        if self.conversions:
            _dict['conversions'] = self.conversions.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in daily_visits (list)
        _items = []
        if self.daily_visits:
            for _item_daily_visits in self.daily_visits:
                if _item_daily_visits:
                    _items.append(_item_daily_visits.to_dict())
            _dict['daily_visits'] = _items
        # override the default output from pydantic by calling `to_dict()` of new_vs_returning_customers
        if self.new_vs_returning_customers:
            _dict['new_vs_returning_customers'] = self.new_vs_returning_customers.to_dict()
        # override the default output from pydantic by calling `to_dict()` of new_vs_returning_orders
        if self.new_vs_returning_orders:
            _dict['new_vs_returning_orders'] = self.new_vs_returning_orders.to_dict()
        # override the default output from pydantic by calling `to_dict()` of orders
        if self.orders:
            _dict['orders'] = self.orders.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in payment_methods (list)
        _items = []
        if self.payment_methods:
            for _item_payment_methods in self.payment_methods:
                if _item_payment_methods:
                    _items.append(_item_payment_methods.to_dict())
            _dict['payment_methods'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in referrers (list)
        _items = []
        if self.referrers:
            for _item_referrers in self.referrers:
                if _item_referrers:
                    _items.append(_item_referrers.to_dict())
            _dict['referrers'] = _items
        # override the default output from pydantic by calling `to_dict()` of region_orders
        if self.region_orders:
            _dict['region_orders'] = self.region_orders.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in shipping_methods (list)
        _items = []
        if self.shipping_methods:
            for _item_shipping_methods in self.shipping_methods:
                if _item_shipping_methods:
                    _items.append(_item_shipping_methods.to_dict())
            _dict['shipping_methods'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in traffic_type (list)
        _items = []
        if self.traffic_type:
            for _item_traffic_type in self.traffic_type:
                if _item_traffic_type:
                    _items.append(_item_traffic_type.to_dict())
            _dict['traffic_type'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of StoreStats from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "best_sold": [BestSold.from_dict(_item) for _item in obj["best_sold"]] if obj.get("best_sold") is not None else None,
            "conversions": StoreStatsConversions.from_dict(obj["conversions"]) if obj.get("conversions") is not None else None,
            "currency": obj.get("currency"),
            "daily_visits": [DailyVisits.from_dict(_item) for _item in obj["daily_visits"]] if obj.get("daily_visits") is not None else None,
            "from": obj.get("from"),
            "new_vs_returning_customers": StoreStatsNewVsReturningCustomers.from_dict(obj["new_vs_returning_customers"]) if obj.get("new_vs_returning_customers") is not None else None,
            "new_vs_returning_orders": StoreStatsNewVsReturningCustomers.from_dict(obj["new_vs_returning_orders"]) if obj.get("new_vs_returning_orders") is not None else None,
            "orders": StoreStatsOrders.from_dict(obj["orders"]) if obj.get("orders") is not None else None,
            "payment_methods": [PaymentMethodFreq.from_dict(_item) for _item in obj["payment_methods"]] if obj.get("payment_methods") is not None else None,
            "referrers": [Referrer.from_dict(_item) for _item in obj["referrers"]] if obj.get("referrers") is not None else None,
            "region_orders": StoreStatsRegionOrders.from_dict(obj["region_orders"]) if obj.get("region_orders") is not None else None,
            "search_frequencies_all": obj.get("search_frequencies_all"),
            "search_frequencies_without_results": obj.get("search_frequencies_without_results"),
            "shipping_methods": [ShippingMethodFreq.from_dict(_item) for _item in obj["shipping_methods"]] if obj.get("shipping_methods") is not None else None,
            "to": obj.get("to"),
            "traffic_type": [TrafficType.from_dict(_item) for _item in obj["traffic_type"]] if obj.get("traffic_type") is not None else None,
            "visits": obj.get("visits")
        })
        return _obj


