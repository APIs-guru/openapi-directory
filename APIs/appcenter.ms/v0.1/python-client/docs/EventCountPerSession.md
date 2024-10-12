# EventCountPerSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_count_per_session** | **float** |  | [optional] 
**count_per_session** | [**List[AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner]**](AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner.md) |  | [optional] 
**previous_avg_count_per_session** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.event_count_per_session import EventCountPerSession

# TODO update the JSON string below
json = "{}"
# create an instance of EventCountPerSession from a JSON string
event_count_per_session_instance = EventCountPerSession.from_json(json)
# print the JSON string representation of the object
print(EventCountPerSession.to_json())

# convert the object into a dict
event_count_per_session_dict = event_count_per_session_instance.to_dict()
# create an instance of EventCountPerSession from a dict
event_count_per_session_from_dict = EventCountPerSession.from_dict(event_count_per_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


