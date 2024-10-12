# MapEditable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**map_settings** | [**MapSettings**](MapSettings.md) |  | [optional] 
**picture** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**visibility** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.map_editable import MapEditable

# TODO update the JSON string below
json = "{}"
# create an instance of MapEditable from a JSON string
map_editable_instance = MapEditable.from_json(json)
# print the JSON string representation of the object
print(MapEditable.to_json())

# convert the object into a dict
map_editable_dict = map_editable_instance.to_dict()
# create an instance of MapEditable from a dict
map_editable_from_dict = MapEditable.from_dict(map_editable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


