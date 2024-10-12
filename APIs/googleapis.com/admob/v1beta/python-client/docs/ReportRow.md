# ReportRow

A row of the returning report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**Dict[str, ReportRowDimensionValue]**](ReportRowDimensionValue.md) | Map of dimension values in a row, with keys as enum name of the dimensions. | [optional] 
**metric_values** | [**Dict[str, ReportRowMetricValue]**](ReportRowMetricValue.md) | Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it. | [optional] 

## Example

```python
from openapi_client.models.report_row import ReportRow

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRow from a JSON string
report_row_instance = ReportRow.from_json(json)
# print the JSON string representation of the object
print(ReportRow.to_json())

# convert the object into a dict
report_row_dict = report_row_instance.to_dict()
# create an instance of ReportRow from a dict
report_row_from_dict = ReportRow.from_dict(report_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


