# EventsExceptionResult

An exception result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**EventsExceptionInfo**](EventsExceptionInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_exception_result import EventsExceptionResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsExceptionResult from a JSON string
events_exception_result_instance = EventsExceptionResult.from_json(json)
# print the JSON string representation of the object
print(EventsExceptionResult.to_json())

# convert the object into a dict
events_exception_result_dict = events_exception_result_instance.to_dict()
# create an instance of EventsExceptionResult from a dict
events_exception_result_from_dict = EventsExceptionResult.from_dict(events_exception_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


