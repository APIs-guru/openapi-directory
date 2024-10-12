# LoggerContractProperties

The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, str]** | The name and SendRule connection string of the event hub for azureEventHub logger. Instrumentation key for applicationInsights logger. | 
**description** | **str** | Logger description. | [optional] 
**is_buffered** | **bool** | Whether records are buffered in the logger before publishing. Default is assumed to be true. | [optional] 
**logger_type** | **str** | Logger type. | 
**sampling** | [**LoggerSamplingContract**](LoggerSamplingContract.md) |  | [optional] 

## Example

```python
from openapi_client.models.logger_contract_properties import LoggerContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerContractProperties from a JSON string
logger_contract_properties_instance = LoggerContractProperties.from_json(json)
# print the JSON string representation of the object
print(LoggerContractProperties.to_json())

# convert the object into a dict
logger_contract_properties_dict = logger_contract_properties_instance.to_dict()
# create an instance of LoggerContractProperties from a dict
logger_contract_properties_from_dict = LoggerContractProperties.from_dict(logger_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


