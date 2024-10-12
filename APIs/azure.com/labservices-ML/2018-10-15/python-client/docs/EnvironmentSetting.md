# EnvironmentSetting

Represents settings of an environment, from which environment instances would be created

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentSettingProperties**](EnvironmentSettingProperties.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.environment_setting import EnvironmentSetting

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSetting from a JSON string
environment_setting_instance = EnvironmentSetting.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSetting.to_json())

# convert the object into a dict
environment_setting_dict = environment_setting_instance.to_dict()
# create an instance of EnvironmentSetting from a dict
environment_setting_from_dict = EnvironmentSetting.from_dict(environment_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


