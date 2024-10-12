# EventsClientPerformanceInfo

Client performance information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the client performance | [optional] 

## Example

```python
from openapi_client.models.events_client_performance_info import EventsClientPerformanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsClientPerformanceInfo from a JSON string
events_client_performance_info_instance = EventsClientPerformanceInfo.from_json(json)
# print the JSON string representation of the object
print(EventsClientPerformanceInfo.to_json())

# convert the object into a dict
events_client_performance_info_dict = events_client_performance_info_instance.to_dict()
# create an instance of EventsClientPerformanceInfo from a dict
events_client_performance_info_from_dict = EventsClientPerformanceInfo.from_dict(events_client_performance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


