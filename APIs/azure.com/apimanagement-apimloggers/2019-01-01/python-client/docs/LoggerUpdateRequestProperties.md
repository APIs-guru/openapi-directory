# LoggerUpdateRequestProperties

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
from openapi_client.models.logger_update_request_properties import LoggerUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerUpdateRequestProperties from a JSON string
logger_update_request_properties_instance = LoggerUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(LoggerUpdateRequestProperties.to_json())

# convert the object into a dict
logger_update_request_properties_dict = logger_update_request_properties_instance.to_dict()
# create an instance of LoggerUpdateRequestProperties from a dict
logger_update_request_properties_from_dict = LoggerUpdateRequestProperties.from_dict(logger_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


