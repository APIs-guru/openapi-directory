# AutoProvisioningSetting

Auto provisioning setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AutoProvisioningSettingProperties**](AutoProvisioningSettingProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.auto_provisioning_setting import AutoProvisioningSetting

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningSetting from a JSON string
auto_provisioning_setting_instance = AutoProvisioningSetting.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningSetting.to_json())

# convert the object into a dict
auto_provisioning_setting_dict = auto_provisioning_setting_instance.to_dict()
# create an instance of AutoProvisioningSetting from a dict
auto_provisioning_setting_from_dict = AutoProvisioningSetting.from_dict(auto_provisioning_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


