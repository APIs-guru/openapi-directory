# ExecuteStreamResponse

The response for executing or debugging a function in an Apps Script project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ScriptExecutionResult**](ScriptExecutionResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_stream_response import ExecuteStreamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteStreamResponse from a JSON string
execute_stream_response_instance = ExecuteStreamResponse.from_json(json)
# print the JSON string representation of the object
print(ExecuteStreamResponse.to_json())

# convert the object into a dict
execute_stream_response_dict = execute_stream_response_instance.to_dict()
# create an instance of ExecuteStreamResponse from a dict
execute_stream_response_from_dict = ExecuteStreamResponse.from_dict(execute_stream_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


