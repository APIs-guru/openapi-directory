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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List
from openapi_client.models.country import Country
from openapi_client.models.country_iso import CountryISO
from openapi_client.models.country_iso2 import CountryISO2
from openapi_client.models.dataset import Dataset
from openapi_client.models.gbr_global_address_native import GbrGlobalAddressNative
from openapi_client.models.language import Language
from openapi_client.models.latitude import Latitude
from openapi_client.models.longitude import Longitude
from typing import Optional, Set
from typing_extensions import Self

class GbrGlobalAddress(BaseModel):
    """
    Global (non-UK) address in the UK address format
    """ # noqa: E501
    administrative_county: StrictStr = Field(description="Not available for non-UK addresses")
    building_name: StrictStr = Field(description="Not available for non-UK addresses")
    building_number: StrictStr = Field(description="Not available for non-UK addresses")
    country: Country
    country_iso: CountryISO
    country_iso_2: CountryISO2
    county: StrictStr = Field(description="State or county name")
    county_code: StrictStr = Field(description="Code abbreviation for state or county used in some countries.")
    dataset: Dataset
    delivery_point_suffix: StrictStr = Field(description="Not available for non-UK addresses")
    department_name: StrictStr = Field(description="Not available for non-UK addresses")
    dependant_locality: StrictStr = Field(description="Not available for non-UK addresses")
    dependant_thoroughfare: StrictStr = Field(description="Not available for non-UK addresses")
    district: StrictStr = Field(description="Not available for non-UK addresses")
    double_dependant_locality: StrictStr = Field(description="Not available for non-UK addresses")
    eastings: StrictStr = Field(description="Not available for non-UK addresses")
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    language: Language
    latitude: Latitude
    line_1: StrictStr = Field(description="First line of the address. Typically the building number and street name")
    line_2: StrictStr = Field(description="Second line of the address. Can be blank")
    line_3: StrictStr = Field(description="Third line of the address. Can also be blank")
    longitude: Longitude
    native: GbrGlobalAddressNative
    northings: StrictStr = Field(description="Not available for non-UK addresses")
    organisation_name: StrictStr = Field(description="Not available for non-UK addresses")
    po_box: StrictStr = Field(description="Not available for non-UK addresses")
    post_town: StrictStr = Field(description="The city, town or other primary locality ")
    postal_county: StrictStr = Field(description="Not available for non-UK addresses")
    postcode: StrictStr = Field(description="Represents the postal or zip code")
    postcode_inward: StrictStr = Field(description="Not available for non-UK addresses")
    postcode_outward: StrictStr = Field(description="Not available for non-UK addresses")
    postcode_type: StrictStr = Field(description="Not available for non-UK addresses")
    premise: StrictStr = Field(description="Not available for non-UK addresses")
    su_organisation_indicator: StrictStr = Field(description="Not available for non-UK addresses")
    sub_building_name: StrictStr = Field(description="Not available for non-UK addresses")
    thoroughfare: StrictStr = Field(description="Not available for non-UK addresses")
    traditional_county: StrictStr = Field(description="Not available for non-UK addresses")
    udprn: StrictStr = Field(description="Not available for non-UK addresses. See `id` for address identifier")
    umprn: StrictStr = Field(description="Not available for non-UK addresses. See `id` for address identifier")
    uprn: StrictStr = Field(description="Not available for non-UK addresses. See `id` for address identifier")
    ward: StrictStr = Field(description="Not available for non-UK addresses")
    __properties: ClassVar[List[str]] = ["administrative_county", "building_name", "building_number", "country", "country_iso", "country_iso_2", "county", "county_code", "dataset", "delivery_point_suffix", "department_name", "dependant_locality", "dependant_thoroughfare", "district", "double_dependant_locality", "eastings", "id", "language", "latitude", "line_1", "line_2", "line_3", "longitude", "native", "northings", "organisation_name", "po_box", "post_town", "postal_county", "postcode", "postcode_inward", "postcode_outward", "postcode_type", "premise", "su_organisation_indicator", "sub_building_name", "thoroughfare", "traditional_county", "udprn", "umprn", "uprn", "ward"]

    @field_validator('administrative_county')
    def administrative_county_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('building_name')
    def building_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('building_number')
    def building_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('delivery_point_suffix')
    def delivery_point_suffix_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('department_name')
    def department_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('dependant_locality')
    def dependant_locality_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('dependant_thoroughfare')
    def dependant_thoroughfare_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('district')
    def district_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('double_dependant_locality')
    def double_dependant_locality_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('eastings')
    def eastings_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('northings')
    def northings_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('organisation_name')
    def organisation_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('po_box')
    def po_box_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('postal_county')
    def postal_county_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('postcode_inward')
    def postcode_inward_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('postcode_outward')
    def postcode_outward_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('postcode_type')
    def postcode_type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('premise')
    def premise_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('su_organisation_indicator')
    def su_organisation_indicator_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('sub_building_name')
    def sub_building_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('thoroughfare')
    def thoroughfare_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('traditional_county')
    def traditional_county_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('umprn')
    def umprn_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('uprn')
    def uprn_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('ward')
    def ward_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
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
        """Create an instance of GbrGlobalAddress from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of latitude
        if self.latitude:
            _dict['latitude'] = self.latitude.to_dict()
        # override the default output from pydantic by calling `to_dict()` of longitude
        if self.longitude:
            _dict['longitude'] = self.longitude.to_dict()
        # override the default output from pydantic by calling `to_dict()` of native
        if self.native:
            _dict['native'] = self.native.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GbrGlobalAddress from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "administrative_county": obj.get("administrative_county"),
            "building_name": obj.get("building_name"),
            "building_number": obj.get("building_number"),
            "country": obj.get("country"),
            "country_iso": obj.get("country_iso"),
            "country_iso_2": obj.get("country_iso_2"),
            "county": obj.get("county"),
            "county_code": obj.get("county_code"),
            "dataset": obj.get("dataset"),
            "delivery_point_suffix": obj.get("delivery_point_suffix"),
            "department_name": obj.get("department_name"),
            "dependant_locality": obj.get("dependant_locality"),
            "dependant_thoroughfare": obj.get("dependant_thoroughfare"),
            "district": obj.get("district"),
            "double_dependant_locality": obj.get("double_dependant_locality"),
            "eastings": obj.get("eastings"),
            "id": obj.get("id"),
            "language": obj.get("language"),
            "latitude": Latitude.from_dict(obj["latitude"]) if obj.get("latitude") is not None else None,
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "line_3": obj.get("line_3"),
            "longitude": Longitude.from_dict(obj["longitude"]) if obj.get("longitude") is not None else None,
            "native": GbrGlobalAddressNative.from_dict(obj["native"]) if obj.get("native") is not None else None,
            "northings": obj.get("northings"),
            "organisation_name": obj.get("organisation_name"),
            "po_box": obj.get("po_box"),
            "post_town": obj.get("post_town"),
            "postal_county": obj.get("postal_county"),
            "postcode": obj.get("postcode"),
            "postcode_inward": obj.get("postcode_inward"),
            "postcode_outward": obj.get("postcode_outward"),
            "postcode_type": obj.get("postcode_type"),
            "premise": obj.get("premise"),
            "su_organisation_indicator": obj.get("su_organisation_indicator"),
            "sub_building_name": obj.get("sub_building_name"),
            "thoroughfare": obj.get("thoroughfare"),
            "traditional_county": obj.get("traditional_county"),
            "udprn": obj.get("udprn"),
            "umprn": obj.get("umprn"),
            "uprn": obj.get("uprn"),
            "ward": obj.get("ward")
        })
        return _obj


