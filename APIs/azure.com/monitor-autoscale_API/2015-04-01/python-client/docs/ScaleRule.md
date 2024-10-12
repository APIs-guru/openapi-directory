# ScaleRule

A rule that provide the triggers and parameters for the scaling action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_trigger** | [**MetricTrigger**](MetricTrigger.md) |  | 
**scale_action** | [**ScaleAction**](ScaleAction.md) |  | 

## Example

```python
from openapi_client.models.scale_rule import ScaleRule

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleRule from a JSON string
scale_rule_instance = ScaleRule.from_json(json)
# print the JSON string representation of the object
print(ScaleRule.to_json())

# convert the object into a dict
scale_rule_dict = scale_rule_instance.to_dict()
# create an instance of ScaleRule from a dict
scale_rule_from_dict = ScaleRule.from_dict(scale_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


