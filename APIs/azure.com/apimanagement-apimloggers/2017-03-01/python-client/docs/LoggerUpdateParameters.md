# LoggerUpdateParameters

Parameters supplied to the Update Logger operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **Dict[str, str]** | Logger credentials. | [optional] 
**description** | **str** | Logger description. | [optional] 
**is_buffered** | **bool** | Whether records are buffered in the logger before publishing. Default is assumed to be true. | [optional] 
**logger_type** | **str** | Logger type. | [optional] 

## Example

```python
from openapi_client.models.logger_update_parameters import LoggerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerUpdateParameters from a JSON string
logger_update_parameters_instance = LoggerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(LoggerUpdateParameters.to_json())

# convert the object into a dict
logger_update_parameters_dict = logger_update_parameters_instance.to_dict()
# create an instance of LoggerUpdateParameters from a dict
logger_update_parameters_from_dict = LoggerUpdateParameters.from_dict(logger_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


