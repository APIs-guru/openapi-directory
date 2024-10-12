# EircBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_reference** | **str** | The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider. | 
**building_group** | **str** | A building group is a collection of buildings with a collective name, located on or near the same thoroughfare. | 
**building_name** | **str** | The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group. | 
**building_number** | **str** | A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it. A complex building number may be one of the following:   - Dual. Two number separated by &#39;/&#39; e.g. 63/64 &#x3D; 63, 64   - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore &#39;_&#39; e.g. &#x60;1_5&#x60; &#x3D; 1,3,5 and &#x60;2_6&#x60; &#x3D; 2,4,6    - Range. A range of consecutive numbers with lower and upper bound separated by a dash &#39;-&#39; e.g. &#x60;63-66&#x60; &#x3D; 63, 64, 56, 66 The building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality. | 
**country** | **str** |   Full country names (ISO 3166)  | 
**country_iso** | **str** |   3 letter country code (ISO 3166-1)  | 
**country_iso_2** | **str** |  2 letter country code (ISO 3166-1)  | 
**dataset** | **str** | Source of address | 
**department** | **str** | The department or division within an organisation. If the department element exists, then the organisation must also exist. | 
**eircode** | **str** | The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. &#x60;A65 F4E2&#x60;.  The Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address. | 
**id** | **str** | Global unique internally generated identifier for an address | 
**language** | **str** | Language represented by 2 letter ISO Code (639-1)  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**line_1** | **str** | Address Line 1 | 
**line_2** | **str** | Address Line 2 | 
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

## Example

```python
from openapi_client.models.eirc_base import EircBase

# TODO update the JSON string below
json = "{}"
# create an instance of EircBase from a JSON string
eirc_base_instance = EircBase.from_json(json)
# print the JSON string representation of the object
print(EircBase.to_json())

# convert the object into a dict
eirc_base_dict = eirc_base_instance.to_dict()
# create an instance of EircBase from a dict
eirc_base_from_dict = EircBase.from_dict(eirc_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


