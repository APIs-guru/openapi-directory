# DeviceSecurityGroupProperties

describes properties of a security group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist_rules** | [**List[AllowlistCustomAlertRule]**](AllowlistCustomAlertRule.md) | The allow-list custom alert rules. | [optional] 
**denylist_rules** | [**List[DenylistCustomAlertRule]**](DenylistCustomAlertRule.md) | The deny-list custom alert rules. | [optional] 
**threshold_rules** | [**List[ThresholdCustomAlertRule]**](ThresholdCustomAlertRule.md) | The list of custom alert threshold rules. | [optional] 
**time_window_rules** | [**List[TimeWindowCustomAlertRule]**](TimeWindowCustomAlertRule.md) | The list of custom alert time-window rules. | [optional] 

## Example

```python
from openapi_client.models.device_security_group_properties import DeviceSecurityGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSecurityGroupProperties from a JSON string
device_security_group_properties_instance = DeviceSecurityGroupProperties.from_json(json)
# print the JSON string representation of the object
print(DeviceSecurityGroupProperties.to_json())

# convert the object into a dict
device_security_group_properties_dict = device_security_group_properties_instance.to_dict()
# create an instance of DeviceSecurityGroupProperties from a dict
device_security_group_properties_from_dict = DeviceSecurityGroupProperties.from_dict(device_security_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


