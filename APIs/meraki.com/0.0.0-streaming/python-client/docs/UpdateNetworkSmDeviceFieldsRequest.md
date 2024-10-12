# UpdateNetworkSmDeviceFieldsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_fields** | [**UpdateNetworkSmDeviceFieldsRequestDeviceFields**](UpdateNetworkSmDeviceFieldsRequestDeviceFields.md) |  | 
**id** | **str** | The id of the device to be modified. | [optional] 
**serial** | **str** | The serial of the device to be modified. | [optional] 
**wifi_mac** | **str** | The wifiMac of the device to be modified. | [optional] 

## Example

```python
from openapi_client.models.update_network_sm_device_fields_request import UpdateNetworkSmDeviceFieldsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSmDeviceFieldsRequest from a JSON string
update_network_sm_device_fields_request_instance = UpdateNetworkSmDeviceFieldsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSmDeviceFieldsRequest.to_json())

# convert the object into a dict
update_network_sm_device_fields_request_dict = update_network_sm_device_fields_request_instance.to_dict()
# create an instance of UpdateNetworkSmDeviceFieldsRequest from a dict
update_network_sm_device_fields_request_from_dict = UpdateNetworkSmDeviceFieldsRequest.from_dict(update_network_sm_device_fields_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


