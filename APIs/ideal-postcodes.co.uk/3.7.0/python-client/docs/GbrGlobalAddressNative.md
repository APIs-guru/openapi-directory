# GbrGlobalAddressNative

The native representation of a non-UK address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_reference** | **str** | The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider. | 
**building_group** | **str** | A building group is a collection of buildings with a collective name, located on or near the same thoroughfare. | 
**building_name** | **str** | The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group. | 
**building_number** | **str** | A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it. A complex building number may be one of the following:   - Dual. Two number separated by &#39;/&#39; e.g. 63/64 &#x3D; 63, 64   - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore &#39;_&#39; e.g. &#x60;1_5&#x60; &#x3D; 1,3,5 and &#x60;2_6&#x60; &#x3D; 2,4,6    - Range. A range of consecutive numbers with lower and upper bound separated by a dash &#39;-&#39; e.g. &#x60;63-66&#x60; &#x3D; 63, 64, 56, 66 The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality. | 
**country** | [**UspsCountry**](UspsCountry.md) |  | 
**country_iso** | [**UspsCountryIso**](UspsCountryIso.md) |  | 
**country_iso_2** | [**UspsCountryIso2**](UspsCountryIso2.md) |  | 
**dataset** | [**UspsDataset**](UspsDataset.md) |  | 
**department** | **str** | The department or division within an organisation. If the department element exists, then the organisation must also exist. | 
**eircode** | **str** | The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. &#x60;A65 F4E2&#x60;.  The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address. | 
**id** | **str** | Global unique internally generated identifier for an address | 
**language** | [**UspsLanguage**](UspsLanguage.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**line_1** | **str** | The primary delivery line (usually the street address) of the address. | 
**line_2** | **str** | Secondary delivery line of the address. Typically populated if the first line is the firm or building name. | 
**line_3** | **str** | Address Line 3 | 
**line_4** | **str** | Address Line 4 | 
**line_5** | **str** | Address Line 5 | 
**line_6** | **str** | Address Line 6 | 
**line_7** | **str** | Address Line 7 | 
**line_8** | **str** | Address Line 8 | 
**line_9** | **str** | Address Line 9 | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**organisation** | **str** | Organisation name | 
**post_county** | **str** | One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County. | 
**primary_locality** | **str** | First locality elements which can refer to areas, districts, industrial estates, towns, etc.  The primary locality refers to the specific place the address is.  In urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name. | 
**primary_thoroughfare** | **str** | The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.  Addresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address. | 
**secondary_locality** | **str** | Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.  It is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.  Secondary localities are more likely to be required for rural addresses.  Second locality elements which can refer to areas, districts, industrial estates, towns, etc  The secondary locality helps identify where the primary locality is located. | 
**secondary_thoroughfare** | **str** | It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.  Secondary thoroughfare are generally used to assist locating a primary thoroughfare. | 
**sub_building_name** | **str** | The sub-building refers to an apartment, flat or unit within a building. | 
**tertiary_locality** | **str** | Also known as the Post Town.  The name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts \&quot;Dublin 1\&quot; to \&quot;Dublin 24\&quot;.  The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:  \&quot;A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience.\&quot; | 
**address_point_id** | **str** | Address Point ID | 
**address_type** | **str** | Addresses points can assume one of the following values:  - Residential Address Point. This type of address point has one residential addresses associated with it. - Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it. - Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.  Buildings can contain multiple address points of type Residential and/or Non-Residential. | 
**building_address_type** | **str** | The building type can assume one of the following values:  - Single Occupancy Residential Building. This type of building contains one residential address. - Multi Occupancy Residential Building. This type of building contains multiple residential addresses. - Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation). - Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation). - Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.  Buildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc. | 
**building_group_address_type** | **str** | The building group type can be:  - Residential Building Group. This type of building group contains buildings with residential addresses only. - Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only. - Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.  Building groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc. | 
**building_group_id** | **str** | Building Group ID | 
**building_id** | **str** | Building ID | 
**building_type** | **str** | Describes the type of building, e.g. detached, semi-detached, bungalow. | 
**building_use** | **str** | Can be one of:  - &#x60;R&#x60; Residential  - &#x60;C&#x60; Commercial - &#x60;B&#x60; Both  - &#x60;U&#x60; Unknown | 
**ded_id** | **str** | Unique Identifier for Electoral Divisions 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change. | 
**ecad_id** | **str** | Unique 10 digit ECAD ID | [optional] 
**gaeltacht** | **bool** | Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.  Returns &#x60;true&#x60; if address is in a Gaeltacht area and &#x60;false&#x60; if not. | 
**gaeltacht_id** | **str** | Unique Identifier for the 7 Gaeltacht areas 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change. | 
**holiday_home** | **str** | A Yes/No field, indicating whether or not the building is a holiday home. | 
**local_authority** | **str** | Name of local authority | 
**nace_category** | **str** | Name of the NACE Category | 
**nace_code** | **str** | The NACE Code for the Category. | 
**nua** | **bool** | NUA means \&quot;non-unique address\&quot;.  The NUA field contains &#x60;true&#x60; when the address is a non-unique address, and &#x60;false&#x60; when it is a unique address.  Ireland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.  The typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.  N.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode. | 
**org_vacant** | **str** | A Yes/No field, indicating whether the organisation is vacant. | 
**organisation_id** | **str** | Organisation ID | 
**post_county_id** | **str** | Post County ID | 
**post_town** | **str** | The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:  \&quot;A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience.\&quot; | 
**post_town_id** | **str** | Post Town ID | 
**postaim_presort_152** | **str** | An Post sorting information. | 
**postaim_presort_61** | **str** | An Post sorting information. | 
**primary_locality_address_type** | **str** | The locality type can be:   - Rural Locality. This is generally a townland.   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.   - Shopping District. Shopping Centre.   - Housing Estate. Residential Housing Estate.   - Village. Based on Census 2011 population &lt; 1,500.   - Town. Based on Census 2011 population &gt; 1,500.   - Urban Area. Wholly within a village/town/city e.g. Rathmines.   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.  Where the locality is also the post town, the type can be:   - Village. Based on Census 2011 population &lt; 1,500   - Town. Based on Census 2011 population &gt; 1,500   - Postal District. Dublin 1 to 24   - City. Dublin, Cork, Limerick, Galway or Waterford | 
**primary_locality_id** | **str** | Primary Locality ID | 
**primary_thoroughfare_id** | **str** | Primary Thoroughfare ID | 
**publicity_post_zone** | **str** | An Post publicity post zone information. | 
**secondary_locality_address_type** | **str** | The locality type can be:   - Rural Locality. This is generally a townland.   - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.   - Shopping District. Shopping Centre.   - Housing Estate. Residential Housing Estate.   - Village. Based on Census 2011 population &lt; 1,500.   - Town. Based on Census 2011 population &gt; 1,500.   - Urban Area. Wholly within a village/town/city e.g. Rathmines.   - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.  Where the locality is also the post town, the type can be:   - Village. Based on Census 2011 population &lt; 1,500   - Town. Based on Census 2011 population &gt; 1,500   - Postal District. Dublin 1 to 24   - City. Dublin, Cork, Limerick, Galway or Waterford | 
**secondary_locality_id** | **str** | Secondary Locality ID | 
**secondary_thoroughfare_id** | **str** | Secondary Thoroughfare ID | 
**small_area_id** | **str** | Unique Identifier for the Small Area 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change. | 
**townland_id** | **str** | Unique Identifier for townland 2017 data.  Note that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change. | 
**under_construction** | **str** | A Yes/No field, indicating whether or not the building is under construction. | 
**vacant** | **str** | A Yes/No field, indicating whether the building is vacant. | 
**ecaf_id** | **str** | The unique identifier in the ECAF is the &#x60;ecaf_id&#x60;. This unique identifier allows each address in the ECAF to be uniquely identified. It can also be used as index once the data has been imported into a relational database. This is a numeric field that can store values from 0 to 2,147,483,647. It is represented as a number up to 10 digits long. All other fields in ECAF are alphanumeric. | 
**address_secondary_abbreviation** | **str** | A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field.  This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers. | 
**base_alternate_code** | [**BaseAlternateCode**](BaseAlternateCode.md) |  | 
**building_or_firm_name** | **str** | The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information. This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.” | 
**carrier_route_id** | **str** | A 4 character ID identifying the postal route for the address. The first character indicates the route type. Specifically: - \&quot;B\&quot; indicates PO Box - \&quot;H\&quot; indicates highway - \&quot;C\&quot; indicates city - \&quot;G\&quot; indicates general - \&quot;R\&quot; indicates rural | 
**carrier_route_rate_sortation** | **str** | Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed. | 
**city** | **str** | A valid city name for mailing purposes; appears in the last line of an address on a mail piece. | 
**city_abbreviation** | **str** | A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of \&quot;Y.\&quot; If the field is longer than 13 characters and the city/state mailing name indicator is \&quot;N,\&quot; the field will be blank. | 
**city_state_mailing_name_indicator** | **str** | Specifies whether or not the city state name can be used as a last line of address on a mail piece. - \&quot;Y &#x3D; City/state name is a USPS-approved mailing name.\&quot; - \&quot;N &#x3D; City/state name is not approved for mailing purposes.\&quot; | 
**city_state_name_facility_code** | [**CityStateNameFacilityCode**](CityStateNameFacilityCode.md) |  | 
**congressional_district_number** | [**CongressionalDistrictNumber**](CongressionalDistrictNumber.md) |  | 
**county** | **str** | The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank. | 
**county_number** | [**CountyNumber**](CountyNumber.md) |  | 
**finance_number** | [**FinanceNumber**](FinanceNumber.md) |  | 
**government_building_indicator** | [**GovernmentBuildingIndicator**](GovernmentBuildingIndicator.md) |  | 
**lacs_status_indicator** | [**LacsStatusIndicator**](LacsStatusIndicator.md) |  | 
**last_line** | **str** | Last line of the address comprising of city, state, zip code and zip+4 | 
**municipality_city_state_key** | **str** | Municipality City State Key. Currently blank. | 
**plus_4_code** | **str** | 4 digit ZIP add-on code. | 
**preferred_city** | **str** | Field that contains the default preferred or alternate preferred last-line name for a ZIP Code. | 
**preferred_last_line_city_state_key** | **str** | In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code. | 
**primary_number** | **str** | A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number. | 
**record_type_code** | [**RecordTypeCode**](RecordTypeCode.md) |  | 
**secondary_number** | **str** | Number of the sub unit, apartment, suite etc | 
**state** | **str** | Full name of a state, U.S. territory, or armed forces ZIP Code designation. | 
**state_abbreviation** | **str** | A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.” | 
**street_name** | **str** | The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT. | 
**street_post_directional_abbreviation** | **str** | A geographic direction that follows the street name. | 
**street_pre_directional_abbreviation** | **str** | A geographic direction that precedes the street name. | 
**street_suffix_abbreviation** | **str** | Code that is the standard USPS abbreviation for the trailing designator in a street address.  | 
**update_key_number** | **str** | Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA. | 
**urbanization_city_state_key** | **str** | An index to the City State file that provides the urbanization name for this delivery range. | 
**zip_classification_code** | [**ZipClassificationCode**](ZipClassificationCode.md) |  | 
**zip_code** | **str** | A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume.  | 
**zip_plus_4_code** | **str** | Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece. | 

## Example

```python
from openapi_client.models.gbr_global_address_native import GbrGlobalAddressNative

# TODO update the JSON string below
json = "{}"
# create an instance of GbrGlobalAddressNative from a JSON string
gbr_global_address_native_instance = GbrGlobalAddressNative.from_json(json)
# print the JSON string representation of the object
print(GbrGlobalAddressNative.to_json())

# convert the object into a dict
gbr_global_address_native_dict = gbr_global_address_native_instance.to_dict()
# create an instance of GbrGlobalAddressNative from a dict
gbr_global_address_native_from_dict = GbrGlobalAddressNative.from_dict(gbr_global_address_native_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


