# EventsExceptionDetailsParsedStack

A parsed stack entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly** | **str** | The assembly of the stack entry | [optional] 
**level** | **int** | The level of the stack entry | [optional] 
**line** | **int** | The line of the stack entry | [optional] 
**method** | **str** | The method of the stack entry | [optional] 

## Example

```python
from openapi_client.models.events_exception_details_parsed_stack import EventsExceptionDetailsParsedStack

# TODO update the JSON string below
json = "{}"
# create an instance of EventsExceptionDetailsParsedStack from a JSON string
events_exception_details_parsed_stack_instance = EventsExceptionDetailsParsedStack.from_json(json)
# print the JSON string representation of the object
print(EventsExceptionDetailsParsedStack.to_json())

# convert the object into a dict
events_exception_details_parsed_stack_dict = events_exception_details_parsed_stack_instance.to_dict()
# create an instance of EventsExceptionDetailsParsedStack from a dict
events_exception_details_parsed_stack_from_dict = EventsExceptionDetailsParsedStack.from_dict(events_exception_details_parsed_stack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


