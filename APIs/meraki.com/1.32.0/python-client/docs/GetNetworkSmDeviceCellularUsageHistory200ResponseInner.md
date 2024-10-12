# GetNetworkSmDeviceCellularUsageHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**received** | **float** | The amount of cellular data received by the device. | [optional] 
**sent** | **float** | The amount of cellular sent received by the device. | [optional] 
**ts** | **str** | When the cellular usage data was collected. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_cellular_usage_history200_response_inner import GetNetworkSmDeviceCellularUsageHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceCellularUsageHistory200ResponseInner from a JSON string
get_network_sm_device_cellular_usage_history200_response_inner_instance = GetNetworkSmDeviceCellularUsageHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceCellularUsageHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_cellular_usage_history200_response_inner_dict = get_network_sm_device_cellular_usage_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceCellularUsageHistory200ResponseInner from a dict
get_network_sm_device_cellular_usage_history200_response_inner_from_dict = GetNetworkSmDeviceCellularUsageHistory200ResponseInner.from_dict(get_network_sm_device_cellular_usage_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


