# AddressLineDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.address_line_dto import AddressLineDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AddressLineDTO from a JSON string
address_line_dto_instance = AddressLineDTO.from_json(json)
# print the JSON string representation of the object
print(AddressLineDTO.to_json())

# convert the object into a dict
address_line_dto_dict = address_line_dto_instance.to_dict()
# create an instance of AddressLineDTO from a dict
address_line_dto_from_dict = AddressLineDTO.from_dict(address_line_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


