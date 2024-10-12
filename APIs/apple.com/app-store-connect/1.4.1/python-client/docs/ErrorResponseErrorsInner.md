# ErrorResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**detail** | **str** |  | 
**id** | **str** |  | [optional] 
**source** | [**ErrorResponseErrorsInnerSource**](ErrorResponseErrorsInnerSource.md) |  | [optional] 
**status** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.error_response_errors_inner import ErrorResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseErrorsInner from a JSON string
error_response_errors_inner_instance = ErrorResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseErrorsInner.to_json())

# convert the object into a dict
error_response_errors_inner_dict = error_response_errors_inner_instance.to_dict()
# create an instance of ErrorResponseErrorsInner from a dict
error_response_errors_inner_from_dict = ErrorResponseErrorsInner.from_dict(error_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


