# FetchRewardProgramActivationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RewardProgramActivationResource]**](RewardProgramActivationResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_program_activations_response import FetchRewardProgramActivationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardProgramActivationsResponse from a JSON string
fetch_reward_program_activations_response_instance = FetchRewardProgramActivationsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardProgramActivationsResponse.to_json())

# convert the object into a dict
fetch_reward_program_activations_response_dict = fetch_reward_program_activations_response_instance.to_dict()
# create an instance of FetchRewardProgramActivationsResponse from a dict
fetch_reward_program_activations_response_from_dict = FetchRewardProgramActivationsResponse.from_dict(fetch_reward_program_activations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


