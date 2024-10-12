# ScriptStatistics

Job statistics specific to the child job of a script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_kind** | **str** | Whether this child job was a statement or expression. | [optional] 
**stack_frames** | [**List[ScriptStackFrame]**](ScriptStackFrame.md) | Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty. | [optional] 

## Example

```python
from openapi_client.models.script_statistics import ScriptStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptStatistics from a JSON string
script_statistics_instance = ScriptStatistics.from_json(json)
# print the JSON string representation of the object
print(ScriptStatistics.to_json())

# convert the object into a dict
script_statistics_dict = script_statistics_instance.to_dict()
# create an instance of ScriptStatistics from a dict
script_statistics_from_dict = ScriptStatistics.from_dict(script_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


