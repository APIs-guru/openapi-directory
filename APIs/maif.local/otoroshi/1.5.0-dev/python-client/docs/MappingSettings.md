# MappingSettings

Settings to change fields of a JWT token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**map** | **Dict[str, str]** | Fields to rename | 
**remove** | **List[str]** | Fields to remove | 
**values** | **Dict[str, str]** | Fields to set | 

## Example

```python
from openapi_client.models.mapping_settings import MappingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MappingSettings from a JSON string
mapping_settings_instance = MappingSettings.from_json(json)
# print the JSON string representation of the object
print(MappingSettings.to_json())

# convert the object into a dict
mapping_settings_dict = mapping_settings_instance.to_dict()
# create an instance of MappingSettings from a dict
mapping_settings_from_dict = MappingSettings.from_dict(mapping_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


