# AutoProvisioningSettingProperties

describes properties of an auto provisioning setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_provision** | **str** | Describes what kind of security agent provisioning action to take | 

## Example

```python
from openapi_client.models.auto_provisioning_setting_properties import AutoProvisioningSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningSettingProperties from a JSON string
auto_provisioning_setting_properties_instance = AutoProvisioningSettingProperties.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningSettingProperties.to_json())

# convert the object into a dict
auto_provisioning_setting_properties_dict = auto_provisioning_setting_properties_instance.to_dict()
# create an instance of AutoProvisioningSettingProperties from a dict
auto_provisioning_setting_properties_from_dict = AutoProvisioningSettingProperties.from_dict(auto_provisioning_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


