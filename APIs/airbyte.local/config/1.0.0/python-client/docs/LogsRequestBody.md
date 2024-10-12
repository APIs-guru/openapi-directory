# LogsRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_type** | [**LogType**](LogType.md) |  | 

## Example

```python
from openapi_client.models.logs_request_body import LogsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of LogsRequestBody from a JSON string
logs_request_body_instance = LogsRequestBody.from_json(json)
# print the JSON string representation of the object
print(LogsRequestBody.to_json())

# convert the object into a dict
logs_request_body_dict = logs_request_body_instance.to_dict()
# create an instance of LogsRequestBody from a dict
logs_request_body_from_dict = LogsRequestBody.from_dict(logs_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


