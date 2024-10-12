# ReportConfigDefinition

The definition of a report config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**ReportConfigDataset**](ReportConfigDataset.md) |  | [optional] 
**time_period** | [**ReportConfigTimePeriod**](ReportConfigTimePeriod.md) |  | [optional] 
**timeframe** | **str** | The time frame for pulling data for the report. If custom, then a specific time period must be provided. | 
**type** | **str** | The type of the report. | 

## Example

```python
from openapi_client.models.report_config_definition import ReportConfigDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigDefinition from a JSON string
report_config_definition_instance = ReportConfigDefinition.from_json(json)
# print the JSON string representation of the object
print(ReportConfigDefinition.to_json())

# convert the object into a dict
report_config_definition_dict = report_config_definition_instance.to_dict()
# create an instance of ReportConfigDefinition from a dict
report_config_definition_from_dict = ReportConfigDefinition.from_dict(report_config_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


