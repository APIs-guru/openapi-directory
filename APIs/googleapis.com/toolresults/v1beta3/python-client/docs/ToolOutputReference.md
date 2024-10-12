# ToolOutputReference

A reference to a ToolExecution output file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**output** | [**FileReference**](FileReference.md) |  | [optional] 
**test_case** | [**TestCaseReference**](TestCaseReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.tool_output_reference import ToolOutputReference

# TODO update the JSON string below
json = "{}"
# create an instance of ToolOutputReference from a JSON string
tool_output_reference_instance = ToolOutputReference.from_json(json)
# print the JSON string representation of the object
print(ToolOutputReference.to_json())

# convert the object into a dict
tool_output_reference_dict = tool_output_reference_instance.to_dict()
# create an instance of ToolOutputReference from a dict
tool_output_reference_from_dict = ToolOutputReference.from_dict(tool_output_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


