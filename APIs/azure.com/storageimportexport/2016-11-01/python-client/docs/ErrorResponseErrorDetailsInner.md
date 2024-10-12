# ErrorResponseErrorDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Provides information about the error code. | [optional] 
**message** | **str** | Provides information about the error message. | [optional] 
**target** | **str** | Provides information about the error target. | [optional] 

## Example

```python
from openapi_client.models.error_response_error_details_inner import ErrorResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseErrorDetailsInner from a JSON string
error_response_error_details_inner_instance = ErrorResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseErrorDetailsInner.to_json())

# convert the object into a dict
error_response_error_details_inner_dict = error_response_error_details_inner_instance.to_dict()
# create an instance of ErrorResponseErrorDetailsInner from a dict
error_response_error_details_inner_from_dict = ErrorResponseErrorDetailsInner.from_dict(error_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


