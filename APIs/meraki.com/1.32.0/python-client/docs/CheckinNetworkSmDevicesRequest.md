# CheckinNetworkSmDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The ids of the devices to be checked-in. | [optional] 
**scope** | **List[str]** | The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in. | [optional] 
**serials** | **List[str]** | The serials of the devices to be checked-in. | [optional] 
**wifi_macs** | **List[str]** | The wifiMacs of the devices to be checked-in. | [optional] 

## Example

```python
from openapi_client.models.checkin_network_sm_devices_request import CheckinNetworkSmDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckinNetworkSmDevicesRequest from a JSON string
checkin_network_sm_devices_request_instance = CheckinNetworkSmDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(CheckinNetworkSmDevicesRequest.to_json())

# convert the object into a dict
checkin_network_sm_devices_request_dict = checkin_network_sm_devices_request_instance.to_dict()
# create an instance of CheckinNetworkSmDevicesRequest from a dict
checkin_network_sm_devices_request_from_dict = CheckinNetworkSmDevicesRequest.from_dict(checkin_network_sm_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


