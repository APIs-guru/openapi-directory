# MapSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_access** | **str** |  | [optional] 
**respotting_to_this_map** | **bool** |  | [optional] 
**visitor_access** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.map_settings import MapSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MapSettings from a JSON string
map_settings_instance = MapSettings.from_json(json)
# print the JSON string representation of the object
print(MapSettings.to_json())

# convert the object into a dict
map_settings_dict = map_settings_instance.to_dict()
# create an instance of MapSettings from a dict
map_settings_from_dict = MapSettings.from_dict(map_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


