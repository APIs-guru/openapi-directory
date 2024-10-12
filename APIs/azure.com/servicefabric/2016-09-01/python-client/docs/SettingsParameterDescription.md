# SettingsParameterDescription

ServiceFabric settings under sections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of settings property | 
**value** | **str** | The value of the property | 

## Example

```python
from openapi_client.models.settings_parameter_description import SettingsParameterDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SettingsParameterDescription from a JSON string
settings_parameter_description_instance = SettingsParameterDescription.from_json(json)
# print the JSON string representation of the object
print(SettingsParameterDescription.to_json())

# convert the object into a dict
settings_parameter_description_dict = settings_parameter_description_instance.to_dict()
# create an instance of SettingsParameterDescription from a dict
settings_parameter_description_from_dict = SettingsParameterDescription.from_dict(settings_parameter_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


