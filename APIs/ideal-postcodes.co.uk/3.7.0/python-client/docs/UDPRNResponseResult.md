# UDPRNResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrative_county** | **str** | The current administrative county to which the postcode has been assigned.  A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data  source: ONS | 
**building_name** | **str** | Name of residential or commercial premise.   Examples:   - The Manor   - 1-2   - A   - 12A   - K   - Victoria House | 
**building_number** | **str** | Number to identify premise on a thoroughfare or dependant thoroughfare. | 
**country** | **str** |  | 
**country_iso** | **str** |  | 
**country_iso_2** | **str** |  | 
**county** | **str** | Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present. | 
**county_code** | **str** | Short code representing the county or province. May be empty (&#x60;\&quot;\&quot;&#x60;) | 
**dataset** | **str** |  | 
**delivery_point_suffix** | **str** | A unique Royal Mail 2-character code (the first numeric &amp; the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always &#39;1A&#39; as each Large User has its own Postcode. | 
**department_name** | **str** | Used to supplment Organisation Name to identify a deparment within the organisation. | 
**dependant_locality** | **str** | When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three. | 
**dependant_thoroughfare** | **str** | Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point. | 
**district** | **str** | The current district/unitary authority to which the postcode has been assigned. | 
**double_dependant_locality** | **str** | Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality. | 
**eastings** | [**Eastings**](Eastings.md) |  | 
**id** | **str** | Global unique internally generated identifier for an address | 
**language** | **str** |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**line_1** | **str** | First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty. | 
**line_2** | **str** | Second Address Line. Often contains thoroughfare and locality information. May be empty | 
**line_3** | **str** | Third address line. May be empty. | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**northings** | [**Northings**](Northings.md) |  | 
**organisation_name** | **str** | Used to supplment Organisation Name to identify a deparment within the organisation | 
**po_box** | **str** | When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users. | 
**post_town** | **str** | A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present. | 
**postal_county** | **str** | Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty. | 
**postcode** | **str** | Correctly formatted postcode. Capitalised and spaced. | 
**postcode_inward** | **str** | The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.  The number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector. | 
**postcode_outward** | **str** | The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’. | 
**postcode_type** | [**PafPostcodeType**](PafPostcodeType.md) |  | 
**premise** | **str** | A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail&#39;s and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data. | 
**su_organisation_indicator** | **str** | Small User Organisation Indicator can have the values &#39;Y&#39; or space. A value of &#39;Y&#39; indicates that a Small User Organisation is present at this address. | 
**sub_building_name** | **str** | When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B | 
**thoroughfare** | **str** | Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road. | 
**traditional_county** | **str** | Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty. | 
**udprn** | **int** | UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.  Up to 8-digit numeric code.  A new UDPRN is automatically assigned to each new Delivery Point added to PAF. | 
**umprn** | [**PafUmprn**](PafUmprn.md) |  | 
**uprn** | **str** | UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.  Up to 12 digits in length.  Multiple Residence premises currently share the same UPRN as the parent premise.  May not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey&#39;s AddressBase datasets. Returns empty string \&quot;\&quot; in these instances.  Although UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer &#x60;Number.MAX_SAFE_INTEGER&#x60; in most browsers causing this datapoint to be corrupted.  Take special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values. | 
**ward** | **str** | The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses. | 

## Example

```python
from openapi_client.models.udprn_response_result import UDPRNResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of UDPRNResponseResult from a JSON string
udprn_response_result_instance = UDPRNResponseResult.from_json(json)
# print the JSON string representation of the object
print(UDPRNResponseResult.to_json())

# convert the object into a dict
udprn_response_result_dict = udprn_response_result_instance.to_dict()
# create an instance of UDPRNResponseResult from a dict
udprn_response_result_from_dict = UDPRNResponseResult.from_dict(udprn_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


