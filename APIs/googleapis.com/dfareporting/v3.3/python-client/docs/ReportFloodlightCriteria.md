# ReportFloodlightCriteria

The report criteria for a report of type \"FLOODLIGHT\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_rich_media_events** | [**List[DimensionValue]**](DimensionValue.md) | The list of custom rich media events to include. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. | [optional] 
**dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of dimensions the report should include. | [optional] 
**floodlight_config_id** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 
**report_properties** | [**ReportFloodlightCriteriaReportProperties**](ReportFloodlightCriteriaReportProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_floodlight_criteria import ReportFloodlightCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFloodlightCriteria from a JSON string
report_floodlight_criteria_instance = ReportFloodlightCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportFloodlightCriteria.to_json())

# convert the object into a dict
report_floodlight_criteria_dict = report_floodlight_criteria_instance.to_dict()
# create an instance of ReportFloodlightCriteria from a dict
report_floodlight_criteria_from_dict = ReportFloodlightCriteria.from_dict(report_floodlight_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


