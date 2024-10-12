# UpdateNetworkSmDevicesFieldsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_fields** | [**UpdateNetworkSmDevicesFieldsRequestDeviceFields**](UpdateNetworkSmDevicesFieldsRequestDeviceFields.md) |  | 
**id** | **str** | The id of the device to be modified. | [optional] 
**serial** | **str** | The serial of the device to be modified. | [optional] 
**wifi_mac** | **str** | The wifiMac of the device to be modified. | [optional] 

## Example

```python
from openapi_client.models.update_network_sm_devices_fields_request import UpdateNetworkSmDevicesFieldsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSmDevicesFieldsRequest from a JSON string
update_network_sm_devices_fields_request_instance = UpdateNetworkSmDevicesFieldsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSmDevicesFieldsRequest.to_json())

# convert the object into a dict
update_network_sm_devices_fields_request_dict = update_network_sm_devices_fields_request_instance.to_dict()
# create an instance of UpdateNetworkSmDevicesFieldsRequest from a dict
update_network_sm_devices_fields_request_from_dict = UpdateNetworkSmDevicesFieldsRequest.from_dict(update_network_sm_devices_fields_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


