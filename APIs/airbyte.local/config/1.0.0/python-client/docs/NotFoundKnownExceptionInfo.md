# NotFoundKnownExceptionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception_class_name** | **str** |  | [optional] 
**exception_stack** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**message** | **str** |  | 
**root_cause_exception_class_name** | **str** |  | [optional] 
**root_cause_exception_stack** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.not_found_known_exception_info import NotFoundKnownExceptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NotFoundKnownExceptionInfo from a JSON string
not_found_known_exception_info_instance = NotFoundKnownExceptionInfo.from_json(json)
# print the JSON string representation of the object
print(NotFoundKnownExceptionInfo.to_json())

# convert the object into a dict
not_found_known_exception_info_dict = not_found_known_exception_info_instance.to_dict()
# create an instance of NotFoundKnownExceptionInfo from a dict
not_found_known_exception_info_from_dict = NotFoundKnownExceptionInfo.from_dict(not_found_known_exception_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


