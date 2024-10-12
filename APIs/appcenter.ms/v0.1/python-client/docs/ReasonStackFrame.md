# ReasonStackFrame

frame belonging to the reason of the crash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_code** | **bool** | this line isn&#39;t from any framework | [optional] 
**class_method** | **bool** | is a class method | [optional] 
**class_name** | **str** | name of the class | [optional] 
**code_formatted** | **str** | Formatted frame string | [optional] 
**code_raw** | **str** | Unformatted Frame string | [optional] 
**exception_type** | **str** | Exception type. | [optional] 
**file** | **str** | name of the file | [optional] 
**framework_name** | **str** | Name of the framework | [optional] 
**language** | **str** | programming language of the frame | [optional] 
**line** | **int** | line number | [optional] 
**method** | **str** | name of the method | [optional] 
**method_params** | **str** | parameters of the frames method | [optional] 
**os_exception_type** | **str** | OS exception type. (aka. SIGNAL) | [optional] 

## Example

```python
from openapi_client.models.reason_stack_frame import ReasonStackFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ReasonStackFrame from a JSON string
reason_stack_frame_instance = ReasonStackFrame.from_json(json)
# print the JSON string representation of the object
print(ReasonStackFrame.to_json())

# convert the object into a dict
reason_stack_frame_dict = reason_stack_frame_instance.to_dict()
# create an instance of ReasonStackFrame from a dict
reason_stack_frame_from_dict = ReasonStackFrame.from_dict(reason_stack_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


