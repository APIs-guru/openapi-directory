# LoggerResponse

The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, str]** | The name and SendRule connection string of the event hub. | 
**description** | **str** | Logger description. | [optional] 
**id** | **str** | Uniquely identifies the logger within the current API Management service instance. The value is a valid relative URL in the format of /loggers/{loggerId} where {loggerId} is a logger identifier. | [optional] [readonly] 
**is_buffered** | **bool** | Whether records are buffered in the logger before publishing. Default is assumed to be true. | [optional] [default to True]
**type** | **str** | Logger type. | 

## Example

```python
from openapi_client.models.logger_response import LoggerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerResponse from a JSON string
logger_response_instance = LoggerResponse.from_json(json)
# print the JSON string representation of the object
print(LoggerResponse.to_json())

# convert the object into a dict
logger_response_dict = logger_response_instance.to_dict()
# create an instance of LoggerResponse from a dict
logger_response_from_dict = LoggerResponse.from_dict(logger_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


