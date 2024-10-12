# FinalReportUsage

This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The charge currency in ISO 4217 format. | [optional] 
**price** | **str** | The charge amount as a stringified number. | [optional] 

## Example

```python
from openapi_client.models.final_report_usage import FinalReportUsage

# TODO update the JSON string below
json = "{}"
# create an instance of FinalReportUsage from a JSON string
final_report_usage_instance = FinalReportUsage.from_json(json)
# print the JSON string representation of the object
print(FinalReportUsage.to_json())

# convert the object into a dict
final_report_usage_dict = final_report_usage_instance.to_dict()
# create an instance of FinalReportUsage from a dict
final_report_usage_from_dict = FinalReportUsage.from_dict(final_report_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


