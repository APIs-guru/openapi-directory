# HouseNumberDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The lat / long coordinate | [optional] 
**number** | **str** | the house number value | [optional] 

## Example

```python
from openapi_client.models.house_number_dto import HouseNumberDto

# TODO update the JSON string below
json = "{}"
# create an instance of HouseNumberDto from a JSON string
house_number_dto_instance = HouseNumberDto.from_json(json)
# print the JSON string representation of the object
print(HouseNumberDto.to_json())

# convert the object into a dict
house_number_dto_dict = house_number_dto_instance.to_dict()
# create an instance of HouseNumberDto from a dict
house_number_dto_from_dict = HouseNumberDto.from_dict(house_number_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


