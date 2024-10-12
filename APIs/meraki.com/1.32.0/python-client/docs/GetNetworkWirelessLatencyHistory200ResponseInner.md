# GetNetworkWirelessLatencyHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_latency_ms** | **int** | Average latency in milliseconds | [optional] 
**end_ts** | **datetime** | The end time of the query range | [optional] 
**start_ts** | **datetime** | The start time of the query range | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_latency_history200_response_inner import GetNetworkWirelessLatencyHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessLatencyHistory200ResponseInner from a JSON string
get_network_wireless_latency_history200_response_inner_instance = GetNetworkWirelessLatencyHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessLatencyHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_wireless_latency_history200_response_inner_dict = get_network_wireless_latency_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkWirelessLatencyHistory200ResponseInner from a dict
get_network_wireless_latency_history200_response_inner_from_dict = GetNetworkWirelessLatencyHistory200ResponseInner.from_dict(get_network_wireless_latency_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


