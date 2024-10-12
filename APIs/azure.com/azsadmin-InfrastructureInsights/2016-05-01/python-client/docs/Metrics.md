# Metrics

Metrics for a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ma_counter_name** | **str** | Name of the counter. | [optional] 
**name** | **str** | Name of the usage metric. | [optional] 
**observed_timestamp** | **datetime** | Time counter was observed. | [optional] 
**source_name** | [**MetricsSourceType**](MetricsSourceType.md) |  | [optional] 
**source_type** | **str** | Type of the source. | [optional] 
**unit** | [**MetricsUnit**](MetricsUnit.md) |  | [optional] 
**value** | **float** | Name of the usage metric. | [optional] 

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


