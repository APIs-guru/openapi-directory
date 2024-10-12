# AddressBaseCore

Represents a GB address in Ordnance Survey's AddressBase Core dataset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrative_county** | **str** | The current administrative county to which the postcode has been assigned.  A Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data  source: ONS | 
**building_name** | **str** | The building name is a description applied to a single address or a group of addresses. | 
**building_number** | **str** | The building number is a number or range of numbers given to a single address or a group of addresses. | 
**change_code** | **str** | This enumeration is used in association with the attribute “CHANGE_CODE”. This enumeration identifies the type of change that has been made to a feature. The change type must be set when a feature is inserted, updated or deleted. Please see section 3 for more information. Example I &#x3D; Insert, U &#x3D; Update, D &#x3D; Delete | 
**classification_code** | **str** | A code that describes the classification of the address record to a maximum of a secondary level. | 
**country** | **str** |   Full country names (ISO 3166)  | 
**country_iso** | **str** |   3 letter country code (ISO 3166-1)  | 
**county** | **str** | Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present. | 
**dataset** | **str** | Indicates the provenance of an address | 
**delivery_point_suffix** | **str** | A two-character code uniquely identifying an individual delivery point within a postcode, assigned by Royal Mail. | 
**district** | **str** | The current district/unitary authority to which the postcode has been assigned. | 
**eastings** | **float** | A value in metres defining the x location in accordance with the British National Grid. | 
**gss_code** | **str** | The Office for National Statistics Governmental Statistical Service (GSS) code representing the contributing Local Authority. | 
**id** | **str** | Global unique internally generated identifier for an address | 
**island** | **str** | Third level of geographic area name to record island names where appropriate. | 
**language** | [**Language**](Language.md) |  | 
**last_update_date** | **date** | The latest date on which any of the attributes on this record were last changed. | 
**latitude** | **float** | A value in metres defining the y location in accordance with the British National Grid. | 
**line_1** | **str** | First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty. | 
**line_2** | **str** | Second Address Line. Often contains thoroughfare and locality information. May be empty | 
**line_3** | **str** | Third address line. May be empty. | 
**locality** | **str** | A locality defines an area or geographical identifier within a town, village or hamlet. Locality represents the lower level geographical area. The locality field should be used in conjunction with the town name and street description fields to uniquely identify geographic area where there may be more than one within an administrative area. | 
**longitude** | **float** | A value defining the Longitude location in accordance with the ETRS89 coordinate reference system. | 
**northings** | **float** | A value in metres defining the y location in accordance with the British National Grid. | 
**organisation** | **str** | The organisation name is the business name given, when appropriate, to an address record. | 
**parent_uprn** | **str** | UPRN of the parent Record if a parent-child relationship exists. | 
**po_box** | **str** | Text concatenation of &#39;PO BOX&#39; and the Post Office Box (PO Box) number or &#39;BFPO&#39; and the British Forces Post Office number. | 
**post_town** | **str** | The town or city in which the Royal Mail sorting office is located which services this address record.  Condition: POST_TOWN is not populated if this is the same as TOWN_NAME. | 
**postal_county** | **str** | Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty. | 
**postcode** | **str** | A postcode assigned by Royal Mail for the address record. | 
**premise** | **str** | A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail&#39;s and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data. | 
**rpc** | **float** | Representative Point Code describes the accuracy of the coordinate that has been allocated to the UPRN as indicated by the Local Authority and enhanced using large scale OS data. | 
**single_address_line** | **str** | A single attribute containing text concatenation of the address elements separated by a comma. | 
**street_name** | **str** | Street / Road name for the address record. | 
**sub_building** | **str** | The sub-building name and/or number for the address record. | 
**toid** | **str** | The Topographic Identifier taken from OS MasterMap Topography Layer. This TOID is assigned to the UPRN by performing a spatial intersection between the two identifiers. It consists of the letters &#39;osgb&#39; and is followed by up to sixteen digits. | 
**town_name** | **str** | Geographical town name assigned by the Local Authority. Please note this can be different from the Post Town value assigned by Royal Mail. | 
**traditional_county** | **str** | Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty. | 
**udprn** | **float** | Royal Mail&#39;s Unique Delivery Point Reference Number (UDPRN). | 
**uprn** | **str** | Unique Property Reference Number (UPRN) assigned by the LLPG Custodian or Ordnance Survey. | 
**usrn** | **float** | Unique Street Reference Number assigned by the Street Name and Numbering Custodian OR  Ordnance Survey depending on the address record. | 
**ward** | **str** | The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses. | 

## Example

```python
from openapi_client.models.address_base_core import AddressBaseCore

# TODO update the JSON string below
json = "{}"
# create an instance of AddressBaseCore from a JSON string
address_base_core_instance = AddressBaseCore.from_json(json)
# print the JSON string representation of the object
print(AddressBaseCore.to_json())

# convert the object into a dict
address_base_core_dict = address_base_core_instance.to_dict()
# create an instance of AddressBaseCore from a dict
address_base_core_from_dict = AddressBaseCore.from_dict(address_base_core_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


