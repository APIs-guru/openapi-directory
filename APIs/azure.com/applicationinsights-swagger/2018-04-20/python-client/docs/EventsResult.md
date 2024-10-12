# EventsResult

An event query result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_messages** | [**List[ErrorInfo]**](ErrorInfo.md) | OData messages for this response. | [optional] 
**value** | [**EventsResultData**](EventsResultData.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_result import EventsResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsResult from a JSON string
events_result_instance = EventsResult.from_json(json)
# print the JSON string representation of the object
print(EventsResult.to_json())

# convert the object into a dict
events_result_dict = events_result_instance.to_dict()
# create an instance of EventsResult from a dict
events_result_from_dict = EventsResult.from_dict(events_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


