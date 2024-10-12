# RewardProgramResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_unit** | **str** | Unit of the budget for the reard program. | [optional] [default to 'dollar']
**budget_value** | **float** | Value of the budget for the reward program. (Must be greater than 0) | 
**description** | **str** | Description of the reward program - designed to be a comprehensive text description | [optional] 
**duration_active** | **float** | Number of days that a program can be active after it has been activated for a patient. (Must be greater than 0) | [optional] [default to 540]
**end_at** | **str** | Date at which the reward program ends. (Must be after the start_at) | 
**frozen** | **bool** | If true, the reward program cannot be activated for a patient and new rewards cannot be created for the program. | [optional] [default to False]
**fulfill_as_earned** | **bool** | If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. | [optional] [default to False]
**name** | **str** | Name of the reward program | 
**start_at** | **str** | Date at which the reward program starts. | 
**tagline** | **str** | Tagline of the reward program - designed to be one line | [optional] 

## Example

```python
from openapi_client.models.reward_program_resource_attributes import RewardProgramResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardProgramResourceAttributes from a JSON string
reward_program_resource_attributes_instance = RewardProgramResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardProgramResourceAttributes.to_json())

# convert the object into a dict
reward_program_resource_attributes_dict = reward_program_resource_attributes_instance.to_dict()
# create an instance of RewardProgramResourceAttributes from a dict
reward_program_resource_attributes_from_dict = RewardProgramResourceAttributes.from_dict(reward_program_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


