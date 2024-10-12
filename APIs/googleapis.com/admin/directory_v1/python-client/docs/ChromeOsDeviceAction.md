# ChromeOsDeviceAction

Data about an update to the status of a Chrome OS device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action to be taken on the Chrome OS device. | [optional] 
**deprovision_reason** | **str** | Only used when the action is &#x60;deprovision&#x60;. With the &#x60;deprovision&#x60; action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_action import ChromeOsDeviceAction

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceAction from a JSON string
chrome_os_device_action_instance = ChromeOsDeviceAction.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceAction.to_json())

# convert the object into a dict
chrome_os_device_action_dict = chrome_os_device_action_instance.to_dict()
# create an instance of ChromeOsDeviceAction from a dict
chrome_os_device_action_from_dict = ChromeOsDeviceAction.from_dict(chrome_os_device_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


