# EventTypesListResult

Result of the List Event Types operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[EventType]**](EventType.md) | A collection of event types | [optional] 

## Example

```python
from openapi_client.models.event_types_list_result import EventTypesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventTypesListResult from a JSON string
event_types_list_result_instance = EventTypesListResult.from_json(json)
# print the JSON string representation of the object
print(EventTypesListResult.to_json())

# convert the object into a dict
event_types_list_result_dict = event_types_list_result_instance.to_dict()
# create an instance of EventTypesListResult from a dict
event_types_list_result_from_dict = EventTypesListResult.from_dict(event_types_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


