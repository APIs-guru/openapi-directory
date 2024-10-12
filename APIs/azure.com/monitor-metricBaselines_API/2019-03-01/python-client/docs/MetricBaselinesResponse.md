# MetricBaselinesResponse

A list of metric baselines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SingleMetricBaseline]**](SingleMetricBaseline.md) | The list of metric baselines. | [optional] 

## Example

```python
from openapi_client.models.metric_baselines_response import MetricBaselinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MetricBaselinesResponse from a JSON string
metric_baselines_response_instance = MetricBaselinesResponse.from_json(json)
# print the JSON string representation of the object
print(MetricBaselinesResponse.to_json())

# convert the object into a dict
metric_baselines_response_dict = metric_baselines_response_instance.to_dict()
# create an instance of MetricBaselinesResponse from a dict
metric_baselines_response_from_dict = MetricBaselinesResponse.from_dict(metric_baselines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


