# AddressDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_in_one_line** | **str** |  | [optional] 
**address_line1** | **str** |  | [optional] 
**address_line2** | **str** |  | [optional] 
**address_line3** | **str** |  | [optional] 
**address_line4** | **str** |  | [optional] 
**address_line5** | **str** |  | [optional] 
**city_town** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**fax_number** | **str** |  | [optional] 
**line** | [**ArrayOfAddressLineDTO**](ArrayOfAddressLineDTO.md) |  | [optional] 
**postcode** | **str** |  | [optional] 
**region_state** | **str** |  | [optional] 
**telephone_number** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_code** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.address_dto import AddressDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AddressDTO from a JSON string
address_dto_instance = AddressDTO.from_json(json)
# print the JSON string representation of the object
print(AddressDTO.to_json())

# convert the object into a dict
address_dto_dict = address_dto_instance.to_dict()
# create an instance of AddressDTO from a dict
address_dto_from_dict = AddressDTO.from_dict(address_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


