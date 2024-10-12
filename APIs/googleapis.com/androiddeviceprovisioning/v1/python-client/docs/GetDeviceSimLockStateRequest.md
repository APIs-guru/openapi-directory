# GetDeviceSimLockStateRequest

Request to get a device's SIM lock status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_device_sim_lock_state_request import GetDeviceSimLockStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSimLockStateRequest from a JSON string
get_device_sim_lock_state_request_instance = GetDeviceSimLockStateRequest.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSimLockStateRequest.to_json())

# convert the object into a dict
get_device_sim_lock_state_request_dict = get_device_sim_lock_state_request_instance.to_dict()
# create an instance of GetDeviceSimLockStateRequest from a dict
get_device_sim_lock_state_request_from_dict = GetDeviceSimLockStateRequest.from_dict(get_device_sim_lock_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


