# GetNetworkWirelessUsageHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ts** | **datetime** | The end time of the query range | [optional] 
**received_kbps** | **int** | Received kilobytes-per-second | [optional] 
**sent_kbps** | **int** | Sent kilobytes-per-second | [optional] 
**start_ts** | **datetime** | The start time of the query range | [optional] 
**total_kbps** | **int** | Total usage in kilobytes-per-second | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_usage_history200_response_inner import GetNetworkWirelessUsageHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessUsageHistory200ResponseInner from a JSON string
get_network_wireless_usage_history200_response_inner_instance = GetNetworkWirelessUsageHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessUsageHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_wireless_usage_history200_response_inner_dict = get_network_wireless_usage_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkWirelessUsageHistory200ResponseInner from a dict
get_network_wireless_usage_history200_response_inner_from_dict = GetNetworkWirelessUsageHistory200ResponseInner.from_dict(get_network_wireless_usage_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


