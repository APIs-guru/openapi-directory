# AnalyticsEvents200ResponseEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**count_per_device** | **float** |  | [optional] 
**count_per_session** | **float** |  | [optional] 
**device_count** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**previous_count** | **int** | The event count of previous time range of the event. | [optional] 
**previous_device_count** | **int** | The device count of previous time range of the event. | [optional] 

## Example

```python
from openapi_client.models.analytics_events200_response_events_inner import AnalyticsEvents200ResponseEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEvents200ResponseEventsInner from a JSON string
analytics_events200_response_events_inner_instance = AnalyticsEvents200ResponseEventsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEvents200ResponseEventsInner.to_json())

# convert the object into a dict
analytics_events200_response_events_inner_dict = analytics_events200_response_events_inner_instance.to_dict()
# create an instance of AnalyticsEvents200ResponseEventsInner from a dict
analytics_events200_response_events_inner_from_dict = AnalyticsEvents200ResponseEventsInner.from_dict(analytics_events200_response_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


