# EventFilter

Filters events based on exact matches on the CloudEvents attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. You can [retrieve a specific provider&#39;s supported event types](/eventarc/docs/list-providers#describe-provider). All triggers MUST provide a filter for the &#39;type&#39; attribute. | [optional] 
**operator** | **str** | Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The allowed values are &#x60;path_pattern&#x60; and &#x60;match-path-pattern&#x60;. &#x60;path_pattern&#x60; is only allowed for GCFv1 triggers. | [optional] 
**value** | **str** | Required. The value for the attribute. | [optional] 

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


