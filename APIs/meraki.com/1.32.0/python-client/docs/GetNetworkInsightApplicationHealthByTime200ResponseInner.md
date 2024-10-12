# GetNetworkInsightApplicationHealthByTime200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ts** | **datetime** | The end time of the query range | [optional] 
**lan_goodput** | **int** | LAN goodput (Number of useful information bits delivered over a LAN per unit of time) | [optional] 
**lan_latency_ms** | **float** | LAN latency in milliseconds | [optional] 
**lan_loss_percent** | **float** | LAN loss percentage | [optional] 
**num_clients** | **int** | Number of clients | [optional] 
**recv** | **int** | Received kilobytes-per-second | [optional] 
**response_duration** | **int** | Duration of the response, in milliseconds | [optional] 
**sent** | **int** | Sent kilobytes-per-second | [optional] 
**start_ts** | **datetime** | The start time of the query range | [optional] 
**wan_goodput** | **int** | WAN goodput (Number of useful information bits delivered over a WAN per unit of time) | [optional] 
**wan_latency_ms** | **float** | WAN latency in milliseconds | [optional] 
**wan_loss_percent** | **float** | WAN loss percentage | [optional] 

## Example

```python
from openapi_client.models.get_network_insight_application_health_by_time200_response_inner import GetNetworkInsightApplicationHealthByTime200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkInsightApplicationHealthByTime200ResponseInner from a JSON string
get_network_insight_application_health_by_time200_response_inner_instance = GetNetworkInsightApplicationHealthByTime200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkInsightApplicationHealthByTime200ResponseInner.to_json())

# convert the object into a dict
get_network_insight_application_health_by_time200_response_inner_dict = get_network_insight_application_health_by_time200_response_inner_instance.to_dict()
# create an instance of GetNetworkInsightApplicationHealthByTime200ResponseInner from a dict
get_network_insight_application_health_by_time200_response_inner_from_dict = GetNetworkInsightApplicationHealthByTime200ResponseInner.from_dict(get_network_insight_application_health_by_time200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


