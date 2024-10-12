# GetDeviceSimLockStateResponse

Response containing a device's SimLock state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sim_lock_state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_device_sim_lock_state_response import GetDeviceSimLockStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSimLockStateResponse from a JSON string
get_device_sim_lock_state_response_instance = GetDeviceSimLockStateResponse.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSimLockStateResponse.to_json())

# convert the object into a dict
get_device_sim_lock_state_response_dict = get_device_sim_lock_state_response_instance.to_dict()
# create an instance of GetDeviceSimLockStateResponse from a dict
get_device_sim_lock_state_response_from_dict = GetDeviceSimLockStateResponse.from_dict(get_device_sim_lock_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


