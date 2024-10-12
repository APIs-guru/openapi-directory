# LockNetworkSmDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **str** | The ids of the devices to be locked. | [optional] 
**pin** | **int** | The pin number for locking macOS devices (a six digit number). Required only for macOS devices. | [optional] 
**scope** | **str** | The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped. | [optional] 
**serials** | **str** | The serials of the devices to be locked. | [optional] 
**wifi_macs** | **str** | The wifiMacs of the devices to be locked. | [optional] 

## Example

```python
from openapi_client.models.lock_network_sm_devices_request import LockNetworkSmDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LockNetworkSmDevicesRequest from a JSON string
lock_network_sm_devices_request_instance = LockNetworkSmDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(LockNetworkSmDevicesRequest.to_json())

# convert the object into a dict
lock_network_sm_devices_request_dict = lock_network_sm_devices_request_instance.to_dict()
# create an instance of LockNetworkSmDevicesRequest from a dict
lock_network_sm_devices_request_from_dict = LockNetworkSmDevicesRequest.from_dict(lock_network_sm_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


