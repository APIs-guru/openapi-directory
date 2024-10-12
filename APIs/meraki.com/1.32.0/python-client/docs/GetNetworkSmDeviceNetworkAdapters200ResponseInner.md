# GetNetworkSmDeviceNetworkAdapters200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcp_server** | **str** | The IP address of the DCHP Server. | [optional] 
**dns_server** | **str** | The IP address of the DNS Server. | [optional] 
**gateway** | **str** | The IP address of the Gateway. | [optional] 
**id** | **str** | The Meraki Id of the network adapter record. | [optional] 
**ip** | **str** | The IP address of the network adapter. | [optional] 
**mac** | **str** | The MAC associated with the network adapter. | [optional] 
**name** | **str** | The name of the newtwork adapter. | [optional] 
**subnet** | **str** | The subnet for the network adapter. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_network_adapters200_response_inner import GetNetworkSmDeviceNetworkAdapters200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceNetworkAdapters200ResponseInner from a JSON string
get_network_sm_device_network_adapters200_response_inner_instance = GetNetworkSmDeviceNetworkAdapters200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceNetworkAdapters200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_network_adapters200_response_inner_dict = get_network_sm_device_network_adapters200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceNetworkAdapters200ResponseInner from a dict
get_network_sm_device_network_adapters200_response_inner_from_dict = GetNetworkSmDeviceNetworkAdapters200ResponseInner.from_dict(get_network_sm_device_network_adapters200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


