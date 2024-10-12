# RewardProgramActivationResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | 
**reward_program** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | 

## Example

```python
from openapi_client.models.reward_program_activation_resource_relationships import RewardProgramActivationResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardProgramActivationResourceRelationships from a JSON string
reward_program_activation_resource_relationships_instance = RewardProgramActivationResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardProgramActivationResourceRelationships.to_json())

# convert the object into a dict
reward_program_activation_resource_relationships_dict = reward_program_activation_resource_relationships_instance.to_dict()
# create an instance of RewardProgramActivationResourceRelationships from a dict
reward_program_activation_resource_relationships_from_dict = RewardProgramActivationResourceRelationships.from_dict(reward_program_activation_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


