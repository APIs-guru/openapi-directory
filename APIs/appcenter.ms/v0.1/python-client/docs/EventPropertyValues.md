# EventPropertyValues

Event property value counts during the time range in descending order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | The total property value counts. | [optional] 
**values** | [**List[AnalyticsEventPropertyCounts200ResponseValuesInner]**](AnalyticsEventPropertyCounts200ResponseValuesInner.md) | The event property values. | [optional] 

## Example

```python
from openapi_client.models.event_property_values import EventPropertyValues

# TODO update the JSON string below
json = "{}"
# create an instance of EventPropertyValues from a JSON string
event_property_values_instance = EventPropertyValues.from_json(json)
# print the JSON string representation of the object
print(EventPropertyValues.to_json())

# convert the object into a dict
event_property_values_dict = event_property_values_instance.to_dict()
# create an instance of EventPropertyValues from a dict
event_property_values_from_dict = EventPropertyValues.from_dict(event_property_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


