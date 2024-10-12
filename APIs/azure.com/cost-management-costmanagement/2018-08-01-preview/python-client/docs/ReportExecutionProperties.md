# ReportExecutionProperties

The properties of the report execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_type** | **str** | The type of the report execution. | [optional] 
**file_name** | **str** | The name of the file report got written to. | [optional] 
**processing_end_time** | **datetime** | The time when report execution finished. | [optional] 
**processing_start_time** | **datetime** | The time when report was picked up to be executed. | [optional] 
**report_settings** | [**CommonReportProperties**](CommonReportProperties.md) |  | [optional] 
**status** | **str** | The status of the report execution. | [optional] 
**submitted_by** | **str** | The identifier for the entity that executed the report. For OnDemand executions, it is the email id. For Scheduled executions, it is the constant value - System. | [optional] 
**submitted_time** | **datetime** | The time when report was queued to be executed. | [optional] 

## Example

```python
from openapi_client.models.report_execution_properties import ReportExecutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReportExecutionProperties from a JSON string
report_execution_properties_instance = ReportExecutionProperties.from_json(json)
# print the JSON string representation of the object
print(ReportExecutionProperties.to_json())

# convert the object into a dict
report_execution_properties_dict = report_execution_properties_instance.to_dict()
# create an instance of ReportExecutionProperties from a dict
report_execution_properties_from_dict = ReportExecutionProperties.from_dict(report_execution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


