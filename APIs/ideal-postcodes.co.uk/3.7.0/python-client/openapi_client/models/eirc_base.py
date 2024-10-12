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
from typing_extensions import Annotated
from openapi_client.models.latitude import Latitude
from openapi_client.models.longitude import Longitude
from typing import Optional, Set
from typing_extensions import Self

class EircBase(BaseModel):
    """
    EircBase
    """ # noqa: E501
    address_reference: Annotated[str, Field(min_length=0, strict=True, max_length=16)] = Field(description="The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.")
    building_group: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.")
    building_name: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.")
    building_number: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it. A complex building number may be one of the following:   - Dual. Two number separated by '/' e.g. 63/64 = 63, 64   - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6    - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66 The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.")
    country: StrictStr = Field(description="  Full country names (ISO 3166) ")
    country_iso: StrictStr = Field(description="  3 letter country code (ISO 3166-1) ")
    country_iso_2: StrictStr = Field(description=" 2 letter country code (ISO 3166-1) ")
    dataset: StrictStr = Field(description="Source of address")
    department: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="The department or division within an organisation. If the department element exists, then the organisation must also exist.")
    eircode: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.  The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.")
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    language: StrictStr = Field(description="Language represented by 2 letter ISO Code (639-1) ")
    latitude: Latitude
    line_1: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 1")
    line_2: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 2")
    line_3: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 3")
    line_4: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 4")
    line_5: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 5")
    line_6: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 6")
    line_7: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 7")
    line_8: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 8")
    line_9: Annotated[str, Field(min_length=0, strict=True, max_length=200)] = Field(description="Address Line 9")
    longitude: Longitude
    organisation: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="Organisation name")
    post_county: Annotated[str, Field(min_length=0, strict=True, max_length=30)] = Field(description="One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.")
    primary_locality: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="First locality elements which can refer to areas, districts, industrial estates, towns, etc.  The primary locality refers to the specific place the address is.  In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.")
    primary_thoroughfare: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.  Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.")
    secondary_locality: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.  It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.  Secondary localities are more likely to be required for rural addresses.  Second locality elements which can refer to areas, districts, industrial estates, towns, etc  The secondary locality helps identify where the primary locality is located.")
    secondary_thoroughfare: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.  Secondary thoroughfare are generally used to assist locating a primary thoroughfare.")
    sub_building_name: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="The sub-building refers to an apartment, flat or unit within a building.")
    tertiary_locality: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="Also known as the Post Town.  The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts \"Dublin 1\" to \"Dublin 24\".  The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:  \"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience.\"")
    __properties: ClassVar[List[str]] = ["address_reference", "building_group", "building_name", "building_number", "country", "country_iso", "country_iso_2", "dataset", "department", "eircode", "id", "language", "latitude", "line_1", "line_2", "line_3", "line_4", "line_5", "line_6", "line_7", "line_8", "line_9", "longitude", "organisation", "post_county", "primary_locality", "primary_thoroughfare", "secondary_locality", "secondary_thoroughfare", "sub_building_name", "tertiary_locality"]

    @field_validator('country')
    def country_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Ireland']):
            raise ValueError("must be one of enum values ('Ireland')")
        return value

    @field_validator('country_iso')
    def country_iso_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['IRL']):
            raise ValueError("must be one of enum values ('IRL')")
        return value

    @field_validator('country_iso_2')
    def country_iso_2_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['IE']):
            raise ValueError("must be one of enum values ('IE')")
        return value

    @field_validator('language')
    def language_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['en', 'ga']):
            raise ValueError("must be one of enum values ('en', 'ga')")
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
        """Create an instance of EircBase from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of EircBase from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address_reference": obj.get("address_reference"),
            "building_group": obj.get("building_group"),
            "building_name": obj.get("building_name"),
            "building_number": obj.get("building_number"),
            "country": obj.get("country"),
            "country_iso": obj.get("country_iso"),
            "country_iso_2": obj.get("country_iso_2"),
            "dataset": obj.get("dataset"),
            "department": obj.get("department"),
            "eircode": obj.get("eircode"),
            "id": obj.get("id"),
            "language": obj.get("language"),
            "latitude": Latitude.from_dict(obj["latitude"]) if obj.get("latitude") is not None else None,
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "line_3": obj.get("line_3"),
            "line_4": obj.get("line_4"),
            "line_5": obj.get("line_5"),
            "line_6": obj.get("line_6"),
            "line_7": obj.get("line_7"),
            "line_8": obj.get("line_8"),
            "line_9": obj.get("line_9"),
            "longitude": Longitude.from_dict(obj["longitude"]) if obj.get("longitude") is not None else None,
            "organisation": obj.get("organisation"),
            "post_county": obj.get("post_county"),
            "primary_locality": obj.get("primary_locality"),
            "primary_thoroughfare": obj.get("primary_thoroughfare"),
            "secondary_locality": obj.get("secondary_locality"),
            "secondary_thoroughfare": obj.get("secondary_thoroughfare"),
            "sub_building_name": obj.get("sub_building_name"),
            "tertiary_locality": obj.get("tertiary_locality")
        })
        return _obj


