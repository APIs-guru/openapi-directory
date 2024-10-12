# DeviceIntegrity

Contains the device attestation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_recognition_verdict** | **List[str]** | Details about the integrity of the device the app is running on. | [optional] 
**recent_device_activity** | [**RecentDeviceActivity**](RecentDeviceActivity.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_integrity import DeviceIntegrity

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceIntegrity from a JSON string
device_integrity_instance = DeviceIntegrity.from_json(json)
# print the JSON string representation of the object
print(DeviceIntegrity.to_json())

# convert the object into a dict
device_integrity_dict = device_integrity_instance.to_dict()
# create an instance of DeviceIntegrity from a dict
device_integrity_from_dict = DeviceIntegrity.from_dict(device_integrity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


