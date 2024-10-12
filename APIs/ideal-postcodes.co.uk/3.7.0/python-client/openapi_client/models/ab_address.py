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
from typing import Any, ClassVar, Dict, List
from typing_extensions import Annotated
from openapi_client.models.address_base_core import AddressBaseCore
from openapi_client.models.eastings import Eastings
from openapi_client.models.latitude import Latitude
from openapi_client.models.longitude import Longitude
from openapi_client.models.northings import Northings
from openapi_client.models.paf_umprn import PafUmprn
from typing import Optional, Set
from typing_extensions import Self

class AbAddress(BaseModel):
    """
    Address from Ordnance Survey AddressBase Ccore dataset.  Please contact us to have this enabled on your account.  All AddressBase Core address have a UPRN and a rooftop geolocation available however they may not have a UDPRN.
    """ # noqa: E501
    administrative_county: StrictStr = Field(description="The current administrative county to which the postcode has been assigned.  A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data  source: ONS")
    building_name: Annotated[str, Field(strict=True, max_length=50)] = Field(description="Name of residential or commercial premise.   Examples:   - The Manor   - 1-2   - A   - 12A   - K   - Victoria House")
    building_number: Annotated[str, Field(strict=True, max_length=4)] = Field(description="Number to identify premise on a thoroughfare or dependant thoroughfare.")
    country: StrictStr
    country_iso: StrictStr
    country_iso_2: StrictStr
    county: StrictStr = Field(description="Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.")
    county_code: StrictStr = Field(description="Short code representing the county or province. May be empty (`\"\"`)")
    dataset: StrictStr
    delivery_point_suffix: StrictStr = Field(description="A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.")
    department_name: Annotated[str, Field(strict=True, max_length=60)] = Field(description="Used to supplment Organisation Name to identify a deparment within the organisation.")
    dependant_locality: Annotated[str, Field(strict=True, max_length=35)] = Field(description="When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.")
    dependant_thoroughfare: Annotated[str, Field(strict=True, max_length=80)] = Field(description="Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.")
    district: StrictStr = Field(description="The current district/unitary authority to which the postcode has been assigned.")
    double_dependant_locality: Annotated[str, Field(strict=True, max_length=35)] = Field(description="Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.")
    eastings: Eastings
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    language: StrictStr
    latitude: Latitude
    line_1: StrictStr = Field(description="First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.")
    line_2: StrictStr = Field(description="Second Address Line. Often contains thoroughfare and locality information. May be empty")
    line_3: StrictStr = Field(description="Third address line. May be empty.")
    longitude: Longitude
    northings: Northings
    organisation_name: Annotated[str, Field(strict=True, max_length=60)] = Field(description="Used to supplment Organisation Name to identify a deparment within the organisation")
    po_box: Annotated[str, Field(strict=True, max_length=6)] = Field(description="When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.")
    post_town: Annotated[str, Field(strict=True, max_length=30)] = Field(description="A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.")
    postal_county: StrictStr = Field(description="Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.")
    postcode: Annotated[str, Field(min_length=6, strict=True, max_length=8)] = Field(description="Correctly formatted postcode. Capitalised and spaced.")
    postcode_inward: Annotated[str, Field(min_length=3, strict=True, max_length=3)] = Field(description="The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.  The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.")
    postcode_outward: Annotated[str, Field(min_length=2, strict=True, max_length=4)] = Field(description="The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.")
    postcode_type: StrictStr
    premise: Annotated[str, Field(strict=True, max_length=84)] = Field(description="A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.")
    su_organisation_indicator: StrictStr = Field(description="Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.")
    sub_building_name: Annotated[str, Field(strict=True, max_length=30)] = Field(description="When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B")
    thoroughfare: Annotated[str, Field(strict=True, max_length=80)] = Field(description="Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.")
    traditional_county: StrictStr = Field(description="Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.")
    udprn: StrictInt = Field(description="UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.  Up to 8-digit numeric code.  A new UDPRN is automatically assigned to each new Delivery Point added to PAF.")
    umprn: PafUmprn
    uprn: StrictStr = Field(description="UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.  Up to 12 digits in length.  Multiple Residence premises currently share the same UPRN as the parent premise.  May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey's AddressBase datasets. Returns empty string \"\" in these instances.  Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.  Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.")
    ward: StrictStr = Field(description="The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.")
    native: AddressBaseCore
    __properties: ClassVar[List[str]] = ["administrative_county", "building_name", "building_number", "country", "country_iso", "country_iso_2", "county", "county_code", "dataset", "delivery_point_suffix", "department_name", "dependant_locality", "dependant_thoroughfare", "district", "double_dependant_locality", "eastings", "id", "language", "latitude", "line_1", "line_2", "line_3", "longitude", "northings", "organisation_name", "po_box", "post_town", "postal_county", "postcode", "postcode_inward", "postcode_outward", "postcode_type", "premise", "su_organisation_indicator", "sub_building_name", "thoroughfare", "traditional_county", "udprn", "umprn", "uprn", "ward", "native"]

    @field_validator('country')
    def country_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['England', 'Scotland', 'Wales']):
            raise ValueError("must be one of enum values ('England', 'Scotland', 'Wales')")
        return value

    @field_validator('country_iso')
    def country_iso_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['GBR']):
            raise ValueError("must be one of enum values ('GBR')")
        return value

    @field_validator('country_iso_2')
    def country_iso_2_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['GB']):
            raise ValueError("must be one of enum values ('GB')")
        return value

    @field_validator('dataset')
    def dataset_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['ab']):
            raise ValueError("must be one of enum values ('ab')")
        return value

    @field_validator('language')
    def language_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['en']):
            raise ValueError("must be one of enum values ('en')")
        return value

    @field_validator('postcode_type')
    def postcode_type_validate_enum(cls, value):
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
        """Create an instance of AbAddress from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of eastings
        if self.eastings:
            _dict['eastings'] = self.eastings.to_dict()
        # override the default output from pydantic by calling `to_dict()` of latitude
        if self.latitude:
            _dict['latitude'] = self.latitude.to_dict()
        # override the default output from pydantic by calling `to_dict()` of longitude
        if self.longitude:
            _dict['longitude'] = self.longitude.to_dict()
        # override the default output from pydantic by calling `to_dict()` of northings
        if self.northings:
            _dict['northings'] = self.northings.to_dict()
        # override the default output from pydantic by calling `to_dict()` of umprn
        if self.umprn:
            _dict['umprn'] = self.umprn.to_dict()
        # override the default output from pydantic by calling `to_dict()` of native
        if self.native:
            _dict['native'] = self.native.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AbAddress from a dict"""
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
            "eastings": Eastings.from_dict(obj["eastings"]) if obj.get("eastings") is not None else None,
            "id": obj.get("id"),
            "language": obj.get("language"),
            "latitude": Latitude.from_dict(obj["latitude"]) if obj.get("latitude") is not None else None,
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "line_3": obj.get("line_3"),
            "longitude": Longitude.from_dict(obj["longitude"]) if obj.get("longitude") is not None else None,
            "northings": Northings.from_dict(obj["northings"]) if obj.get("northings") is not None else None,
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
            "umprn": PafUmprn.from_dict(obj["umprn"]) if obj.get("umprn") is not None else None,
            "uprn": obj.get("uprn"),
            "ward": obj.get("ward"),
            "native": AddressBaseCore.from_dict(obj["native"]) if obj.get("native") is not None else None
        })
        return _obj


