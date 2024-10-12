# GetNetworkWirelessChannelUtilizationHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ts** | **datetime** | The end time of the query range | [optional] 
**start_ts** | **datetime** | The start time of the query range | [optional] 
**utilization80211** | **float** | Average wifi utilization | [optional] 
**utilization_non80211** | **float** | Average signal interference | [optional] 
**utilization_total** | **float** | Total channel utilization | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_channel_utilization_history200_response_inner import GetNetworkWirelessChannelUtilizationHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessChannelUtilizationHistory200ResponseInner from a JSON string
get_network_wireless_channel_utilization_history200_response_inner_instance = GetNetworkWirelessChannelUtilizationHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessChannelUtilizationHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_wireless_channel_utilization_history200_response_inner_dict = get_network_wireless_channel_utilization_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkWirelessChannelUtilizationHistory200ResponseInner from a dict
get_network_wireless_channel_utilization_history200_response_inner_from_dict = GetNetworkWirelessChannelUtilizationHistory200ResponseInner.from_dict(get_network_wireless_channel_utilization_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


