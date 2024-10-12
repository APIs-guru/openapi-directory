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

from datetime import date
from pydantic import BaseModel, ConfigDict, Field, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Union
from typing_extensions import Annotated
from openapi_client.models.language import Language
from typing import Optional, Set
from typing_extensions import Self

class AddressBaseCore(BaseModel):
    """
    Represents a GB address in Ordnance Survey's AddressBase Core dataset
    """ # noqa: E501
    administrative_county: StrictStr = Field(description="The current administrative county to which the postcode has been assigned.  A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data  source: ONS")
    building_name: Annotated[str, Field(strict=True, max_length=110)] = Field(description="The building name is a description applied to a single address or a group of addresses.")
    building_number: Annotated[str, Field(strict=True, max_length=13)] = Field(description="The building number is a number or range of numbers given to a single address or a group of addresses.")
    change_code: Annotated[str, Field(strict=True, max_length=50)] = Field(description="This enumeration is used in association with the attribute “CHANGE_CODE”. This enumeration identifies the type of change that has been made to a feature. The change type must be set when a feature is inserted, updated or deleted. Please see section 3 for more information. Example I = Insert, U = Update, D = Delete")
    classification_code: Annotated[str, Field(strict=True, max_length=4)] = Field(description="A code that describes the classification of the address record to a maximum of a secondary level.")
    country: StrictStr = Field(description="  Full country names (ISO 3166) ")
    country_iso: StrictStr = Field(description="  3 letter country code (ISO 3166-1) ")
    county: StrictStr = Field(description="Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.")
    dataset: StrictStr = Field(description="Indicates the provenance of an address")
    delivery_point_suffix: Annotated[str, Field(strict=True, max_length=2)] = Field(description="A two-character code uniquely identifying an individual delivery point within a postcode, assigned by Royal Mail.")
    district: StrictStr = Field(description="The current district/unitary authority to which the postcode has been assigned.")
    eastings: Union[Annotated[float, Field(multiple_of=0.01, strict=True)], Annotated[int, Field(strict=True)]] = Field(description="A value in metres defining the x location in accordance with the British National Grid.")
    gss_code: Annotated[str, Field(strict=True, max_length=9)] = Field(description="The Office for National Statistics Governmental Statistical Service (GSS) code representing the contributing Local Authority.")
    id: StrictStr = Field(description="Global unique internally generated identifier for an address")
    island: Annotated[str, Field(strict=True, max_length=50)] = Field(description="Third level of geographic area name to record island names where appropriate.")
    language: Language
    last_update_date: date = Field(description="The latest date on which any of the attributes on this record were last changed.")
    latitude: Union[StrictFloat, StrictInt] = Field(description="A value in metres defining the y location in accordance with the British National Grid.")
    line_1: StrictStr = Field(description="First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.")
    line_2: StrictStr = Field(description="Second Address Line. Often contains thoroughfare and locality information. May be empty")
    line_3: StrictStr = Field(description="Third address line. May be empty.")
    locality: Annotated[str, Field(strict=True, max_length=35)] = Field(description="A locality defines an area or geographical identifier within a town, village or hamlet. Locality represents the lower level geographical area. The locality field should be used in conjunction with the town name and street description fields to uniquely identify geographic area where there may be more than one within an administrative area.")
    longitude: Union[StrictFloat, StrictInt] = Field(description="A value defining the Longitude location in accordance with the ETRS89 coordinate reference system.")
    northings: Union[Annotated[float, Field(multiple_of=0.01, strict=True)], Annotated[int, Field(strict=True)]] = Field(description="A value in metres defining the y location in accordance with the British National Grid.")
    organisation: Annotated[str, Field(strict=True, max_length=100)] = Field(description="The organisation name is the business name given, when appropriate, to an address record.")
    parent_uprn: Annotated[str, Field(strict=True, max_length=12)] = Field(description="UPRN of the parent Record if a parent-child relationship exists.")
    po_box: Annotated[str, Field(strict=True, max_length=13)] = Field(description="Text concatenation of 'PO BOX' and the Post Office Box (PO Box) number or 'BFPO' and the British Forces Post Office number.")
    post_town: Annotated[str, Field(strict=True, max_length=30)] = Field(description="The town or city in which the Royal Mail sorting office is located which services this address record.  Condition: POST_TOWN is not populated if this is the same as TOWN_NAME.")
    postal_county: StrictStr = Field(description="Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.")
    postcode: Annotated[str, Field(strict=True, max_length=8)] = Field(description="A postcode assigned by Royal Mail for the address record.")
    premise: Annotated[str, Field(strict=True, max_length=84)] = Field(description="A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.")
    rpc: Union[Annotated[float, Field(strict=True)], Annotated[int, Field(strict=True)]] = Field(description="Representative Point Code describes the accuracy of the coordinate that has been allocated to the UPRN as indicated by the Local Authority and enhanced using large scale OS data.")
    single_address_line: Annotated[str, Field(strict=True, max_length=500)] = Field(description="A single attribute containing text concatenation of the address elements separated by a comma.")
    street_name: Annotated[str, Field(strict=True, max_length=100)] = Field(description="Street / Road name for the address record.")
    sub_building: Annotated[str, Field(strict=True, max_length=110)] = Field(description="The sub-building name and/or number for the address record.")
    toid: Annotated[str, Field(strict=True, max_length=20)] = Field(description="The Topographic Identifier taken from OS MasterMap Topography Layer. This TOID is assigned to the UPRN by performing a spatial intersection between the two identifiers. It consists of the letters 'osgb' and is followed by up to sixteen digits.")
    town_name: Annotated[str, Field(strict=True, max_length=35)] = Field(description="Geographical town name assigned by the Local Authority. Please note this can be different from the Post Town value assigned by Royal Mail.")
    traditional_county: StrictStr = Field(description="Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.")
    udprn: Union[Annotated[float, Field(strict=True)], Annotated[int, Field(strict=True)]] = Field(description="Royal Mail's Unique Delivery Point Reference Number (UDPRN).")
    uprn: Annotated[str, Field(strict=True, max_length=12)] = Field(description="Unique Property Reference Number (UPRN) assigned by the LLPG Custodian or Ordnance Survey.")
    usrn: Union[Annotated[float, Field(strict=True)], Annotated[int, Field(strict=True)]] = Field(description="Unique Street Reference Number assigned by the Street Name and Numbering Custodian OR  Ordnance Survey depending on the address record.")
    ward: StrictStr = Field(description="The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.")
    __properties: ClassVar[List[str]] = ["administrative_county", "building_name", "building_number", "change_code", "classification_code", "country", "country_iso", "county", "dataset", "delivery_point_suffix", "district", "eastings", "gss_code", "id", "island", "language", "last_update_date", "latitude", "line_1", "line_2", "line_3", "locality", "longitude", "northings", "organisation", "parent_uprn", "po_box", "post_town", "postal_county", "postcode", "premise", "rpc", "single_address_line", "street_name", "sub_building", "toid", "town_name", "traditional_county", "udprn", "uprn", "usrn", "ward"]

    @field_validator('change_code')
    def change_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['I', 'U', 'D']):
            raise ValueError("must be one of enum values ('I', 'U', 'D')")
        return value

    @field_validator('dataset')
    def dataset_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['ab']):
            raise ValueError("must be one of enum values ('ab')")
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
        """Create an instance of AddressBaseCore from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AddressBaseCore from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "administrative_county": obj.get("administrative_county"),
            "building_name": obj.get("building_name"),
            "building_number": obj.get("building_number"),
            "change_code": obj.get("change_code"),
            "classification_code": obj.get("classification_code"),
            "country": obj.get("country"),
            "country_iso": obj.get("country_iso"),
            "county": obj.get("county"),
            "dataset": obj.get("dataset"),
            "delivery_point_suffix": obj.get("delivery_point_suffix"),
            "district": obj.get("district"),
            "eastings": obj.get("eastings"),
            "gss_code": obj.get("gss_code"),
            "id": obj.get("id"),
            "island": obj.get("island"),
            "language": obj.get("language"),
            "last_update_date": obj.get("last_update_date"),
            "latitude": obj.get("latitude"),
            "line_1": obj.get("line_1"),
            "line_2": obj.get("line_2"),
            "line_3": obj.get("line_3"),
            "locality": obj.get("locality"),
            "longitude": obj.get("longitude"),
            "northings": obj.get("northings"),
            "organisation": obj.get("organisation"),
            "parent_uprn": obj.get("parent_uprn"),
            "po_box": obj.get("po_box"),
            "post_town": obj.get("post_town"),
            "postal_county": obj.get("postal_county"),
            "postcode": obj.get("postcode"),
            "premise": obj.get("premise"),
            "rpc": obj.get("rpc"),
            "single_address_line": obj.get("single_address_line"),
            "street_name": obj.get("street_name"),
            "sub_building": obj.get("sub_building"),
            "toid": obj.get("toid"),
            "town_name": obj.get("town_name"),
            "traditional_county": obj.get("traditional_county"),
            "udprn": obj.get("udprn"),
            "uprn": obj.get("uprn"),
            "usrn": obj.get("usrn"),
            "ward": obj.get("ward")
        })
        return _obj


