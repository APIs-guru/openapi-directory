# GetDeviceLiveToolsPing200ResponseResults

Results of the ping request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latencies** | [**GetDeviceLiveToolsPing200ResponseResultsLatencies**](GetDeviceLiveToolsPing200ResponseResultsLatencies.md) |  | [optional] 
**loss** | [**GetDeviceLiveToolsPing200ResponseResultsLoss**](GetDeviceLiveToolsPing200ResponseResultsLoss.md) |  | [optional] 
**received** | **int** | Number of packets received | [optional] 
**replies** | [**List[GetDeviceLiveToolsPing200ResponseResultsRepliesInner]**](GetDeviceLiveToolsPing200ResponseResultsRepliesInner.md) | Received packets | [optional] 
**sent** | **int** | Number of packets sent | [optional] 

## Example

```python
from openapi_client.models.get_device_live_tools_ping200_response_results import GetDeviceLiveToolsPing200ResponseResults

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceLiveToolsPing200ResponseResults from a JSON string
get_device_live_tools_ping200_response_results_instance = GetDeviceLiveToolsPing200ResponseResults.from_json(json)
# print the JSON string representation of the object
print(GetDeviceLiveToolsPing200ResponseResults.to_json())

# convert the object into a dict
get_device_live_tools_ping200_response_results_dict = get_device_live_tools_ping200_response_results_instance.to_dict()
# create an instance of GetDeviceLiveToolsPing200ResponseResults from a dict
get_device_live_tools_ping200_response_results_from_dict = GetDeviceLiveToolsPing200ResponseResults.from_dict(get_device_live_tools_ping200_response_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


