# ScalingPolicyDescription

Describes how the scaling should be performed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scaling_mechanism** | [**ScalingMechanismDescription**](ScalingMechanismDescription.md) |  | 
**scaling_trigger** | [**ScalingTriggerDescription**](ScalingTriggerDescription.md) |  | 

## Example

```python
from openapi_client.models.scaling_policy_description import ScalingPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ScalingPolicyDescription from a JSON string
scaling_policy_description_instance = ScalingPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(ScalingPolicyDescription.to_json())

# convert the object into a dict
scaling_policy_description_dict = scaling_policy_description_instance.to_dict()
# create an instance of ScalingPolicyDescription from a dict
scaling_policy_description_from_dict = ScalingPolicyDescription.from_dict(scaling_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


