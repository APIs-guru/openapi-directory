# CrossDimensionReachReportCompatibleFields

Represents fields that are compatible to be selected for a report of type \"CROSS_DIMENSION_REACH\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakdown** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;breakdown\&quot; section of the report. | [optional] 
**dimension_filters** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensionFilters\&quot; section of the report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;metricNames\&quot; section of the report. | [optional] 
**overlap_metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;overlapMetricNames\&quot; section of the report. | [optional] 

## Example

```python
from openapi_client.models.cross_dimension_reach_report_compatible_fields import CrossDimensionReachReportCompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of CrossDimensionReachReportCompatibleFields from a JSON string
cross_dimension_reach_report_compatible_fields_instance = CrossDimensionReachReportCompatibleFields.from_json(json)
# print the JSON string representation of the object
print(CrossDimensionReachReportCompatibleFields.to_json())

# convert the object into a dict
cross_dimension_reach_report_compatible_fields_dict = cross_dimension_reach_report_compatible_fields_instance.to_dict()
# create an instance of CrossDimensionReachReportCompatibleFields from a dict
cross_dimension_reach_report_compatible_fields_from_dict = CrossDimensionReachReportCompatibleFields.from_dict(cross_dimension_reach_report_compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


