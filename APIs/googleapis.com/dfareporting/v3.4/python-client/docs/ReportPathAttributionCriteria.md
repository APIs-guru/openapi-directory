# ReportPathAttributionCriteria

The report criteria for a report of type \"PATH_ATTRIBUTION\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of &#39;dfa:activity&#39; values to filter on. | [optional] 
**custom_channel_grouping** | [**ChannelGrouping**](ChannelGrouping.md) |  | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of dimensions the report should include. | [optional] 
**floodlight_config_id** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 
**path_filters** | [**List[PathFilter]**](PathFilter.md) | Path Filters. | [optional] 

## Example

```python
from openapi_client.models.report_path_attribution_criteria import ReportPathAttributionCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportPathAttributionCriteria from a JSON string
report_path_attribution_criteria_instance = ReportPathAttributionCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportPathAttributionCriteria.to_json())

# convert the object into a dict
report_path_attribution_criteria_dict = report_path_attribution_criteria_instance.to_dict()
# create an instance of ReportPathAttributionCriteria from a dict
report_path_attribution_criteria_from_dict = ReportPathAttributionCriteria.from_dict(report_path_attribution_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


