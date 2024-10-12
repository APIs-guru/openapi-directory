# LatencyMetric

Defines the properties of a latency metric used in the latency scorecard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a_c_lower95_ci** | **float** | The lower end of the 95% confidence interval for endpoint A | [optional] [readonly] 
**a_h_upper95_ci** | **float** | The upper end of the 95% confidence interval for endpoint A | [optional] [readonly] 
**a_value** | **float** | The metric value of the A endpoint | [optional] [readonly] 
**b_c_lower95_ci** | **float** | The lower end of the 95% confidence interval for endpoint B | [optional] [readonly] 
**b_upper95_ci** | **float** | The upper end of the 95% confidence interval for endpoint B | [optional] [readonly] 
**b_value** | **float** | The metric value of the B endpoint | [optional] [readonly] 
**delta** | **float** | The difference in value between endpoint A and B | [optional] [readonly] 
**delta_percent** | **float** | The percent difference between endpoint A and B | [optional] [readonly] 
**end_date_time_utc** | **str** | The end time of the Latency Scorecard in UTC | [optional] [readonly] 
**name** | **str** | The name of the Latency Metric | [optional] [readonly] 

## Example

```python
from openapi_client.models.latency_metric import LatencyMetric

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyMetric from a JSON string
latency_metric_instance = LatencyMetric.from_json(json)
# print the JSON string representation of the object
print(LatencyMetric.to_json())

# convert the object into a dict
latency_metric_dict = latency_metric_instance.to_dict()
# create an instance of LatencyMetric from a dict
latency_metric_from_dict = LatencyMetric.from_dict(latency_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


