# AutoScalingTrigger

Describes the trigger for performing auto scaling operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**AutoScalingTriggerKind**](AutoScalingTriggerKind.md) |  | 

## Example

```python
from openapi_client.models.auto_scaling_trigger import AutoScalingTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScalingTrigger from a JSON string
auto_scaling_trigger_instance = AutoScalingTrigger.from_json(json)
# print the JSON string representation of the object
print(AutoScalingTrigger.to_json())

# convert the object into a dict
auto_scaling_trigger_dict = auto_scaling_trigger_instance.to_dict()
# create an instance of AutoScalingTrigger from a dict
auto_scaling_trigger_from_dict = AutoScalingTrigger.from_dict(auto_scaling_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


