# GetDeviceLiveToolsPing200ResponseResultsRepliesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency** | **float** | Latency of the packet in milliseconds | [optional] 
**sequence_id** | **int** | Sequence ID of the packet | [optional] 
**size** | **int** | Size of the packet in bytes | [optional] 

## Example

```python
from openapi_client.models.get_device_live_tools_ping200_response_results_replies_inner import GetDeviceLiveToolsPing200ResponseResultsRepliesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceLiveToolsPing200ResponseResultsRepliesInner from a JSON string
get_device_live_tools_ping200_response_results_replies_inner_instance = GetDeviceLiveToolsPing200ResponseResultsRepliesInner.from_json(json)
# print the JSON string representation of the object
print(GetDeviceLiveToolsPing200ResponseResultsRepliesInner.to_json())

# convert the object into a dict
get_device_live_tools_ping200_response_results_replies_inner_dict = get_device_live_tools_ping200_response_results_replies_inner_instance.to_dict()
# create an instance of GetDeviceLiveToolsPing200ResponseResultsRepliesInner from a dict
get_device_live_tools_ping200_response_results_replies_inner_from_dict = GetDeviceLiveToolsPing200ResponseResultsRepliesInner.from_dict(get_device_live_tools_ping200_response_results_replies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


