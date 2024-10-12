# ArrayOfAddressDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[AddressDTO]**](AddressDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_address_dto import ArrayOfAddressDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfAddressDTO from a JSON string
array_of_address_dto_instance = ArrayOfAddressDTO.from_json(json)
# print the JSON string representation of the object
print(ArrayOfAddressDTO.to_json())

# convert the object into a dict
array_of_address_dto_dict = array_of_address_dto_instance.to_dict()
# create an instance of ArrayOfAddressDTO from a dict
array_of_address_dto_from_dict = ArrayOfAddressDTO.from_dict(array_of_address_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


