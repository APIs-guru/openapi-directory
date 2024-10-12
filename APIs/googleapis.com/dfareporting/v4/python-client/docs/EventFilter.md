# EventFilter

Represents a DfaReporting event filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filter** | [**PathReportDimensionValue**](PathReportDimensionValue.md) |  | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#eventFilter. | [optional] 
**uvar_filter** | [**UvarFilter**](UvarFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_filter import EventFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EventFilter from a JSON string
event_filter_instance = EventFilter.from_json(json)
# print the JSON string representation of the object
print(EventFilter.to_json())

# convert the object into a dict
event_filter_dict = event_filter_instance.to_dict()
# create an instance of EventFilter from a dict
event_filter_from_dict = EventFilter.from_dict(event_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


