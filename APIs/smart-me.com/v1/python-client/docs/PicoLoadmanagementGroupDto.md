# PicoLoadmanagementGroupDto

DTO for the pico loadmanagement group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the loadmanagement group | [optional] 
**max_current** | **float** | The max current of this loadmanagement group | [optional] 
**name** | **str** | The name of the station | [optional] 
**number_of_stations** | **int** | The number of assigned stations | [optional] 

## Example

```python
from openapi_client.models.pico_loadmanagement_group_dto import PicoLoadmanagementGroupDto

# TODO update the JSON string below
json = "{}"
# create an instance of PicoLoadmanagementGroupDto from a JSON string
pico_loadmanagement_group_dto_instance = PicoLoadmanagementGroupDto.from_json(json)
# print the JSON string representation of the object
print(PicoLoadmanagementGroupDto.to_json())

# convert the object into a dict
pico_loadmanagement_group_dto_dict = pico_loadmanagement_group_dto_instance.to_dict()
# create an instance of PicoLoadmanagementGroupDto from a dict
pico_loadmanagement_group_dto_from_dict = PicoLoadmanagementGroupDto.from_dict(pico_loadmanagement_group_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


