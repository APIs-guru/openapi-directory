# LoggerCreateParameters

Parameters supplied to the Create Logger operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, str]** | The name and SendRule connection string of the event hub. | 
**description** | **str** | Logger description. | [optional] 
**is_buffered** | **bool** | Whether records are buffered in the logger before publishing. Default is assumed to be true. | [optional] 
**type** | **str** | Logger type. | 

## Example

```python
from openapi_client.models.logger_create_parameters import LoggerCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerCreateParameters from a JSON string
logger_create_parameters_instance = LoggerCreateParameters.from_json(json)
# print the JSON string representation of the object
print(LoggerCreateParameters.to_json())

# convert the object into a dict
logger_create_parameters_dict = logger_create_parameters_instance.to_dict()
# create an instance of LoggerCreateParameters from a dict
logger_create_parameters_from_dict = LoggerCreateParameters.from_dict(logger_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


