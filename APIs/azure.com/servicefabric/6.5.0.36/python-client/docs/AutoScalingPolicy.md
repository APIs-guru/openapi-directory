# AutoScalingPolicy

Describes the auto scaling policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mechanism** | [**AutoScalingMechanism**](AutoScalingMechanism.md) |  | 
**name** | **str** | The name of the auto scaling policy. | 
**trigger** | [**AutoScalingTrigger**](AutoScalingTrigger.md) |  | 

## Example

```python
from openapi_client.models.auto_scaling_policy import AutoScalingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScalingPolicy from a JSON string
auto_scaling_policy_instance = AutoScalingPolicy.from_json(json)
# print the JSON string representation of the object
print(AutoScalingPolicy.to_json())

# convert the object into a dict
auto_scaling_policy_dict = auto_scaling_policy_instance.to_dict()
# create an instance of AutoScalingPolicy from a dict
auto_scaling_policy_from_dict = AutoScalingPolicy.from_dict(auto_scaling_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


