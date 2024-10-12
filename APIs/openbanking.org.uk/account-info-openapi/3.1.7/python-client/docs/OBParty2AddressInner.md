# OBParty2AddressInner

Postal address of a party.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line** | **List[str]** |  | [optional] 
**address_type** | [**OBAddressTypeCode**](OBAddressTypeCode.md) |  | [optional] 
**building_number** | **str** | Number that identifies the position of a building on a street. | [optional] 
**country** | **str** | Nation with its own government, occupying a particular territory. | 
**country_sub_division** | **str** | Identifies a subdivision of a country eg, state, region, county. | [optional] 
**post_code** | **str** | Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail. | [optional] 
**street_name** | **str** | Name of a street or thoroughfare. | [optional] 
**town_name** | **str** | Name of a built-up area, with defined boundaries, and a local government. | [optional] 

## Example

```python
from openapi_client.models.ob_party2_address_inner import OBParty2AddressInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBParty2AddressInner from a JSON string
ob_party2_address_inner_instance = OBParty2AddressInner.from_json(json)
# print the JSON string representation of the object
print(OBParty2AddressInner.to_json())

# convert the object into a dict
ob_party2_address_inner_dict = ob_party2_address_inner_instance.to_dict()
# create an instance of OBParty2AddressInner from a dict
ob_party2_address_inner_from_dict = OBParty2AddressInner.from_dict(ob_party2_address_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


