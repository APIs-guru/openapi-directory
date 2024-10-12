# LatencyPercentile

Latency percentile rank and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency_micros** | **str** | percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field. | [optional] 
**percent** | **int** | Percentage of samples this data point applies to. | [optional] 

## Example

```python
from openapi_client.models.latency_percentile import LatencyPercentile

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyPercentile from a JSON string
latency_percentile_instance = LatencyPercentile.from_json(json)
# print the JSON string representation of the object
print(LatencyPercentile.to_json())

# convert the object into a dict
latency_percentile_dict = latency_percentile_instance.to_dict()
# create an instance of LatencyPercentile from a dict
latency_percentile_from_dict = LatencyPercentile.from_dict(latency_percentile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


