# ReportReachCriteria

The report criteria for a report of type \"REACH\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**Activities**](Activities.md) |  | [optional] 
**custom_rich_media_events** | [**CustomRichMediaEvents**](CustomRichMediaEvents.md) |  | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. | [optional] 
**dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of dimensions the report should include. | [optional] 
**enable_all_dimension_combinations** | **bool** | Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days. | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 
**reach_by_frequency_metric_names** | **List[str]** | The list of names of Reach By Frequency metrics the report should include. | [optional] 

## Example

```python
from openapi_client.models.report_reach_criteria import ReportReachCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportReachCriteria from a JSON string
report_reach_criteria_instance = ReportReachCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportReachCriteria.to_json())

# convert the object into a dict
report_reach_criteria_dict = report_reach_criteria_instance.to_dict()
# create an instance of ReportReachCriteria from a dict
report_reach_criteria_from_dict = ReportReachCriteria.from_dict(report_reach_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


