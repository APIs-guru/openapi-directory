# DeviceManagementRule

Alerts from Device Management Rules configured by Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. The device ID. | [optional] 
**device_model** | **str** | The model of the device. | [optional] 
**device_type** | **str** | The type of the device. | [optional] 
**email** | **str** | The email of the user this alert was created for. | [optional] 
**ios_vendor_id** | **str** | Required for iOS, empty for others. | [optional] 
**resource_id** | **str** | The device resource ID. | [optional] 
**serial_number** | **str** | The serial number of the device. | [optional] 

## Example

```python
from openapi_client.models.device_management_rule import DeviceManagementRule

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceManagementRule from a JSON string
device_management_rule_instance = DeviceManagementRule.from_json(json)
# print the JSON string representation of the object
print(DeviceManagementRule.to_json())

# convert the object into a dict
device_management_rule_dict = device_management_rule_instance.to_dict()
# create an instance of DeviceManagementRule from a dict
device_management_rule_from_dict = DeviceManagementRule.from_dict(device_management_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


