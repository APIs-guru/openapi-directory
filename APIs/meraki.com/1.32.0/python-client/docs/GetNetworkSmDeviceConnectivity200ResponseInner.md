# GetNetworkSmDeviceConnectivity200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_seen_at** | **str** | When the device was first seen as connected to the internet in each connection. | [optional] 
**last_seen_at** | **str** | When the device was last seen as connected to the internet in each connection. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_connectivity200_response_inner import GetNetworkSmDeviceConnectivity200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceConnectivity200ResponseInner from a JSON string
get_network_sm_device_connectivity200_response_inner_instance = GetNetworkSmDeviceConnectivity200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceConnectivity200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_connectivity200_response_inner_dict = get_network_sm_device_connectivity200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceConnectivity200ResponseInner from a dict
get_network_sm_device_connectivity200_response_inner_from_dict = GetNetworkSmDeviceConnectivity200ResponseInner.from_dict(get_network_sm_device_connectivity200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


