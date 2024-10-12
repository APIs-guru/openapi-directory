# ExportExecutionListResult

Result of listing exports execution history of a export by name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExportExecution]**](ExportExecution.md) | The list of export executions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.export_execution_list_result import ExportExecutionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExportExecutionListResult from a JSON string
export_execution_list_result_instance = ExportExecutionListResult.from_json(json)
# print the JSON string representation of the object
print(ExportExecutionListResult.to_json())

# convert the object into a dict
export_execution_list_result_dict = export_execution_list_result_instance.to_dict()
# create an instance of ExportExecutionListResult from a dict
export_execution_list_result_from_dict = ExportExecutionListResult.from_dict(export_execution_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


