# UsaGlobalAddressNative

The native representation of a non-US address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_reference** | **str** | The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider. | 
**building_group** | **str** | A building group is a collection of buildings with a collective name, located on or near the same thoroughfare. | 
**building_name** | **str** | Name of residential or commercial premise.   Examples:   - The Manor   - 1-2   - A   - 12A   - K   - Victoria House | 
**building_number** | **str** | Number to identify premise on a thoroughfare or dependant thoroughfare. | 
**country** | **str** |  | 
**country_iso** | **str** |  | 
**country_iso_2** | **str** |  | 
**dataset** | **str** |  | 
**department** | **str** | The department or division within an organisation. If the department element exists, then the organisation must also exist. | 
**eircode** | **str** | The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. &#x60;A65 F4E2&#x60;.  The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address. | 
**id** | **str** | Global unique internally generated identifier for an address | 
**language** | **str** |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**line_1** | **str** | First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty. | 
**line_2** | **str** | Second Address Line. Often contains thoroughfare and locality information. May be empty | 
**line_3** | **str** | Third address line. May be empty. | 
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
**sub_building_name** | **str** | When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B | 
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
**post_town** | **str** | A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present. | 
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
**administrative_county** | **str** | The current administrative county to which the postcode has been assigned.  A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data  source: ONS | 
**county** | **str** | Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present. | 
**county_code** | **str** | Short code representing the county or province. May be empty (&#x60;\&quot;\&quot;&#x60;) | 
**delivery_point_suffix** | **str** | A unique Royal Mail 2-character code (the first numeric &amp; the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always &#39;1A&#39; as each Large User has its own Postcode. | 
**department_name** | **str** | Used to supplment Organisation Name to identify a deparment within the organisation. | 
**dependant_locality** | **str** | When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three. | 
**dependant_thoroughfare** | **str** | Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point. | 
**district** | **str** | The current district/unitary authority to which the postcode has been assigned. | 
**double_dependant_locality** | **str** | Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality. | 
**eastings** | [**Eastings**](Eastings.md) |  | 
**northings** | [**Northings**](Northings.md) |  | 
**organisation_name** | **str** | Used to supplment Organisation Name to identify a deparment within the organisation | 
**po_box** | **str** | When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users. | 
**postal_county** | **str** | Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty. | 
**postcode** | **str** | Correctly formatted postcode. Capitalised and spaced. | 
**postcode_inward** | **str** | The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.  The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector. | 
**postcode_outward** | **str** | The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’. | 
**postcode_type** | **str** |  | 
**premise** | **str** | A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail&#39;s and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data. | 
**su_organisation_indicator** | **str** | Small User Organisation Indicator can have the values &#39;Y&#39; or space. A value of &#39;Y&#39; indicates that a Small User Organisation is present at this address. | 
**thoroughfare** | **str** | Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road. | 
**traditional_county** | **str** | Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty. | 
**udprn** | **int** | UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.  Up to 8-digit numeric code.  A new UDPRN is automatically assigned to each new Delivery Point added to PAF. | 
**umprn** | [**PafUmprn**](PafUmprn.md) |  | 
**uprn** | **str** | UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.  Up to 12 digits in length.  Multiple Residence premises currently share the same UPRN as the parent premise.  May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey&#39;s AddressBase datasets. Returns empty string \&quot;\&quot; in these instances.  Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer &#x60;Number.MAX_SAFE_INTEGER&#x60; in most browsers causing this datapoint to be corrupted.  Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values. | 
**ward** | **str** | The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses. | 
**native** | [**AddressBaseCore**](AddressBaseCore.md) |  | 

## Example

```python
from openapi_client.models.usa_global_address_native import UsaGlobalAddressNative

# TODO update the JSON string below
json = "{}"
# create an instance of UsaGlobalAddressNative from a JSON string
usa_global_address_native_instance = UsaGlobalAddressNative.from_json(json)
# print the JSON string representation of the object
print(UsaGlobalAddressNative.to_json())

# convert the object into a dict
usa_global_address_native_dict = usa_global_address_native_instance.to_dict()
# create an instance of UsaGlobalAddressNative from a dict
usa_global_address_native_from_dict = UsaGlobalAddressNative.from_dict(usa_global_address_native_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


