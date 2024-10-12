# EnvironmentSettingPropertiesFragment

Properties of an environment setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_state** | **str** | Describes the user&#39;s progress in configuring their environment setting | [optional] 
**description** | **str** | Describes the environment and its resource settings | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**resource_settings** | [**ResourceSettingsFragment**](ResourceSettingsFragment.md) |  | [optional] 
**title** | **str** | Brief title describing the environment and its resource settings | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.environment_setting_properties_fragment import EnvironmentSettingPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSettingPropertiesFragment from a JSON string
environment_setting_properties_fragment_instance = EnvironmentSettingPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSettingPropertiesFragment.to_json())

# convert the object into a dict
environment_setting_properties_fragment_dict = environment_setting_properties_fragment_instance.to_dict()
# create an instance of EnvironmentSettingPropertiesFragment from a dict
environment_setting_properties_fragment_from_dict = EnvironmentSettingPropertiesFragment.from_dict(environment_setting_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


