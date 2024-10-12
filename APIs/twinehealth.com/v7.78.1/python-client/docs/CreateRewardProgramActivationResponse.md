# CreateRewardProgramActivationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardProgramActivationResource**](RewardProgramActivationResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_reward_program_activation_response import CreateRewardProgramActivationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardProgramActivationResponse from a JSON string
create_reward_program_activation_response_instance = CreateRewardProgramActivationResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRewardProgramActivationResponse.to_json())

# convert the object into a dict
create_reward_program_activation_response_dict = create_reward_program_activation_response_instance.to_dict()
# create an instance of CreateRewardProgramActivationResponse from a dict
create_reward_program_activation_response_from_dict = CreateRewardProgramActivationResponse.from_dict(create_reward_program_activation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


