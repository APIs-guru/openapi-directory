# RewardProgramActivationResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RewardProgramActivationResourceAttributes**](RewardProgramActivationResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**RewardProgramActivationResourceRelationships**](RewardProgramActivationResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.reward_program_activation_resource import RewardProgramActivationResource

# TODO update the JSON string below
json = "{}"
# create an instance of RewardProgramActivationResource from a JSON string
reward_program_activation_resource_instance = RewardProgramActivationResource.from_json(json)
# print the JSON string representation of the object
print(RewardProgramActivationResource.to_json())

# convert the object into a dict
reward_program_activation_resource_dict = reward_program_activation_resource_instance.to_dict()
# create an instance of RewardProgramActivationResource from a dict
reward_program_activation_resource_from_dict = RewardProgramActivationResource.from_dict(reward_program_activation_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


