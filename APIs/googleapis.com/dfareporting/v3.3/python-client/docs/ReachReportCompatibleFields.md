# ReachReportCompatibleFields

Represents fields that are compatible to be selected for a report of type \"REACH\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filters** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensionFilters\&quot; section of the report. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensions\&quot; section of the report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;metricNames\&quot; section of the report. | [optional] 
**pivoted_activity_metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected as activity metrics to pivot on in the \&quot;activities\&quot; section of the report. | [optional] 
**reach_by_frequency_metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;reachByFrequencyMetricNames\&quot; section of the report. | [optional] 

## Example

```python
from openapi_client.models.reach_report_compatible_fields import ReachReportCompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of ReachReportCompatibleFields from a JSON string
reach_report_compatible_fields_instance = ReachReportCompatibleFields.from_json(json)
# print the JSON string representation of the object
print(ReachReportCompatibleFields.to_json())

# convert the object into a dict
reach_report_compatible_fields_dict = reach_report_compatible_fields_instance.to_dict()
# create an instance of ReachReportCompatibleFields from a dict
reach_report_compatible_fields_from_dict = ReachReportCompatibleFields.from_dict(reach_report_compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


