# FetchRewardProgramActivationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardProgramActivationResource**](RewardProgramActivationResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_program_activation_response import FetchRewardProgramActivationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardProgramActivationResponse from a JSON string
fetch_reward_program_activation_response_instance = FetchRewardProgramActivationResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardProgramActivationResponse.to_json())

# convert the object into a dict
fetch_reward_program_activation_response_dict = fetch_reward_program_activation_response_instance.to_dict()
# create an instance of FetchRewardProgramActivationResponse from a dict
fetch_reward_program_activation_response_from_dict = FetchRewardProgramActivationResponse.from_dict(fetch_reward_program_activation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


