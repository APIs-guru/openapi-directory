# AndroidDeviceList

A list of Android device configurations in which the test is to be executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_devices** | [**List[AndroidDevice]**](AndroidDevice.md) | Required. A list of Android devices. | [optional] 

## Example

```python
from openapi_client.models.android_device_list import AndroidDeviceList

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidDeviceList from a JSON string
android_device_list_instance = AndroidDeviceList.from_json(json)
# print the JSON string representation of the object
print(AndroidDeviceList.to_json())

# convert the object into a dict
android_device_list_dict = android_device_list_instance.to_dict()
# create an instance of AndroidDeviceList from a dict
android_device_list_from_dict = AndroidDeviceList.from_dict(android_device_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


