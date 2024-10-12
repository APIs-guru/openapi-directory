# KnownExceptionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception_class_name** | **str** |  | [optional] 
**exception_stack** | **List[str]** |  | [optional] 
**message** | **str** |  | 
**root_cause_exception_class_name** | **str** |  | [optional] 
**root_cause_exception_stack** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.known_exception_info import KnownExceptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KnownExceptionInfo from a JSON string
known_exception_info_instance = KnownExceptionInfo.from_json(json)
# print the JSON string representation of the object
print(KnownExceptionInfo.to_json())

# convert the object into a dict
known_exception_info_dict = known_exception_info_instance.to_dict()
# create an instance of KnownExceptionInfo from a dict
known_exception_info_from_dict = KnownExceptionInfo.from_dict(known_exception_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


