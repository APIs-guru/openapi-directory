# RegionHealthModelUsageMetricsInner

Metrics of resource usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics_value** | [**List[RegionHealthModelUsageMetricsInnerMetricsValueInner]**](RegionHealthModelUsageMetricsInnerMetricsValueInner.md) | List of usage metrics. | [optional] 
**name** | **str** | Name of the usage metric. | [optional] 

## Example

```python
from openapi_client.models.region_health_model_usage_metrics_inner import RegionHealthModelUsageMetricsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealthModelUsageMetricsInner from a JSON string
region_health_model_usage_metrics_inner_instance = RegionHealthModelUsageMetricsInner.from_json(json)
# print the JSON string representation of the object
print(RegionHealthModelUsageMetricsInner.to_json())

# convert the object into a dict
region_health_model_usage_metrics_inner_dict = region_health_model_usage_metrics_inner_instance.to_dict()
# create an instance of RegionHealthModelUsageMetricsInner from a dict
region_health_model_usage_metrics_inner_from_dict = RegionHealthModelUsageMetricsInner.from_dict(region_health_model_usage_metrics_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


