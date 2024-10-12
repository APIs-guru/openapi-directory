# ReportDefinition

The definition of a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**ReportDataset**](ReportDataset.md) |  | [optional] 
**time_period** | [**ReportTimePeriod**](ReportTimePeriod.md) |  | [optional] 
**timeframe** | **str** | The time frame for pulling data for the report. If custom, then a specific time period must be provided. | 
**type** | **str** | The type of the report. | 

## Example

```python
from openapi_client.models.report_definition import ReportDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDefinition from a JSON string
report_definition_instance = ReportDefinition.from_json(json)
# print the JSON string representation of the object
print(ReportDefinition.to_json())

# convert the object into a dict
report_definition_dict = report_definition_instance.to_dict()
# create an instance of ReportDefinition from a dict
report_definition_from_dict = ReportDefinition.from_dict(report_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


