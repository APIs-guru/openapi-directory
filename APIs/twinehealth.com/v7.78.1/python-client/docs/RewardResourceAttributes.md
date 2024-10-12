# RewardResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thread** | **str** | Unique string identifying the health action with which the reward is associated. | [optional] 
**allocated_at** | **str** | Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires) | 
**allocated_unit** | **str** | Unit of the reward program. (Read-only property) | [optional] [readonly] 
**allocated_value** | **float** | Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation) | 
**description** | **str** | Description of the reward. | 
**earned_at** | **str** | Date at which the reward was earned. (Read-only property) | [optional] [readonly] 
**earned_value** | **float** | Value of the reward that has been earned. (Read-only property) | [optional] [readonly] 
**fulfilled_at** | **str** | Date at which the reward earning was fulfilled. (Read-only property) | [optional] [readonly] 
**fulfilled_value** | **float** | Value of the earned reward that has been fulfilled. (Read-only property) | [optional] [readonly] 
**target_at** | **str** | Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date) | [optional] 

## Example

```python
from openapi_client.models.reward_resource_attributes import RewardResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardResourceAttributes from a JSON string
reward_resource_attributes_instance = RewardResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardResourceAttributes.to_json())

# convert the object into a dict
reward_resource_attributes_dict = reward_resource_attributes_instance.to_dict()
# create an instance of RewardResourceAttributes from a dict
reward_resource_attributes_from_dict = RewardResourceAttributes.from_dict(reward_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


