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
from openapi_client.models.language import Language
from openapi_client.models.usa_global_address_native import UsaGlobalAddressNative
from typing import Optional, Set
from typing_extensions import Self

class UsaGlobalAddress(BaseModel):
    """
    Global (non-US) Address in the US address format
    """ # noqa: E501
    address_secondary_abbreviation: StrictStr = Field(description="Not available for non-US addresses")
    base_alternate_code: StrictStr = Field(description="Not available for non-US addresses")
    building_or_firm_name: StrictStr = Field(description="Not available for non-US addresses")
    carrier_route_id: StrictStr = Field(description="Not available for non-US addresses")
    carrier_route_rate_sortation: StrictStr = Field(description="Not available for non-US addresses")
    city: StrictStr = Field(description="City name")
    city_abbreviation: StrictStr = Field(description="City name abbreviation (if available)")
    city_state_mailing_name_indicator: StrictStr = Field(description="Not available for non-US addresses")
    city_state_name_facility_code: StrictStr = Field(description="Not available for non-US addresses")
    congressional_district_number: StrictStr = Field(description="Not available for non-US addresses")
    country: Country
    country_iso: CountryISO
    country_iso_2: CountryISO2
    county: StrictStr = Field(description="County name")
    county_number: StrictStr = Field(description="Not available for non-US addresses")
    dataset: Dataset
    finance_number: StrictStr = Field(description="Not available for non-US addresses")
    government_building_indicator: StrictStr = Field(description="Not available for non-US addresses")
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    lacs_status_indicator: StrictStr = Field(description="Not available for non-US addresses")
    language: Language
    last_line: StrictStr = Field(description="Not available for non-US addresses")
    line_1: StrictStr = Field(description="First line of address")
    line_2: StrictStr = Field(description="Second line of address")
    municipality_city_state_key: StrictStr = Field(description="Not available for non-US addresses")
    native: UsaGlobalAddressNative
    plus_4_code: StrictStr = Field(description="Not available for non-US addresses")
    preferred_city: StrictStr = Field(description="Not available for non-US addresses")
    preferred_last_line_city_state_key: StrictStr = Field(description="Not available for non-US addresses")
    primary_number: StrictStr = Field(description="Not available for non-US addresses")
    record_type_code: StrictStr = Field(description="Not available for non-US addresses")
    secondary_number: StrictStr = Field(description="Not available for non-US addresses")
    state: StrictStr = Field(description="State or province")
    state_abbreviation: StrictStr = Field(description="Code of state or province (if available)")
    street_name: StrictStr = Field(description="Not available for non-US addresses")
    street_post_directional_abbreviation: StrictStr = Field(description="Not available for non-US addresses")
    street_pre_directional_abbreviation: StrictStr = Field(description="Not available for non-US addresses")
    street_suffix_abbreviation: StrictStr = Field(description="Not available for non-US addresses")
    update_key_number: StrictStr = Field(description="Not available for non-US addresses")
    urbanization_city_state_key: StrictStr = Field(description="Not available for non-US addresses")
    zip_classification_code: StrictStr = Field(description="Not available for non-US addresses")
    zip_code: StrictStr = Field(description="Partial postcode of address")
    zip_plus_4_code: StrictStr = Field(description="Full postal code of address")
    __properties: ClassVar[List[str]] = ["address_secondary_abbreviation", "base_alternate_code", "building_or_firm_name", "carrier_route_id", "carrier_route_rate_sortation", "city", "city_abbreviation", "city_state_mailing_name_indicator", "city_state_name_facility_code", "congressional_district_number", "country", "country_iso", "country_iso_2", "county", "county_number", "dataset", "finance_number", "government_building_indicator", "id", "lacs_status_indicator", "language", "last_line", "line_1", "line_2", "municipality_city_state_key", "native", "plus_4_code", "preferred_city", "preferred_last_line_city_state_key", "primary_number", "record_type_code", "secondary_number", "state", "state_abbreviation", "street_name", "street_post_directional_abbreviation", "street_pre_directional_abbreviation", "street_suffix_abbreviation", "update_key_number", "urbanization_city_state_key", "zip_classification_code", "zip_code", "zip_plus_4_code"]

    @field_validator('address_secondary_abbreviation')
    def address_secondary_abbreviation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('base_alternate_code')
    def base_alternate_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('building_or_firm_name')
    def building_or_firm_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('carrier_route_id')
    def carrier_route_id_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('carrier_route_rate_sortation')
    def carrier_route_rate_sortation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('city_state_mailing_name_indicator')
    def city_state_mailing_name_indicator_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('city_state_name_facility_code')
    def city_state_name_facility_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('congressional_district_number')
    def congressional_district_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('county_number')
    def county_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('finance_number')
    def finance_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('government_building_indicator')
    def government_building_indicator_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('lacs_status_indicator')
    def lacs_status_indicator_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('last_line')
    def last_line_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('municipality_city_state_key')
    def municipality_city_state_key_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('plus_4_code')
    def plus_4_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('preferred_city')
    def preferred_city_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('preferred_last_line_city_state_key')
    def preferred_last_line_city_state_key_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('primary_number')
    def primary_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('record_type_code')
    def record_type_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('secondary_number')
    def secondary_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('street_name')
    def street_name_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('street_post_directional_abbreviation')
    def street_post_directional_abbreviation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('street_pre_directional_abbreviation')
    def street_pre_directional_abbreviation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('street_suffix_abbreviation')
    def street_suffix_abbreviation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('update_key_number')
    def update_key_number_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('urbanization_city_state_key')
    def urbanization_city_state_key_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['']):
            raise ValueError("must be one of enum values ('')")
        return value

    @field_validator('zip_classification_code')
    def zip_classification_code_validate_enum(cls, value):
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
        """Create an instance of UsaGlobalAddress from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of native
        if self.native:
            _dict['native'] = self.native.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of UsaGlobalAddress from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address_secondary_abbreviation": obj.get("address_secondary_abbreviation"),
            "base_alternate_code": obj.get("base_alternate_code"),
            "building_or_firm_name": obj.get("building_or_firm_name"),
            "carrier_route_id": obj.get("carrier_route_id"),
            "carrier_route_rate_sortation": obj.get("carrier_route_rate_sortation"),
            "city": obj.get("city"),
            "city_abbreviation": obj.get("city_abbreviation"),
            "city_state_mailing_name_indicator": obj.get("city_state_mailing_name_indicator"),
            "city_state_name_facility_code": obj.get("city_state_name_facility_code"),
            "congressional_district_number": obj.get("congressional_district_number"),
            "country": obj.get("country"),
            "country_iso": obj.get("country_iso"),
            "country_iso_2": obj.get("country_iso_2"),
            "county": obj.get("county"),
            "county_number": obj.get("county_number"),
            "dataset": obj.get("dataset"),
            "finance_number": obj.get("finance_number"),
            "government_building_indicator": obj.get("government_building_indicator"),
            "id": obj.get("id"),
            "lacs_status_indicator": obj.get("lacs_status_indicator"),
            "language": obj.get("language"),
            "last_line": obj.get("last_line"),
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "municipality_city_state_key": obj.get("municipality_city_state_key"),
            "native": UsaGlobalAddressNative.from_dict(obj["native"]) if obj.get("native") is not None else None,
            "plus_4_code": obj.get("plus_4_code"),
            "preferred_city": obj.get("preferred_city"),
            "preferred_last_line_city_state_key": obj.get("preferred_last_line_city_state_key"),
            "primary_number": obj.get("primary_number"),
            "record_type_code": obj.get("record_type_code"),
            "secondary_number": obj.get("secondary_number"),
            "state": obj.get("state"),
            "state_abbreviation": obj.get("state_abbreviation"),
            "street_name": obj.get("street_name"),
            "street_post_directional_abbreviation": obj.get("street_post_directional_abbreviation"),
            "street_pre_directional_abbreviation": obj.get("street_pre_directional_abbreviation"),
            "street_suffix_abbreviation": obj.get("street_suffix_abbreviation"),
            "update_key_number": obj.get("update_key_number"),
            "urbanization_city_state_key": obj.get("urbanization_city_state_key"),
            "zip_classification_code": obj.get("zip_classification_code"),
            "zip_code": obj.get("zip_code"),
            "zip_plus_4_code": obj.get("zip_plus_4_code")
        })
        return _obj


