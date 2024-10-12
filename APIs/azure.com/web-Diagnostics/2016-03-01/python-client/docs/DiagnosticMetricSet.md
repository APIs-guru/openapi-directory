# DiagnosticMetricSet

Class representing Diagnostic Metric information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the period | [optional] 
**name** | **str** | Name of the metric | [optional] 
**start_time** | **datetime** | Start time of the period | [optional] 
**time_grain** | **str** | Presented time grain. Supported grains at the moment are PT1M, PT1H, P1D | [optional] 
**unit** | **str** | Metric&#39;s unit | [optional] 
**values** | [**List[DiagnosticMetricSample]**](DiagnosticMetricSample.md) | Collection of metric values for the selected period based on the {Microsoft.Web.Hosting.Administration.DiagnosticMetricSet.TimeGrain} | [optional] 

## Example

```python
from openapi_client.models.diagnostic_metric_set import DiagnosticMetricSet

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticMetricSet from a JSON string
diagnostic_metric_set_instance = DiagnosticMetricSet.from_json(json)
# print the JSON string representation of the object
print(DiagnosticMetricSet.to_json())

# convert the object into a dict
diagnostic_metric_set_dict = diagnostic_metric_set_instance.to_dict()
# create an instance of DiagnosticMetricSet from a dict
diagnostic_metric_set_from_dict = DiagnosticMetricSet.from_dict(diagnostic_metric_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


