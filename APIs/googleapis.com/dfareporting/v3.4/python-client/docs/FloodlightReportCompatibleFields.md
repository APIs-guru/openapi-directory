# FloodlightReportCompatibleFields

Represents fields that are compatible to be selected for a report of type \"FlOODLIGHT\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filters** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensionFilters\&quot; section of the report. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensions\&quot; section of the report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;metricNames\&quot; section of the report. | [optional] 

## Example

```python
from openapi_client.models.floodlight_report_compatible_fields import FloodlightReportCompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightReportCompatibleFields from a JSON string
floodlight_report_compatible_fields_instance = FloodlightReportCompatibleFields.from_json(json)
# print the JSON string representation of the object
print(FloodlightReportCompatibleFields.to_json())

# convert the object into a dict
floodlight_report_compatible_fields_dict = floodlight_report_compatible_fields_instance.to_dict()
# create an instance of FloodlightReportCompatibleFields from a dict
floodlight_report_compatible_fields_from_dict = FloodlightReportCompatibleFields.from_dict(floodlight_report_compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


