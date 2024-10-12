# ApiException


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inner_exception** | [**ExceptionInnerException**](ExceptionInnerException.md) |  | [optional] 
**message** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**stack_trace** | **str** |  | [optional] 
**custom_error** | **object** |  | [optional] 
**errors** | [**List[ValidationError]**](ValidationError.md) |  | [optional] 
**is_custom_error_object** | **bool** |  | [optional] 
**is_model_validaton_error** | **bool** |  | [optional] 
**reference_document_link** | **str** |  | [optional] 
**reference_error_code** | **str** |  | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_exception import ApiException

# TODO update the JSON string below
json = "{}"
# create an instance of ApiException from a JSON string
api_exception_instance = ApiException.from_json(json)
# print the JSON string representation of the object
print(ApiException.to_json())

# convert the object into a dict
api_exception_dict = api_exception_instance.to_dict()
# create an instance of ApiException from a dict
api_exception_from_dict = ApiException.from_dict(api_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


