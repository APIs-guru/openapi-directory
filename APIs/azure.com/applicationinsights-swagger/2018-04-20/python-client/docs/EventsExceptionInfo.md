# EventsExceptionInfo

The exception info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly** | **str** | The assembly which threw the exception | [optional] 
**details** | [**List[EventsExceptionDetail]**](EventsExceptionDetail.md) | The details of the exception | [optional] 
**handled_at** | **str** | Indicates where the exception was handled at | [optional] 
**innermost_assembly** | **str** | The inner most assembly of the exception | [optional] 
**innermost_message** | **str** | The inner most message of the exception | [optional] 
**innermost_method** | **str** | The inner most method of the exception | [optional] 
**innermost_type** | **str** | The inner most type of the exception | [optional] 
**message** | **str** | The message of the exception | [optional] 
**method** | **str** | The method that threw the exception | [optional] 
**outer_assembly** | **str** | The outer assembly of the exception | [optional] 
**outer_message** | **str** | The outer message of the exception | [optional] 
**outer_method** | **str** | The outer method of the exception | [optional] 
**outer_type** | **str** | The outer type of the exception | [optional] 
**problem_id** | **str** | The problem ID of the exception | [optional] 
**severity_level** | **int** | The severity level of the exception | [optional] 
**type** | **str** | The type of the exception | [optional] 

## Example

```python
from openapi_client.models.events_exception_info import EventsExceptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsExceptionInfo from a JSON string
events_exception_info_instance = EventsExceptionInfo.from_json(json)
# print the JSON string representation of the object
print(EventsExceptionInfo.to_json())

# convert the object into a dict
events_exception_info_dict = events_exception_info_instance.to_dict()
# create an instance of EventsExceptionInfo from a dict
events_exception_info_from_dict = EventsExceptionInfo.from_dict(events_exception_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


