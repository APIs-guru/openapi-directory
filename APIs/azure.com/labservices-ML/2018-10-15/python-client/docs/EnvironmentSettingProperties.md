# EnvironmentSettingProperties

Properties of an environment setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_state** | **str** | Describes the user&#39;s progress in configuring their environment setting | [optional] 
**description** | **str** | Describes the environment and its resource settings | [optional] 
**last_changed** | **datetime** | Time when the template VM was last changed. | [optional] [readonly] 
**last_published** | **datetime** | Time when the template VM was last sent for publishing. | [optional] [readonly] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**publishing_state** | **str** | Describes the readiness of this environment setting | [optional] [readonly] 
**resource_settings** | [**ResourceSettings**](ResourceSettings.md) |  | 
**title** | **str** | Brief title describing the environment and its resource settings | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.environment_setting_properties import EnvironmentSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSettingProperties from a JSON string
environment_setting_properties_instance = EnvironmentSettingProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSettingProperties.to_json())

# convert the object into a dict
environment_setting_properties_dict = environment_setting_properties_instance.to_dict()
# create an instance of EnvironmentSettingProperties from a dict
environment_setting_properties_from_dict = EnvironmentSettingProperties.from_dict(environment_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


