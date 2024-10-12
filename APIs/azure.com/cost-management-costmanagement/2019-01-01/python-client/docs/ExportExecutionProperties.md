# ExportExecutionProperties

The properties of the export execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_type** | **str** | The type of the export execution. | [optional] 
**file_name** | **str** | The name of the file export got written to. | [optional] 
**processing_end_time** | **datetime** | The time when export execution finished. | [optional] 
**processing_start_time** | **datetime** | The time when export was picked up to be executed. | [optional] 
**run_settings** | [**CommonExportProperties**](CommonExportProperties.md) |  | [optional] 
**status** | **str** | The status of the export execution. | [optional] 
**submitted_by** | **str** | The identifier for the entity that executed the export. For OnDemand executions, it is the email id. For Scheduled executions, it is the constant value - System. | [optional] 
**submitted_time** | **datetime** | The time when export was queued to be executed. | [optional] 

## Example

```python
from openapi_client.models.export_execution_properties import ExportExecutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExportExecutionProperties from a JSON string
export_execution_properties_instance = ExportExecutionProperties.from_json(json)
# print the JSON string representation of the object
print(ExportExecutionProperties.to_json())

# convert the object into a dict
export_execution_properties_dict = export_execution_properties_instance.to_dict()
# create an instance of ExportExecutionProperties from a dict
export_execution_properties_from_dict = ExportExecutionProperties.from_dict(export_execution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


