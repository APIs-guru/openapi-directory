# EventsExceptionDetail

Exception details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the exception detail | [optional] 
**message** | **str** | The message of the exception detail | [optional] 
**outer_id** | **str** | The outer ID of the exception detail | [optional] 
**parsed_stack** | [**List[EventsExceptionDetailsParsedStack]**](EventsExceptionDetailsParsedStack.md) | The parsed stack | [optional] 
**severity_level** | **str** | The severity level of the exception detail | [optional] 
**type** | **str** | The type of the exception detail | [optional] 

## Example

```python
from openapi_client.models.events_exception_detail import EventsExceptionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of EventsExceptionDetail from a JSON string
events_exception_detail_instance = EventsExceptionDetail.from_json(json)
# print the JSON string representation of the object
print(EventsExceptionDetail.to_json())

# convert the object into a dict
events_exception_detail_dict = events_exception_detail_instance.to_dict()
# create an instance of EventsExceptionDetail from a dict
events_exception_detail_from_dict = EventsExceptionDetail.from_dict(events_exception_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


