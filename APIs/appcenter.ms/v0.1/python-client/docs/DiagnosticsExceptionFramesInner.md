# DiagnosticsExceptionFramesInner

a single frame of a stack trace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | address of the frame | [optional] 
**app_code** | **bool** | this line isn&#39;t from any framework | 
**class_method** | **bool** | is a class method | [optional] 
**class_name** | **str** | name of the class | [optional] 
**code_formatted** | **str** | Formatted frame string | 
**code_raw** | **str** | Raw frame string | 
**file** | **str** | name of the file | [optional] 
**framework_name** | **str** | Name of the framework | [optional] 
**language** | **str** | programming language of the frame | [optional] 
**line** | **int** | line number | [optional] 
**method** | **str** | name of the method | [optional] 
**method_params** | **str** | parameters of the frames method | [optional] 
**relevant** | **bool** | frame should be shown always | [optional] 

## Example

```python
from openapi_client.models.diagnostics_exception_frames_inner import DiagnosticsExceptionFramesInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsExceptionFramesInner from a JSON string
diagnostics_exception_frames_inner_instance = DiagnosticsExceptionFramesInner.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsExceptionFramesInner.to_json())

# convert the object into a dict
diagnostics_exception_frames_inner_dict = diagnostics_exception_frames_inner_instance.to_dict()
# create an instance of DiagnosticsExceptionFramesInner from a dict
diagnostics_exception_frames_inner_from_dict = DiagnosticsExceptionFramesInner.from_dict(diagnostics_exception_frames_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


