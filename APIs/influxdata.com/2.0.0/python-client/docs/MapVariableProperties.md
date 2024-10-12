# MapVariableProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**values** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.map_variable_properties import MapVariableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MapVariableProperties from a JSON string
map_variable_properties_instance = MapVariableProperties.from_json(json)
# print the JSON string representation of the object
print(MapVariableProperties.to_json())

# convert the object into a dict
map_variable_properties_dict = map_variable_properties_instance.to_dict()
# create an instance of MapVariableProperties from a dict
map_variable_properties_from_dict = MapVariableProperties.from_dict(map_variable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


