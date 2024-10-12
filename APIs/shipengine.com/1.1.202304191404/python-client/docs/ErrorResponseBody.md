# ErrorResponseBody

An error response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.error_response_body import ErrorResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseBody from a JSON string
error_response_body_instance = ErrorResponseBody.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseBody.to_json())

# convert the object into a dict
error_response_body_dict = error_response_body_instance.to_dict()
# create an instance of ErrorResponseBody from a dict
error_response_body_from_dict = ErrorResponseBody.from_dict(error_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


