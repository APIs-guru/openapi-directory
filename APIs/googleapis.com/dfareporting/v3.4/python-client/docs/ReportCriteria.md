# ReportCriteria

The report criteria for a report of type \"STANDARD\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**Activities**](Activities.md) |  | [optional] 
**custom_rich_media_events** | [**CustomRichMediaEvents**](CustomRichMediaEvents.md) |  | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension_filters** | [**List[DimensionValue]**](DimensionValue.md) | The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. | [optional] 
**dimensions** | [**List[SortedDimension]**](SortedDimension.md) | The list of standard dimensions the report should include. | [optional] 
**metric_names** | **List[str]** | The list of names of metrics the report should include. | [optional] 

## Example

```python
from openapi_client.models.report_criteria import ReportCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCriteria from a JSON string
report_criteria_instance = ReportCriteria.from_json(json)
# print the JSON string representation of the object
print(ReportCriteria.to_json())

# convert the object into a dict
report_criteria_dict = report_criteria_instance.to_dict()
# create an instance of ReportCriteria from a dict
report_criteria_from_dict = ReportCriteria.from_dict(report_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


