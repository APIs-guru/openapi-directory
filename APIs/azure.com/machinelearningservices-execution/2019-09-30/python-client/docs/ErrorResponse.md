# ErrorResponse

The error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation** | **Dict[str, str]** | Dictionary containing correlation details for the error. | [optional] 
**environment** | **str** | The hosting environment. | [optional] 
**error** | [**RootError**](RootError.md) |  | [optional] 
**location** | **str** | The Azure region. | [optional] 
**time** | **datetime** | The time in UTC. | [optional] 

## Example

```python
from openapi_client.models.error_response import ErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponse from a JSON string
error_response_instance = ErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ErrorResponse.to_json())

# convert the object into a dict
error_response_dict = error_response_instance.to_dict()
# create an instance of ErrorResponse from a dict
error_response_from_dict = ErrorResponse.from_dict(error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


