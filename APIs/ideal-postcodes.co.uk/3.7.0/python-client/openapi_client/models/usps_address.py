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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List
from openapi_client.models.base_alternate_code import BaseAlternateCode
from openapi_client.models.city_state_name_facility_code import CityStateNameFacilityCode
from openapi_client.models.congressional_district_number import CongressionalDistrictNumber
from openapi_client.models.county_number import CountyNumber
from openapi_client.models.finance_number import FinanceNumber
from openapi_client.models.government_building_indicator import GovernmentBuildingIndicator
from openapi_client.models.lacs_status_indicator import LacsStatusIndicator
from openapi_client.models.record_type_code import RecordTypeCode
from openapi_client.models.usps_country import UspsCountry
from openapi_client.models.usps_country_iso import UspsCountryIso
from openapi_client.models.usps_country_iso2 import UspsCountryIso2
from openapi_client.models.usps_dataset import UspsDataset
from openapi_client.models.usps_language import UspsLanguage
from openapi_client.models.zip_classification_code import ZipClassificationCode
from typing import Optional, Set
from typing_extensions import Self

class UspsAddress(BaseModel):
    """
    Standard USA Address
    """ # noqa: E501
    address_secondary_abbreviation: StrictStr = Field(description="A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field.  This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers.")
    base_alternate_code: BaseAlternateCode
    building_or_firm_name: StrictStr = Field(description="The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information. This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.”")
    carrier_route_id: StrictStr = Field(description="A 4 character ID identifying the postal route for the address. The first character indicates the route type. Specifically: - \"B\" indicates PO Box - \"H\" indicates highway - \"C\" indicates city - \"G\" indicates general - \"R\" indicates rural")
    carrier_route_rate_sortation: StrictStr = Field(description="Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed.")
    city: StrictStr = Field(description="A valid city name for mailing purposes; appears in the last line of an address on a mail piece.")
    city_abbreviation: StrictStr = Field(description="A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of \"Y.\" If the field is longer than 13 characters and the city/state mailing name indicator is \"N,\" the field will be blank.")
    city_state_mailing_name_indicator: StrictStr = Field(description="Specifies whether or not the city state name can be used as a last line of address on a mail piece. - \"Y = City/state name is a USPS-approved mailing name.\" - \"N = City/state name is not approved for mailing purposes.\"")
    city_state_name_facility_code: CityStateNameFacilityCode
    congressional_district_number: CongressionalDistrictNumber
    country: UspsCountry
    country_iso: UspsCountryIso
    country_iso_2: UspsCountryIso2
    county: StrictStr = Field(description="The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank.")
    county_number: CountyNumber
    dataset: UspsDataset
    finance_number: FinanceNumber
    government_building_indicator: GovernmentBuildingIndicator
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    lacs_status_indicator: LacsStatusIndicator
    language: UspsLanguage
    last_line: StrictStr = Field(description="Last line of the address comprising of city, state, zip code and zip+4")
    line_1: StrictStr = Field(description="The primary delivery line (usually the street address) of the address.")
    line_2: StrictStr = Field(description="Secondary delivery line of the address. Typically populated if the first line is the firm or building name.")
    municipality_city_state_key: StrictStr = Field(description="Municipality City State Key. Currently blank.")
    plus_4_code: StrictStr = Field(description="4 digit ZIP add-on code.")
    preferred_city: StrictStr = Field(description="Field that contains the default preferred or alternate preferred last-line name for a ZIP Code.")
    preferred_last_line_city_state_key: StrictStr = Field(description="In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code.")
    primary_number: StrictStr = Field(description="A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number.")
    record_type_code: RecordTypeCode
    secondary_number: StrictStr = Field(description="Number of the sub unit, apartment, suite etc")
    state: StrictStr = Field(description="Full name of a state, U.S. territory, or armed forces ZIP Code designation.")
    state_abbreviation: StrictStr = Field(description="A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.”")
    street_name: StrictStr = Field(description="The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT.")
    street_post_directional_abbreviation: StrictStr = Field(description="A geographic direction that follows the street name.")
    street_pre_directional_abbreviation: StrictStr = Field(description="A geographic direction that precedes the street name.")
    street_suffix_abbreviation: StrictStr = Field(description="Code that is the standard USPS abbreviation for the trailing designator in a street address. ")
    update_key_number: StrictStr = Field(description="Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA.")
    urbanization_city_state_key: StrictStr = Field(description="An index to the City State file that provides the urbanization name for this delivery range.")
    zip_classification_code: ZipClassificationCode
    zip_code: StrictStr = Field(description="A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume. ")
    zip_plus_4_code: StrictStr = Field(description="Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece.")
    __properties: ClassVar[List[str]] = ["address_secondary_abbreviation", "base_alternate_code", "building_or_firm_name", "carrier_route_id", "carrier_route_rate_sortation", "city", "city_abbreviation", "city_state_mailing_name_indicator", "city_state_name_facility_code", "congressional_district_number", "country", "country_iso", "country_iso_2", "county", "county_number", "dataset", "finance_number", "government_building_indicator", "id", "lacs_status_indicator", "language", "last_line", "line_1", "line_2", "municipality_city_state_key", "plus_4_code", "preferred_city", "preferred_last_line_city_state_key", "primary_number", "record_type_code", "secondary_number", "state", "state_abbreviation", "street_name", "street_post_directional_abbreviation", "street_pre_directional_abbreviation", "street_suffix_abbreviation", "update_key_number", "urbanization_city_state_key", "zip_classification_code", "zip_code", "zip_plus_4_code"]

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
        """Create an instance of UspsAddress from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of congressional_district_number
        if self.congressional_district_number:
            _dict['congressional_district_number'] = self.congressional_district_number.to_dict()
        # override the default output from pydantic by calling `to_dict()` of county_number
        if self.county_number:
            _dict['county_number'] = self.county_number.to_dict()
        # override the default output from pydantic by calling `to_dict()` of finance_number
        if self.finance_number:
            _dict['finance_number'] = self.finance_number.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of UspsAddress from a dict"""
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
            "congressional_district_number": CongressionalDistrictNumber.from_dict(obj["congressional_district_number"]) if obj.get("congressional_district_number") is not None else None,
            "country": obj.get("country"),
            "country_iso": obj.get("country_iso"),
            "country_iso_2": obj.get("country_iso_2"),
            "county": obj.get("county"),
            "county_number": CountyNumber.from_dict(obj["county_number"]) if obj.get("county_number") is not None else None,
            "dataset": obj.get("dataset"),
            "finance_number": FinanceNumber.from_dict(obj["finance_number"]) if obj.get("finance_number") is not None else None,
            "government_building_indicator": obj.get("government_building_indicator"),
            "id": obj.get("id"),
            "lacs_status_indicator": obj.get("lacs_status_indicator"),
            "language": obj.get("language"),
            "last_line": obj.get("last_line"),
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "municipality_city_state_key": obj.get("municipality_city_state_key"),
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


