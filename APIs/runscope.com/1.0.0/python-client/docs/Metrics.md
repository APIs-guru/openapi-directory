# Metrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes_from_last_period** | **object** | The changes in average response time compared to the last period. | [optional] 
**environment_uuid** | **str** | The environment_uuid that filters this request. | [optional] 
**region** | **str** | The region that filters this request. | [optional] 
**response_times** | [**List[MetricsResponseTimesInner]**](MetricsResponseTimesInner.md) | The list of response times based on the timeframe of the request. | [optional] 
**this_time_period** | **object** | The average response time for different percentiles for the request in the requested timeframe. | [optional] 
**timeframe** | **str** | The timeframe that filters this request. | [optional] 

## Example

```python
from openapi_client.models.metrics import Metrics

# TODO update the JSON string below
json = "{}"
# create an instance of Metrics from a JSON string
metrics_instance = Metrics.from_json(json)
# print the JSON string representation of the object
print(Metrics.to_json())

# convert the object into a dict
metrics_dict = metrics_instance.to_dict()
# create an instance of Metrics from a dict
metrics_from_dict = Metrics.from_dict(metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


