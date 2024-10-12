# MetricRule

Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_costs** | **Dict[str, str]** | Metrics to update when the selected methods are called, and the associated cost applied to each metric. The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.metric_rule import MetricRule

# TODO update the JSON string below
json = "{}"
# create an instance of MetricRule from a JSON string
metric_rule_instance = MetricRule.from_json(json)
# print the JSON string representation of the object
print(MetricRule.to_json())

# convert the object into a dict
metric_rule_dict = metric_rule_instance.to_dict()
# create an instance of MetricRule from a dict
metric_rule_from_dict = MetricRule.from_dict(metric_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


