# MetricValue

Represents a single metric value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | A boolean value. | [optional] 
**distribution_value** | [**Distribution**](Distribution.md) |  | [optional] 
**double_value** | **float** | A double precision floating point value. | [optional] 
**end_time** | **str** | The end of the time period over which this metric value&#39;s measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used. | [optional] 
**int64_value** | **str** | A signed 64-bit integer value. | [optional] 
**labels** | **Dict[str, str]** | The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels. | [optional] 
**money_value** | [**Money**](Money.md) |  | [optional] 
**start_time** | **str** | The start of the time period over which this metric value&#39;s measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used. | [optional] 
**string_value** | **str** | A text string value. | [optional] 

## Example

```python
from openapi_client.models.metric_value import MetricValue

# TODO update the JSON string below
json = "{}"
# create an instance of MetricValue from a JSON string
metric_value_instance = MetricValue.from_json(json)
# print the JSON string representation of the object
print(MetricValue.to_json())

# convert the object into a dict
metric_value_dict = metric_value_instance.to_dict()
# create an instance of MetricValue from a dict
metric_value_from_dict = MetricValue.from_dict(metric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


