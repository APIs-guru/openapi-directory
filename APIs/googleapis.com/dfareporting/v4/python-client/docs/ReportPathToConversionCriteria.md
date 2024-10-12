# ReportPathToConversionCriteria

The report criteria for a report of type \"PATH_TO_CONVERSION\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of &#39;dfa:activity&#39; values to filter on. | [optional] 
**conversion_dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of conversion dimensions the report should include. | [optional] 
**custom_floodlight_variables** | [**List[SortedDimension]**](SortedDimension.md) | The list of custom floodlight variables the report should include. | [optional] 
**custom_rich_media_events** | [**List[DimensionValue]**](DimensionValue.md) | The list of custom rich media events to include. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**floodlight_config_id** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 
**per_interaction_dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of per interaction dimensions the report should include. | [optional] 
**report_properties** | [**ReportPathToConversionCriteriaReportProperties**](ReportPathToConversionCriteriaReportProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_path_to_conversion_criteria import ReportPathToConversionCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportPathToConversionCriteria from a JSON string
report_path_to_conversion_criteria_instance = ReportPathToConversionCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportPathToConversionCriteria.to_json())

# convert the object into a dict
report_path_to_conversion_criteria_dict = report_path_to_conversion_criteria_instance.to_dict()
# create an instance of ReportPathToConversionCriteria from a dict
report_path_to_conversion_criteria_from_dict = ReportPathToConversionCriteria.from_dict(report_path_to_conversion_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


