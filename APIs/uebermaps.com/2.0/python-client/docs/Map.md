# Map


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**MapCounts**](MapCounts.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**map_settings** | [**MapSettings**](MapSettings.md) |  | [optional] 
**owner_id** | **int** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**visibility** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.map import Map

# TODO update the JSON string below
json = "{}"
# create an instance of Map from a JSON string
map_instance = Map.from_json(json)
# print the JSON string representation of the object
print(Map.to_json())

# convert the object into a dict
map_dict = map_instance.to_dict()
# create an instance of Map from a dict
map_from_dict = Map.from_dict(map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


