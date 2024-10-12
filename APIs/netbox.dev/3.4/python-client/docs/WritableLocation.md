# WritableLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**rack_count** | **int** |  | [optional] [readonly] 
**site** | **int** |  | 
**slug** | **str** |  | 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_location import WritableLocation

# TODO update the JSON string below
json = "{}"
# create an instance of WritableLocation from a JSON string
writable_location_instance = WritableLocation.from_json(json)
# print the JSON string representation of the object
print(WritableLocation.to_json())

# convert the object into a dict
writable_location_dict = writable_location_instance.to_dict()
# create an instance of WritableLocation from a dict
writable_location_from_dict = WritableLocation.from_dict(writable_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


