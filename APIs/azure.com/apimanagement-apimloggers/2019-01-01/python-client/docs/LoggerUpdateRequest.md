# LoggerUpdateRequest

Logger update contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LoggerUpdateRequestProperties**](LoggerUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.logger_update_request import LoggerUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerUpdateRequest from a JSON string
logger_update_request_instance = LoggerUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(LoggerUpdateRequest.to_json())

# convert the object into a dict
logger_update_request_dict = logger_update_request_instance.to_dict()
# create an instance of LoggerUpdateRequest from a dict
logger_update_request_from_dict = LoggerUpdateRequest.from_dict(logger_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


