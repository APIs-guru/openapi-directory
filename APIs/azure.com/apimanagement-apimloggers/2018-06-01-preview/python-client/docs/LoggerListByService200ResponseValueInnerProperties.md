# LoggerListByService200ResponseValueInnerProperties

The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, str]** | The name and SendRule connection string of the event hub for azureEventHub logger. Instrumentation key for applicationInsights logger. | 
**description** | **str** | Logger description. | [optional] 
**is_buffered** | **bool** | Whether records are buffered in the logger before publishing. Default is assumed to be true. | [optional] 
**logger_type** | **str** | Logger type. | 
**resource_id** | **str** | Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource). | [optional] 

## Example

```python
from openapi_client.models.logger_list_by_service200_response_value_inner_properties import LoggerListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerListByService200ResponseValueInnerProperties from a JSON string
logger_list_by_service200_response_value_inner_properties_instance = LoggerListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(LoggerListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
logger_list_by_service200_response_value_inner_properties_dict = logger_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of LoggerListByService200ResponseValueInnerProperties from a dict
logger_list_by_service200_response_value_inner_properties_from_dict = LoggerListByService200ResponseValueInnerProperties.from_dict(logger_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


