# SignalRUsageList

Object that includes an array of SignalR resource usages and a possible link for next set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL the client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[SignalRUsage]**](SignalRUsage.md) | List of SignalR usages | [optional] 

## Example

```python
from openapi_client.models.signal_r_usage_list import SignalRUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRUsageList from a JSON string
signal_r_usage_list_instance = SignalRUsageList.from_json(json)
# print the JSON string representation of the object
print(SignalRUsageList.to_json())

# convert the object into a dict
signal_r_usage_list_dict = signal_r_usage_list_instance.to_dict()
# create an instance of SignalRUsageList from a dict
signal_r_usage_list_from_dict = SignalRUsageList.from_dict(signal_r_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


