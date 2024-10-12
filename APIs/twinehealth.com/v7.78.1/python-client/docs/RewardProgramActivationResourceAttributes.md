# RewardProgramActivationResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_at** | **str** | Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program) | 
**active** | **bool** | If true, the reward program is currently active. | [optional] [default to True]
**allocated_count** | **float** | Number of rewards allocated. (Read-only property) | [optional] [readonly] 
**budget_unit** | **str** | Unit of the reward program budget. (Read-only property) | [optional] [readonly] 
**deactivated_at** | **str** | Date at which the reward program was deactivated. (Must be after the activated_at date) | [optional] 
**earned_count** | **float** | Number of reward earnings. (Read-only property) | [optional] [readonly] 
**expires_at** | **str** | Date at which the reward program activation expires. (Read-only property set by adding the days_active from the reward program to the activated_at date) | [optional] [readonly] 
**fulfill_as_earned** | **bool** | If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. (Read-only property denormalized from the reward program) | [optional] [readonly] 
**total_allocated_value** | **float** | Total value of reward allocated. (Read-only property) | [optional] [readonly] 
**total_earned_value** | **float** | Total value of reward earnings. (Read-only property) | [optional] [readonly] 

## Example

```python
from openapi_client.models.reward_program_activation_resource_attributes import RewardProgramActivationResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardProgramActivationResourceAttributes from a JSON string
reward_program_activation_resource_attributes_instance = RewardProgramActivationResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardProgramActivationResourceAttributes.to_json())

# convert the object into a dict
reward_program_activation_resource_attributes_dict = reward_program_activation_resource_attributes_instance.to_dict()
# create an instance of RewardProgramActivationResourceAttributes from a dict
reward_program_activation_resource_attributes_from_dict = RewardProgramActivationResourceAttributes.from_dict(reward_program_activation_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


