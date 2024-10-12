# ExportExecution

A export execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ExportExecutionProperties**](ExportExecutionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.export_execution import ExportExecution

# TODO update the JSON string below
json = "{}"
# create an instance of ExportExecution from a JSON string
export_execution_instance = ExportExecution.from_json(json)
# print the JSON string representation of the object
print(ExportExecution.to_json())

# convert the object into a dict
export_execution_dict = export_execution_instance.to_dict()
# create an instance of ExportExecution from a dict
export_execution_from_dict = ExportExecution.from_dict(export_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


