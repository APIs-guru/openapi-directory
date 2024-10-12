# DiagnosticMetricSample

Class representing Diagnostic Metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_aggregated** | **bool** | Whether the values are aggregates across all workers or not | [optional] 
**maximum** | **float** | Maximum of the metric sampled during the time period | [optional] 
**minimum** | **float** | Minimum of the metric sampled during the time period | [optional] 
**role_instance** | **str** | Role Instance. Null if this counter is not per instance  This is returned and should be whichever instance name we desire to be returned i.e. CPU and Memory return RDWORKERNAME (LargeDed..._IN_0)  where RDWORKERNAME is Machine name below and RoleInstance name in parenthesis | [optional] 
**timestamp** | **datetime** | Time at which metric is measured | [optional] 
**total** | **float** | Total value of the metric. If multiple measurements are made this will have sum of all. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_metric_sample import DiagnosticMetricSample

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticMetricSample from a JSON string
diagnostic_metric_sample_instance = DiagnosticMetricSample.from_json(json)
# print the JSON string representation of the object
print(DiagnosticMetricSample.to_json())

# convert the object into a dict
diagnostic_metric_sample_dict = diagnostic_metric_sample_instance.to_dict()
# create an instance of DiagnosticMetricSample from a dict
diagnostic_metric_sample_from_dict = DiagnosticMetricSample.from_dict(diagnostic_metric_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


