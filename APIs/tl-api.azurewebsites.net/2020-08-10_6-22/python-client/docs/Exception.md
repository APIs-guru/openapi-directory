# Exception


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inner_exception** | [**ExceptionInnerException**](ExceptionInnerException.md) |  | [optional] 
**message** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**stack_trace** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exception import Exception

# TODO update the JSON string below
json = "{}"
# create an instance of Exception from a JSON string
exception_instance = Exception.from_json(json)
# print the JSON string representation of the object
print(Exception.to_json())

# convert the object into a dict
exception_dict = exception_instance.to_dict()
# create an instance of Exception from a dict
exception_from_dict = Exception.from_dict(exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


