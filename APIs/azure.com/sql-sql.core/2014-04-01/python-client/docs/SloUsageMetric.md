# SloUsageMetric

A Slo Usage Metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_range_time_ratio** | **float** | Gets or sets inRangeTimeRatio for SLO usage metric. | [optional] [readonly] 
**service_level_objective** | **str** | The serviceLevelObjective for SLO usage metric. | [optional] [readonly] 
**service_level_objective_id** | **str** | The serviceLevelObjectiveId for SLO usage metric. | [optional] [readonly] 

## Example

```python
from openapi_client.models.slo_usage_metric import SloUsageMetric

# TODO update the JSON string below
json = "{}"
# create an instance of SloUsageMetric from a JSON string
slo_usage_metric_instance = SloUsageMetric.from_json(json)
# print the JSON string representation of the object
print(SloUsageMetric.to_json())

# convert the object into a dict
slo_usage_metric_dict = slo_usage_metric_instance.to_dict()
# create an instance of SloUsageMetric from a dict
slo_usage_metric_from_dict = SloUsageMetric.from_dict(slo_usage_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


