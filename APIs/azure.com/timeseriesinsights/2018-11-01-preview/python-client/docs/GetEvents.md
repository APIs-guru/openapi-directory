# GetEvents

Get Events query. Allows to retrieve raw events for a given Time Series ID and search span.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Tsx**](Tsx.md) |  | [optional] 
**projected_properties** | [**List[EventProperty]**](EventProperty.md) | Projected properties is an array of properties which you want to project. These properties must appear in the events; otherwise, they are not returned. | [optional] 
**search_span** | [**DateTimeRange**](DateTimeRange.md) |  | 
**take** | **int** | Maximum number of property values in the whole response set, not the maximum number of property values per page. Defaults to 10,000 when not set. Maximum value of take can be 250,000. | [optional] 
**time_series_id** | **List[object]** | A single Time Series ID value that is an array of primitive values that uniquely identifies a time series instance (e.g. a single device). Note that a single Time Series ID can be composite if multiple properties are specified as Time Series ID at environment creation time. The position and type of values must match Time Series ID properties specified on the environment and returned by Get Model Setting API. Cannot be empty. | 

## Example

```python
from openapi_client.models.get_events import GetEvents

# TODO update the JSON string below
json = "{}"
# create an instance of GetEvents from a JSON string
get_events_instance = GetEvents.from_json(json)
# print the JSON string representation of the object
print(GetEvents.to_json())

# convert the object into a dict
get_events_dict = get_events_instance.to_dict()
# create an instance of GetEvents from a dict
get_events_from_dict = GetEvents.from_dict(get_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


