# ReportExecution

A report execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReportExecutionProperties**](ReportExecutionProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_execution import ReportExecution

# TODO update the JSON string below
json = "{}"
# create an instance of ReportExecution from a JSON string
report_execution_instance = ReportExecution.from_json(json)
# print the JSON string representation of the object
print(ReportExecution.to_json())

# convert the object into a dict
report_execution_dict = report_execution_instance.to_dict()
# create an instance of ReportExecution from a dict
report_execution_from_dict = ReportExecution.from_dict(report_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


