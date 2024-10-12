# LatencyDistribution

Describes measured latency distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency_percentiles** | [**List[LatencyPercentile]**](LatencyPercentile.md) | Representative latency percentiles. | [optional] 

## Example

```python
from openapi_client.models.latency_distribution import LatencyDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyDistribution from a JSON string
latency_distribution_instance = LatencyDistribution.from_json(json)
# print the JSON string representation of the object
print(LatencyDistribution.to_json())

# convert the object into a dict
latency_distribution_dict = latency_distribution_instance.to_dict()
# create an instance of LatencyDistribution from a dict
latency_distribution_from_dict = LatencyDistribution.from_dict(latency_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


