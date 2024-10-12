# ArrayOfAddressLineDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line_dto** | [**List[AddressLineDTO]**](AddressLineDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_address_line_dto import ArrayOfAddressLineDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfAddressLineDTO from a JSON string
array_of_address_line_dto_instance = ArrayOfAddressLineDTO.from_json(json)
# print the JSON string representation of the object
print(ArrayOfAddressLineDTO.to_json())

# convert the object into a dict
array_of_address_line_dto_dict = array_of_address_line_dto_instance.to_dict()
# create an instance of ArrayOfAddressLineDTO from a dict
array_of_address_line_dto_from_dict = ArrayOfAddressLineDTO.from_dict(array_of_address_line_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


