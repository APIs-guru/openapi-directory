# AutoScalingMechanism

Describes the mechanism for performing auto scaling operation. Derived classes will describe the actual mechanism.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**AutoScalingMechanismKind**](AutoScalingMechanismKind.md) |  | 

## Example

```python
from openapi_client.models.auto_scaling_mechanism import AutoScalingMechanism

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScalingMechanism from a JSON string
auto_scaling_mechanism_instance = AutoScalingMechanism.from_json(json)
# print the JSON string representation of the object
print(AutoScalingMechanism.to_json())

# convert the object into a dict
auto_scaling_mechanism_dict = auto_scaling_mechanism_instance.to_dict()
# create an instance of AutoScalingMechanism from a dict
auto_scaling_mechanism_from_dict = AutoScalingMechanism.from_dict(auto_scaling_mechanism_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


