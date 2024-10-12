# ErrorEvent

An error event which is returned by the Error Reporting system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ErrorContext**](ErrorContext.md) |  | [optional] 
**event_time** | **str** | Time when the event occurred as provided in the error report. If the report did not contain a timestamp, the time the error was received by the Error Reporting system is used. | [optional] 
**message** | **str** | The stack trace that was reported or logged by the service. | [optional] 
**service_context** | [**ServiceContext**](ServiceContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_event import ErrorEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorEvent from a JSON string
error_event_instance = ErrorEvent.from_json(json)
# print the JSON string representation of the object
print(ErrorEvent.to_json())

# convert the object into a dict
error_event_dict = error_event_instance.to_dict()
# create an instance of ErrorEvent from a dict
error_event_from_dict = ErrorEvent.from_dict(error_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


