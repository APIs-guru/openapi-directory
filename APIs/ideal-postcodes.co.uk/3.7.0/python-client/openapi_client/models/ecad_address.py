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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.latitude import Latitude
from openapi_client.models.longitude import Longitude
from typing import Optional, Set
from typing_extensions import Self

class EcadAddress(BaseModel):
    """
    The ECAD contains additional data for each ECAF address.
    """ # noqa: E501
    address_reference: Annotated[str, Field(min_length=0, strict=True, max_length=16)] = Field(description="The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.")
    building_group: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.")
    building_name: Annotated[str, Field(min_length=0, strict=True, max_length=60)] = Field(description="The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.")
    building_number: Annotated[str, Field(min_length=0, strict=True, max_length=40)] = Field(description="A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it. A complex building number may be one of the following:   - Dual. Two number separated by '/' e.g. 63/64 = 63, 64   - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6    - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66 The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.")
    country: StrictStr = Field(description="  Full country names (ISO 3166) ")
    country_iso: StrictStr = Field(description="  3 letter country code (ISO 3166-1) ")
    country_iso_2: StrictStr = Field(description=" 2 letter country code (ISO 3166-1) ")
    dataset: StrictStr
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
    address_point_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Address Point ID")
    address_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Addresses points can assume one of the following values:  - Residential Address Point. This type of address point has one residential addresses associated with it. - Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it. - Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.  Buildings can contain multiple address points of type Residential and/or Non-Residential.")
    building_address_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The building type can assume one of the following values:  - Single Occupancy Residential Building. This type of building contains one residential address. - Multi Occupancy Residential Building. This type of building contains multiple residential addresses. - Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation). - Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation). - Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.  Buildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc.")
    building_group_address_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The building group type can be:  - Residential Building Group. This type of building group contains buildings with residential addresses only. - Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only. - Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.  Building groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.")
    building_group_id: StrictStr = Field(description="Building Group ID")
    building_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Building ID")
    building_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Describes the type of building, e.g. detached, semi-detached, bungalow.")
    building_use: StrictStr = Field(description="Can be one of:  - `R` Residential  - `C` Commercial - `B` Both  - `U` Unknown")
    ded_id: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Unique Identifier for Electoral Divisions 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.")
    ecad_id: Optional[Annotated[str, Field(min_length=1, strict=True, max_length=10)]] = Field(default=None, description="Unique 10 digit ECAD ID")
    gaeltacht: StrictBool = Field(description="Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.  Returns `true` if address is in a Gaeltacht area and `false` if not.")
    gaeltacht_id: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Unique Identifier for the 7 Gaeltacht areas 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.")
    holiday_home: StrictStr = Field(description="A Yes/No field, indicating whether or not the building is a holiday home.")
    local_authority: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Name of local authority")
    nace_category: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Name of the NACE Category")
    nace_code: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The NACE Code for the Category.")
    nua: StrictBool = Field(description="NUA means \"non-unique address\".  The NUA field contains `true` when the address is a non-unique address, and `false` when it is a unique address.  Ireland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.  The typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.  N.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode.")
    org_vacant: StrictStr = Field(description="A Yes/No field, indicating whether the organisation is vacant.")
    organisation_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Organisation ID")
    post_county_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Post County ID")
    post_town: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:  \"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience.\"")
    post_town_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Post Town ID")
    postaim_presort_152: Annotated[str, Field(min_length=0, strict=True)] = Field(description="An Post sorting information.")
    postaim_presort_61: Annotated[str, Field(min_length=0, strict=True)] = Field(description="An Post sorting information.")
    primary_locality_address_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The locality type can be:   - Rural Locality. This is generally a townland.   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.   - Shopping District. Shopping Centre.   - Housing Estate. Residential Housing Estate.   - Village. Based on Census 2011 population < 1,500.   - Town. Based on Census 2011 population > 1,500.   - Urban Area. Wholly within a village/town/city e.g. Rathmines.   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.  Where the locality is also the post town, the type can be:   - Village. Based on Census 2011 population < 1,500   - Town. Based on Census 2011 population > 1,500   - Postal District. Dublin 1 to 24   - City. Dublin, Cork, Limerick, Galway or Waterford")
    primary_locality_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Primary Locality ID")
    primary_thoroughfare_id: Annotated[str, Field(min_length=1, strict=True, max_length=10)] = Field(description="Primary Thoroughfare ID")
    publicity_post_zone: Annotated[str, Field(min_length=0, strict=True)] = Field(description="An Post publicity post zone information.")
    secondary_locality_address_type: Annotated[str, Field(min_length=0, strict=True)] = Field(description="The locality type can be:   - Rural Locality. This is generally a townland.   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.   - Shopping District. Shopping Centre.   - Housing Estate. Residential Housing Estate.   - Village. Based on Census 2011 population < 1,500.   - Town. Based on Census 2011 population > 1,500.   - Urban Area. Wholly within a village/town/city e.g. Rathmines.   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.  Where the locality is also the post town, the type can be:   - Village. Based on Census 2011 population < 1,500   - Town. Based on Census 2011 population > 1,500   - Postal District. Dublin 1 to 24   - City. Dublin, Cork, Limerick, Galway or Waterford")
    secondary_locality_id: StrictStr = Field(description="Secondary Locality ID")
    secondary_thoroughfare_id: StrictStr = Field(description="Secondary Thoroughfare ID")
    small_area_id: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Unique Identifier for the Small Area 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.")
    townland_id: Annotated[str, Field(min_length=0, strict=True)] = Field(description="Unique Identifier for townland 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.")
    under_construction: StrictStr = Field(description="A Yes/No field, indicating whether or not the building is under construction.")
    vacant: StrictStr = Field(description="A Yes/No field, indicating whether the building is vacant.")
    __properties: ClassVar[List[str]] = ["address_reference", "building_group", "building_name", "building_number", "country", "country_iso", "country_iso_2", "dataset", "department", "eircode", "id", "language", "latitude", "line_1", "line_2", "line_3", "line_4", "line_5", "line_6", "line_7", "line_8", "line_9", "longitude", "organisation", "post_county", "primary_locality", "primary_thoroughfare", "secondary_locality", "secondary_thoroughfare", "sub_building_name", "tertiary_locality", "address_point_id", "address_type", "building_address_type", "building_group_address_type", "building_group_id", "building_id", "building_type", "building_use", "ded_id", "ecad_id", "gaeltacht", "gaeltacht_id", "holiday_home", "local_authority", "nace_category", "nace_code", "nua", "org_vacant", "organisation_id", "post_county_id", "post_town", "post_town_id", "postaim_presort_152", "postaim_presort_61", "primary_locality_address_type", "primary_locality_id", "primary_thoroughfare_id", "publicity_post_zone", "secondary_locality_address_type", "secondary_locality_id", "secondary_thoroughfare_id", "small_area_id", "townland_id", "under_construction", "vacant"]

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

    @field_validator('dataset')
    def dataset_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['ecad']):
            raise ValueError("must be one of enum values ('ecad')")
        return value

    @field_validator('language')
    def language_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['en', 'ga']):
            raise ValueError("must be one of enum values ('en', 'ga')")
        return value

    @field_validator('building_use')
    def building_use_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['R', 'C', 'B', 'U']):
            raise ValueError("must be one of enum values ('R', 'C', 'B', 'U')")
        return value

    @field_validator('holiday_home')
    def holiday_home_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['N', 'Y', '']):
            raise ValueError("must be one of enum values ('N', 'Y', '')")
        return value

    @field_validator('org_vacant')
    def org_vacant_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Y', 'N', '']):
            raise ValueError("must be one of enum values ('Y', 'N', '')")
        return value

    @field_validator('under_construction')
    def under_construction_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['N', 'Y', '']):
            raise ValueError("must be one of enum values ('N', 'Y', '')")
        return value

    @field_validator('vacant')
    def vacant_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Y', 'N', '']):
            raise ValueError("must be one of enum values ('Y', 'N', '')")
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
        """Create an instance of EcadAddress from a JSON string"""
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
        """Create an instance of EcadAddress from a dict"""
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
            "tertiary_locality": obj.get("tertiary_locality"),
            "address_point_id": obj.get("address_point_id"),
            "address_type": obj.get("address_type"),
            "building_address_type": obj.get("building_address_type"),
            "building_group_address_type": obj.get("building_group_address_type"),
            "building_group_id": obj.get("building_group_id"),
            "building_id": obj.get("building_id"),
            "building_type": obj.get("building_type"),
            "building_use": obj.get("building_use"),
            "ded_id": obj.get("ded_id"),
            "ecad_id": obj.get("ecad_id"),
            "gaeltacht": obj.get("gaeltacht"),
            "gaeltacht_id": obj.get("gaeltacht_id"),
            "holiday_home": obj.get("holiday_home"),
            "local_authority": obj.get("local_authority"),
            "nace_category": obj.get("nace_category"),
            "nace_code": obj.get("nace_code"),
            "nua": obj.get("nua"),
            "org_vacant": obj.get("org_vacant"),
            "organisation_id": obj.get("organisation_id"),
            "post_county_id": obj.get("post_county_id"),
            "post_town": obj.get("post_town"),
            "post_town_id": obj.get("post_town_id"),
            "postaim_presort_152": obj.get("postaim_presort_152"),
            "postaim_presort_61": obj.get("postaim_presort_61"),
            "primary_locality_address_type": obj.get("primary_locality_address_type"),
            "primary_locality_id": obj.get("primary_locality_id"),
            "primary_thoroughfare_id": obj.get("primary_thoroughfare_id"),
            "publicity_post_zone": obj.get("publicity_post_zone"),
            "secondary_locality_address_type": obj.get("secondary_locality_address_type"),
            "secondary_locality_id": obj.get("secondary_locality_id"),
            "secondary_thoroughfare_id": obj.get("secondary_thoroughfare_id"),
            "small_area_id": obj.get("small_area_id"),
            "townland_id": obj.get("townland_id"),
            "under_construction": obj.get("under_construction"),
            "vacant": obj.get("vacant")
        })
        return _obj


