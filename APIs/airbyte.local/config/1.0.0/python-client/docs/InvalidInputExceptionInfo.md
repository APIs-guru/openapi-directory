# InvalidInputExceptionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception_class_name** | **str** |  | [optional] 
**exception_stack** | **List[str]** |  | [optional] 
**message** | **str** |  | 
**validation_errors** | [**List[InvalidInputProperty]**](InvalidInputProperty.md) |  | 

## Example

```python
from openapi_client.models.invalid_input_exception_info import InvalidInputExceptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidInputExceptionInfo from a JSON string
invalid_input_exception_info_instance = InvalidInputExceptionInfo.from_json(json)
# print the JSON string representation of the object
print(InvalidInputExceptionInfo.to_json())

# convert the object into a dict
invalid_input_exception_info_dict = invalid_input_exception_info_instance.to_dict()
# create an instance of InvalidInputExceptionInfo from a dict
invalid_input_exception_info_from_dict = InvalidInputExceptionInfo.from_dict(invalid_input_exception_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


