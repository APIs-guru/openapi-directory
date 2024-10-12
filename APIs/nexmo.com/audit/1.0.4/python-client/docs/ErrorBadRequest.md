# ErrorBadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | A human readable description of the error | [optional] 
**message** | **str** | A longer description of the error | [optional] 
**status** | **int** | The HTTP Status code of the error | [optional] 

## Example

```python
from openapi_client.models.error_bad_request import ErrorBadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorBadRequest from a JSON string
error_bad_request_instance = ErrorBadRequest.from_json(json)
# print the JSON string representation of the object
print(ErrorBadRequest.to_json())

# convert the object into a dict
error_bad_request_dict = error_bad_request_instance.to_dict()
# create an instance of ErrorBadRequest from a dict
error_bad_request_from_dict = ErrorBadRequest.from_dict(error_bad_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


