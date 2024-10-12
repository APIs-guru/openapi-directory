# SettingsSectionDescription

ServiceFabric section settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of settings section | 
**parameters** | [**List[SettingsParameterDescription]**](SettingsParameterDescription.md) | Collection of settings in the section, each setting is a tuple consisting of setting name and value | 

## Example

```python
from openapi_client.models.settings_section_description import SettingsSectionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SettingsSectionDescription from a JSON string
settings_section_description_instance = SettingsSectionDescription.from_json(json)
# print the JSON string representation of the object
print(SettingsSectionDescription.to_json())

# convert the object into a dict
settings_section_description_dict = settings_section_description_instance.to_dict()
# create an instance of SettingsSectionDescription from a dict
settings_section_description_from_dict = SettingsSectionDescription.from_dict(settings_section_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


