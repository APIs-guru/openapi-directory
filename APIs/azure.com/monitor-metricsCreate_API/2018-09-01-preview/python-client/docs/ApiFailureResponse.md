# ApiFailureResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiError**](ApiError.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_failure_response import ApiFailureResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiFailureResponse from a JSON string
api_failure_response_instance = ApiFailureResponse.from_json(json)
# print the JSON string representation of the object
print(ApiFailureResponse.to_json())

# convert the object into a dict
api_failure_response_dict = api_failure_response_instance.to_dict()
# create an instance of ApiFailureResponse from a dict
api_failure_response_from_dict = ApiFailureResponse.from_dict(api_failure_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


