# MetricsResponseTimesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_response_time_ms** | **int** | The average response time in miliseconds for all the requests for this test in this time interval. | [optional] 
**success_ratio** | **int** | 1 if there&#39;s a successful request in this time interval, or 0 if there isn&#39;t. | [optional] 
**timestamp** | **int** | The timestamp in Unix format for the specified timeframe. | [optional] 

## Example

```python
from openapi_client.models.metrics_response_times_inner import MetricsResponseTimesInner

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsResponseTimesInner from a JSON string
metrics_response_times_inner_instance = MetricsResponseTimesInner.from_json(json)
# print the JSON string representation of the object
print(MetricsResponseTimesInner.to_json())

# convert the object into a dict
metrics_response_times_inner_dict = metrics_response_times_inner_instance.to_dict()
# create an instance of MetricsResponseTimesInner from a dict
metrics_response_times_inner_from_dict = MetricsResponseTimesInner.from_dict(metrics_response_times_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


