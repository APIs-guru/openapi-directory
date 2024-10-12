# ScriptStackFrame

Represents the location of the statement/expression being evaluated. Line and column numbers are defined as follows: - Line and column numbers start with one. That is, line 1 column 1 denotes the start of the script. - When inside a stored procedure, all line/column numbers are relative to the procedure body, not the script in which the procedure was defined. - Start/end positions exclude leading/trailing comments and whitespace. The end position always ends with a \";\", when present. - Multi-byte Unicode characters are treated as just one column. - If the original script (or procedure definition) contains TAB characters, a tab \"snaps\" the indentation forward to the nearest multiple of 8 characters, plus 1. For example, a TAB on column 1, 2, 3, 4, 5, 6 , or 8 will advance the next character to column 9. A TAB on column 9, 10, 11, 12, 13, 14, 15, or 16 will advance the next character to column 17.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_column** | **int** | Output only. One-based end column. | [optional] [readonly] 
**end_line** | **int** | Output only. One-based end line. | [optional] [readonly] 
**procedure_id** | **str** | Output only. Name of the active procedure, empty if in a top-level script. | [optional] [readonly] 
**start_column** | **int** | Output only. One-based start column. | [optional] [readonly] 
**start_line** | **int** | Output only. One-based start line. | [optional] [readonly] 
**text** | **str** | Output only. Text of the current statement/expression. | [optional] [readonly] 

## Example

```python
from openapi_client.models.script_stack_frame import ScriptStackFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptStackFrame from a JSON string
script_stack_frame_instance = ScriptStackFrame.from_json(json)
# print the JSON string representation of the object
print(ScriptStackFrame.to_json())

# convert the object into a dict
script_stack_frame_dict = script_stack_frame_instance.to_dict()
# create an instance of ScriptStackFrame from a dict
script_stack_frame_from_dict = ScriptStackFrame.from_dict(script_stack_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


