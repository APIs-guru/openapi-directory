# AnalyticsEventPropertyCounts200ResponseValuesInner

An event property value with counts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of the the event property value. | [optional] 
**name** | **str** | The event property value name. | [optional] 
**previous_count** | **int** | The count of previous time range of the event property value. | [optional] 

## Example

```python
from openapi_client.models.analytics_event_property_counts200_response_values_inner import AnalyticsEventPropertyCounts200ResponseValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventPropertyCounts200ResponseValuesInner from a JSON string
analytics_event_property_counts200_response_values_inner_instance = AnalyticsEventPropertyCounts200ResponseValuesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventPropertyCounts200ResponseValuesInner.to_json())

# convert the object into a dict
analytics_event_property_counts200_response_values_inner_dict = analytics_event_property_counts200_response_values_inner_instance.to_dict()
# create an instance of AnalyticsEventPropertyCounts200ResponseValuesInner from a dict
analytics_event_property_counts200_response_values_inner_from_dict = AnalyticsEventPropertyCounts200ResponseValuesInner.from_dict(analytics_event_property_counts200_response_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


