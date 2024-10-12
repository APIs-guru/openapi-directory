# AndroidDevice

A single Android device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_model_id** | **str** | Required. The id of the Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**android_version_id** | **str** | Required. The id of the Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**locale** | **str** | Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**orientation** | **str** | Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 

## Example

```python
from openapi_client.models.android_device import AndroidDevice

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidDevice from a JSON string
android_device_instance = AndroidDevice.from_json(json)
# print the JSON string representation of the object
print(AndroidDevice.to_json())

# convert the object into a dict
android_device_dict = android_device_instance.to_dict()
# create an instance of AndroidDevice from a dict
android_device_from_dict = AndroidDevice.from_dict(android_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


