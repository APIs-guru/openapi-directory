# ExecutionResponse

An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this `ExecutionResponse` object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **object** | The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a &#x60;Document&#x60; or a &#x60;Calendar&#x60;); they can only return primitive types such as a &#x60;string&#x60;, &#x60;number&#x60;, &#x60;array&#x60;, &#x60;object&#x60;, or &#x60;boolean&#x60;. | [optional] 

## Example

```python
from openapi_client.models.execution_response import ExecutionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionResponse from a JSON string
execution_response_instance = ExecutionResponse.from_json(json)
# print the JSON string representation of the object
print(ExecutionResponse.to_json())

# convert the object into a dict
execution_response_dict = execution_response_instance.to_dict()
# create an instance of ExecutionResponse from a dict
execution_response_from_dict = ExecutionResponse.from_dict(execution_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


