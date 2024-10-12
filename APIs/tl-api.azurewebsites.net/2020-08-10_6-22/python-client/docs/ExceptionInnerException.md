# ExceptionInnerException


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inner_exception** | [**ExceptionInnerException**](ExceptionInnerException.md) |  | [optional] 
**message** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**stack_trace** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exception_inner_exception import ExceptionInnerException

# TODO update the JSON string below
json = "{}"
# create an instance of ExceptionInnerException from a JSON string
exception_inner_exception_instance = ExceptionInnerException.from_json(json)
# print the JSON string representation of the object
print(ExceptionInnerException.to_json())

# convert the object into a dict
exception_inner_exception_dict = exception_inner_exception_instance.to_dict()
# create an instance of ExceptionInnerException from a dict
exception_inner_exception_from_dict = ExceptionInnerException.from_dict(exception_inner_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


