# LoggerListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**LoggerListByServiceDefaultResponseError**](LoggerListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.logger_list_by_service_default_response import LoggerListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerListByServiceDefaultResponse from a JSON string
logger_list_by_service_default_response_instance = LoggerListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(LoggerListByServiceDefaultResponse.to_json())

# convert the object into a dict
logger_list_by_service_default_response_dict = logger_list_by_service_default_response_instance.to_dict()
# create an instance of LoggerListByServiceDefaultResponse from a dict
logger_list_by_service_default_response_from_dict = LoggerListByServiceDefaultResponse.from_dict(logger_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


