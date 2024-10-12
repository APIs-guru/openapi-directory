# ResponseWithError

An error response from the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | 

## Example

```python
from openapi_client.models.response_with_error import ResponseWithError

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithError from a JSON string
response_with_error_instance = ResponseWithError.from_json(json)
# print the JSON string representation of the object
print(ResponseWithError.to_json())

# convert the object into a dict
response_with_error_dict = response_with_error_instance.to_dict()
# create an instance of ResponseWithError from a dict
response_with_error_from_dict = ResponseWithError.from_dict(response_with_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


