# CreateRewardProgramActivationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardProgramActivationResource**](RewardProgramActivationResource.md) |  | 

## Example

```python
from openapi_client.models.create_reward_program_activation_request import CreateRewardProgramActivationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardProgramActivationRequest from a JSON string
create_reward_program_activation_request_instance = CreateRewardProgramActivationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRewardProgramActivationRequest.to_json())

# convert the object into a dict
create_reward_program_activation_request_dict = create_reward_program_activation_request_instance.to_dict()
# create an instance of CreateRewardProgramActivationRequest from a dict
create_reward_program_activation_request_from_dict = CreateRewardProgramActivationRequest.from_dict(create_reward_program_activation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


