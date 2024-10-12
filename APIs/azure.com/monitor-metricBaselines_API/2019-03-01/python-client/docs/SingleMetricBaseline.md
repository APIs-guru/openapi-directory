# SingleMetricBaseline

The baseline results of a single metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The metric baseline Id. | 
**name** | **str** | The name of the metric for which the baselines were retrieved. | 
**properties** | [**MetricBaselinesProperties**](MetricBaselinesProperties.md) |  | 
**type** | **str** | The resource type of the metric baseline resource. | 

## Example

```python
from openapi_client.models.single_metric_baseline import SingleMetricBaseline

# TODO update the JSON string below
json = "{}"
# create an instance of SingleMetricBaseline from a JSON string
single_metric_baseline_instance = SingleMetricBaseline.from_json(json)
# print the JSON string representation of the object
print(SingleMetricBaseline.to_json())

# convert the object into a dict
single_metric_baseline_dict = single_metric_baseline_instance.to_dict()
# create an instance of SingleMetricBaseline from a dict
single_metric_baseline_from_dict = SingleMetricBaseline.from_dict(single_metric_baseline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


