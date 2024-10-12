# OBPostalAddress6

Information that locates and identifies a specific address, as defined by postal services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line** | **List[str]** |  | [optional] 
**address_type** | [**OBAddressTypeCode**](OBAddressTypeCode.md) |  | [optional] 
**building_number** | **str** | Number that identifies the position of a building on a street. | [optional] 
**country** | **str** | Nation with its own government. | [optional] 
**country_sub_division** | **str** | Identifies a subdivision of a country such as state, region, county. | [optional] 
**department** | **str** | Identification of a division of a large organisation or building. | [optional] 
**post_code** | **str** | Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail. | [optional] 
**street_name** | **str** | Name of a street or thoroughfare. | [optional] 
**sub_department** | **str** | Identification of a sub-division of a large organisation or building. | [optional] 
**town_name** | **str** | Name of a built-up area, with defined boundaries, and a local government. | [optional] 

## Example

```python
from openapi_client.models.ob_postal_address6 import OBPostalAddress6

# TODO update the JSON string below
json = "{}"
# create an instance of OBPostalAddress6 from a JSON string
ob_postal_address6_instance = OBPostalAddress6.from_json(json)
# print the JSON string representation of the object
print(OBPostalAddress6.to_json())

# convert the object into a dict
ob_postal_address6_dict = ob_postal_address6_instance.to_dict()
# create an instance of OBPostalAddress6 from a dict
ob_postal_address6_from_dict = OBPostalAddress6.from_dict(ob_postal_address6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


