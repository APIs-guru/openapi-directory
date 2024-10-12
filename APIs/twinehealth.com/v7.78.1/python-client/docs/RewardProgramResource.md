# RewardProgramResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RewardProgramResourceAttributes**](RewardProgramResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**RewardProgramResourceRelationships**](RewardProgramResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.reward_program_resource import RewardProgramResource

# TODO update the JSON string below
json = "{}"
# create an instance of RewardProgramResource from a JSON string
reward_program_resource_instance = RewardProgramResource.from_json(json)
# print the JSON string representation of the object
print(RewardProgramResource.to_json())

# convert the object into a dict
reward_program_resource_dict = reward_program_resource_instance.to_dict()
# create an instance of RewardProgramResource from a dict
reward_program_resource_from_dict = RewardProgramResource.from_dict(reward_program_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


