# UsageMetric

A metric describing the usage of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | The current value of the metric. | [optional] 
**limit** | **float** | The quota limit for the metric. | [optional] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**next_reset_time** | **datetime** | The time that the metric&#39;s value will reset. | [optional] 
**quota_period** | **str** | The quota period that determines the length of time between value resets. | [optional] 
**unit** | **str** | The units used for the metric. | [optional] 

## Example

```python
from openapi_client.models.usage_metric import UsageMetric

# TODO update the JSON string below
json = "{}"
# create an instance of UsageMetric from a JSON string
usage_metric_instance = UsageMetric.from_json(json)
# print the JSON string representation of the object
print(UsageMetric.to_json())

# convert the object into a dict
usage_metric_dict = usage_metric_instance.to_dict()
# create an instance of UsageMetric from a dict
usage_metric_from_dict = UsageMetric.from_dict(usage_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


