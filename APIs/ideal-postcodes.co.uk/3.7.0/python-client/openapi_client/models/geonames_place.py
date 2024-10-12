# coding: utf-8

"""
    API Reference - Ideal Postcodes

    # Getting Started  ## Overview  ### Access  All API methods are either a `GET`, `POST` or `OPTIONS` request.  The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.  We recommend using HTTPS only although HTTP is available.  We use appropriate HTTP status codes where possible to indicate the request status.  ### Rate Limiting  Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.  The autocomplete API also has an additional rate limit.  If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.  ### JSONP  [JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.  ## Authentication  Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:  ``` api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside ```  Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:  ``` Authorization: api_key=\"iddqd\" [other_key=\"foo\"] ```  ## Versioning  This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.  Please note that the following changes are backwards-compatible:  - Adding new properties to existing API responses - Adding new API endpoints - Adding new optional request parameters to existing API endpoints - Changing the order of properties in existing API responses - Changing the autocomplete address suggestion format  ## Error Handling  A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).  An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).  ## Testing  Each new account comes with a free test balance. Contact us if you need more for testing and integration.  ### Community Key  Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.  Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.  Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!  ## Metadata  Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).  # Response Codes  The API returns two indicators to help you to determine the status of each HTTP request.  The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.  `2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.  The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.  Please use the glossary of code numbers and HTTP status codes below when debugging your requests.  ## 200 Request Success  | HTTP Code | API Code | Description                                  | | --------- | -------- | -------------------------------------------- | | 200       | 2000     | Success. Request was completed successfully. |  ## 400 Bad Request  The request could not be understood due to some input error.  | HTTP Code | API Code | Description                                                                                                                           | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | | 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                | | 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. | | 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        | | 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            | | 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         | | 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    | | 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |  ## 401 Unauthorised  Authorization credentials are not valid.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              | | 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. | | 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        | | 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |  ## 402 Request Failed  Your request is well-formed but are not able to complete your request for another reason.  | HTTP Code | API Code | Description                                                                                                                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       | | 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |  ## 404 Resource Not Found  The resource you requested does not exist.  | HTTP Code | API Code | Description                                                                                   | | --------- | -------- | --------------------------------------------------------------------------------------------- | | 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           | | 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        | | 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          | | 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               | | 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. | | 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |  ## 500 Server Error  A error occurred on our server.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support | | 500       | 5001     | Akin to 5000.                                                                                                                                                      | | 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              | 

    The version of the OpenAPI document: 3.7.0
    Contact: support@ideal-postcodes.co.uk
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.geonames_place_all_of_alternatenames import GeonamesPlaceAllOfAlternatenames
from openapi_client.models.geonames_place_all_of_cc2 import GeonamesPlaceAllOfCc2
from openapi_client.models.latitude import Latitude
from openapi_client.models.longitude import Longitude
from typing import Optional, Set
from typing_extensions import Self

class GeonamesPlace(BaseModel):
    """
    Full GeoNames place specification
    """ # noqa: E501
    admin1_code: Annotated[str, Field(min_length=0, strict=True, max_length=20)] = Field(description="Fipscode (subject to change to iso code)")
    admin1_geonameid: Optional[StrictInt] = Field(description="GeoName ID for first administrative area")
    admin1_name: StrictStr = Field(description="Name of first administrative area")
    admin2_code: Annotated[str, Field(min_length=0, strict=True, max_length=20)] = Field(description="Code for the second administrative division")
    admin2_geonameid: Optional[StrictInt] = Field(description="GeoName ID for second administrative area")
    admin2_name: StrictStr = Field(description="Name of second administrative area")
    admin3_code: Annotated[str, Field(min_length=0, strict=True, max_length=20)] = Field(description="Code for third level administrative division")
    admin4_code: Annotated[str, Field(min_length=0, strict=True, max_length=20)] = Field(description="Code for fourth level administrative division")
    alternatenames: List[GeonamesPlaceAllOfAlternatenames] = Field(description="List of alternate ASCII names")
    asciiname: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Place Name (ASCII)")
    cc2: List[GeonamesPlaceAllOfCc2] = Field(description="List of other countries codes mapping to this place")
    country_code: Annotated[str, Field(min_length=2, strict=True, max_length=2)] = Field(description="2 Letter ISO country code")
    dataset: Optional[StrictStr] = None
    dem: Optional[StrictInt] = Field(description="Digital elevation model")
    elevation: Optional[StrictInt] = Field(description="Elevation in meters")
    feature_class: StrictStr = Field(description="GeoNames single letter feature code")
    feature_code: Annotated[str, Field(min_length=0, strict=True, max_length=7)] = Field(description="Full GeoNames feature code (http://www.geonames.org/export/codes.html)")
    geonameid: StrictInt = Field(description="Unique identifier for GeoNames place")
    id: Optional[StrictStr] = Field(default=None, description="Unique place ID")
    latitude: Latitude
    longitude: Longitude
    modification_date: Annotated[str, Field(min_length=10, strict=True, max_length=10)] = Field(description="Datetime format")
    name: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Place name (UTF8)")
    population: StrictStr = Field(description="Population at place. Represented as string as it could be a larger than a 32bit integer")
    timezone: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="The IANA timezone ID")
    __properties: ClassVar[List[str]] = ["admin1_code", "admin1_geonameid", "admin1_name", "admin2_code", "admin2_geonameid", "admin2_name", "admin3_code", "admin4_code", "alternatenames", "asciiname", "cc2", "country_code", "dataset", "dem", "elevation", "feature_class", "feature_code", "geonameid", "id", "latitude", "longitude", "modification_date", "name", "population", "timezone"]

    @field_validator('dataset')
    def dataset_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['geonames']):
            raise ValueError("must be one of enum values ('geonames')")
        return value

    @field_validator('feature_class')
    def feature_class_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['A', 'H', 'L', 'P', 'R', 'S', 'T', 'U', 'V']):
            raise ValueError("must be one of enum values ('A', 'H', 'L', 'P', 'R', 'S', 'T', 'U', 'V')")
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
        """Create an instance of GeonamesPlace from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in alternatenames (list)
        _items = []
        if self.alternatenames:
            for _item_alternatenames in self.alternatenames:
                if _item_alternatenames:
                    _items.append(_item_alternatenames.to_dict())
            _dict['alternatenames'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in cc2 (list)
        _items = []
        if self.cc2:
            for _item_cc2 in self.cc2:
                if _item_cc2:
                    _items.append(_item_cc2.to_dict())
            _dict['cc2'] = _items
        # override the default output from pydantic by calling `to_dict()` of latitude
        if self.latitude:
            _dict['latitude'] = self.latitude.to_dict()
        # override the default output from pydantic by calling `to_dict()` of longitude
        if self.longitude:
            _dict['longitude'] = self.longitude.to_dict()
        # set to None if admin1_geonameid (nullable) is None
        # and model_fields_set contains the field
        if self.admin1_geonameid is None and "admin1_geonameid" in self.model_fields_set:
            _dict['admin1_geonameid'] = None

        # set to None if admin2_geonameid (nullable) is None
        # and model_fields_set contains the field
        if self.admin2_geonameid is None and "admin2_geonameid" in self.model_fields_set:
            _dict['admin2_geonameid'] = None

        # set to None if dem (nullable) is None
        # and model_fields_set contains the field
        if self.dem is None and "dem" in self.model_fields_set:
            _dict['dem'] = None

        # set to None if elevation (nullable) is None
        # and model_fields_set contains the field
        if self.elevation is None and "elevation" in self.model_fields_set:
            _dict['elevation'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GeonamesPlace from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "admin1_code": obj.get("admin1_code"),
            "admin1_geonameid": obj.get("admin1_geonameid"),
            "admin1_name": obj.get("admin1_name"),
            "admin2_code": obj.get("admin2_code"),
            "admin2_geonameid": obj.get("admin2_geonameid"),
            "admin2_name": obj.get("admin2_name"),
            "admin3_code": obj.get("admin3_code"),
            "admin4_code": obj.get("admin4_code"),
            "alternatenames": [GeonamesPlaceAllOfAlternatenames.from_dict(_item) for _item in obj["alternatenames"]] if obj.get("alternatenames") is not None else None,
            "asciiname": obj.get("asciiname"),
            "cc2": [GeonamesPlaceAllOfCc2.from_dict(_item) for _item in obj["cc2"]] if obj.get("cc2") is not None else None,
            "country_code": obj.get("country_code"),
            "dataset": obj.get("dataset"),
            "dem": obj.get("dem"),
            "elevation": obj.get("elevation"),
            "feature_class": obj.get("feature_class"),
            "feature_code": obj.get("feature_code"),
            "geonameid": obj.get("geonameid"),
            "id": obj.get("id"),
            "latitude": Latitude.from_dict(obj["latitude"]) if obj.get("latitude") is not None else None,
            "longitude": Longitude.from_dict(obj["longitude"]) if obj.get("longitude") is not None else None,
            "modification_date": obj.get("modification_date"),
            "name": obj.get("name"),
            "population": obj.get("population"),
            "timezone": obj.get("timezone")
        })
        return _obj


