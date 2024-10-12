# ErrorJsonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | details about the error encountered | 

## Example

```python
from openapi_client.models.error_json_response import ErrorJsonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorJsonResponse from a JSON string
error_json_response_instance = ErrorJsonResponse.from_json(json)
# print the JSON string representation of the object
print(ErrorJsonResponse.to_json())

# convert the object into a dict
error_json_response_dict = error_json_response_instance.to_dict()
# create an instance of ErrorJsonResponse from a dict
error_json_response_from_dict = ErrorJsonResponse.from_dict(error_json_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


