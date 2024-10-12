# Device

Third-party device definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, object]** | Attributes for the traits supported by the device. | [optional] 
**custom_data** | **Dict[str, object]** | Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information. | [optional] 
**device_info** | [**DeviceInfo**](DeviceInfo.md) |  | [optional] 
**id** | **str** | Third-party device ID. | [optional] 
**name** | [**DeviceNames**](DeviceNames.md) |  | [optional] 
**notification_supported_by_agent** | **bool** | Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices. | [optional] 
**other_device_ids** | [**List[AgentOtherDeviceId]**](AgentOtherDeviceId.md) | Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview). | [optional] 
**room_hint** | **str** | Suggested name for the room where this device is installed. Google attempts to use this value during user setup. | [optional] 
**structure_hint** | **str** | Suggested name for the structure where this device is installed. Google attempts to use this value during user setup. | [optional] 
**traits** | **List[str]** | Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits). | [optional] 
**type** | **str** | Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides). | [optional] 
**will_report_state** | **bool** | Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification. | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


