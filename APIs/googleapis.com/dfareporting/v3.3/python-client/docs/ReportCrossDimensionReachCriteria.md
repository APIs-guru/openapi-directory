# ReportCrossDimensionReachCriteria

The report criteria for a report of type \"CROSS_DIMENSION_REACH\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakdown** | [**List[SortedDimension]**](SortedDimension.md) | The list of dimensions the report should include. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension** | **str** | The dimension option. | [optional] 
**dimension_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of filters on which dimensions are filtered. | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 
**overlap_metric_names** | **List[str]** | The list of names of overlap metrics the report should include. | [optional] 
**pivoted** | **bool** | Whether the report is pivoted or not. Defaults to true. | [optional] 

## Example

```python
from openapi_client.models.report_cross_dimension_reach_criteria import ReportCrossDimensionReachCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCrossDimensionReachCriteria from a JSON string
report_cross_dimension_reach_criteria_instance = ReportCrossDimensionReachCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportCrossDimensionReachCriteria.to_json())

# convert the object into a dict
report_cross_dimension_reach_criteria_dict = report_cross_dimension_reach_criteria_instance.to_dict()
# create an instance of ReportCrossDimensionReachCriteria from a dict
report_cross_dimension_reach_criteria_from_dict = ReportCrossDimensionReachCriteria.from_dict(report_cross_dimension_reach_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


