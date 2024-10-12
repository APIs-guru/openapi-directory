# ToolResultsHistory

Represents a tool results history resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history_id** | **str** | Required. A tool results history ID. | [optional] 
**project_id** | **str** | Required. The cloud project that owns the tool results history. | [optional] 

## Example

```python
from openapi_client.models.tool_results_history import ToolResultsHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ToolResultsHistory from a JSON string
tool_results_history_instance = ToolResultsHistory.from_json(json)
# print the JSON string representation of the object
print(ToolResultsHistory.to_json())

# convert the object into a dict
tool_results_history_dict = tool_results_history_instance.to_dict()
# create an instance of ToolResultsHistory from a dict
tool_results_history_from_dict = ToolResultsHistory.from_dict(tool_results_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


