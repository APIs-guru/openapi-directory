# DeviceState

The state of a user's device, as accessed by the getState and setState methods on device resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_state** | **str** | The state of the Google account on the device. \&quot;enabled\&quot; indicates that the Google account on the device can be used to access Google services (including Google Play), while \&quot;disabled\&quot; means that it cannot. A new device is initially in the \&quot;disabled\&quot; state. | [optional] 

## Example

```python
from openapi_client.models.device_state import DeviceState

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceState from a JSON string
device_state_instance = DeviceState.from_json(json)
# print the JSON string representation of the object
print(DeviceState.to_json())

# convert the object into a dict
device_state_dict = device_state_instance.to_dict()
# create an instance of DeviceState from a dict
device_state_from_dict = DeviceState.from_dict(device_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


