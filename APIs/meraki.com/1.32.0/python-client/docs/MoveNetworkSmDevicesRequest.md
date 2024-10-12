# MoveNetworkSmDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The ids of the devices to be moved. | [optional] 
**new_network** | **str** | The new network to which the devices will be moved. | 
**scope** | **List[str]** | The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be moved. | [optional] 
**serials** | **List[str]** | The serials of the devices to be moved. | [optional] 
**wifi_macs** | **List[str]** | The wifiMacs of the devices to be moved. | [optional] 

## Example

```python
from openapi_client.models.move_network_sm_devices_request import MoveNetworkSmDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveNetworkSmDevicesRequest from a JSON string
move_network_sm_devices_request_instance = MoveNetworkSmDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(MoveNetworkSmDevicesRequest.to_json())

# convert the object into a dict
move_network_sm_devices_request_dict = move_network_sm_devices_request_instance.to_dict()
# create an instance of MoveNetworkSmDevicesRequest from a dict
move_network_sm_devices_request_from_dict = MoveNetworkSmDevicesRequest.from_dict(move_network_sm_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


