# AnalyticsEventPropertyCounts200Response

Event property value counts during the time range in descending order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | The total property value counts. | [optional] 
**values** | [**List[AnalyticsEventPropertyCounts200ResponseValuesInner]**](AnalyticsEventPropertyCounts200ResponseValuesInner.md) | The event property values. | [optional] 

## Example

```python
from openapi_client.models.analytics_event_property_counts200_response import AnalyticsEventPropertyCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventPropertyCounts200Response from a JSON string
analytics_event_property_counts200_response_instance = AnalyticsEventPropertyCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventPropertyCounts200Response.to_json())

# convert the object into a dict
analytics_event_property_counts200_response_dict = analytics_event_property_counts200_response_instance.to_dict()
# create an instance of AnalyticsEventPropertyCounts200Response from a dict
analytics_event_property_counts200_response_from_dict = AnalyticsEventPropertyCounts200Response.from_dict(analytics_event_property_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


