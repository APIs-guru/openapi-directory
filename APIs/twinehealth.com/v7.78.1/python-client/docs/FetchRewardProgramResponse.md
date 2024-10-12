# FetchRewardProgramResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardProgramResource**](RewardProgramResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_program_response import FetchRewardProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardProgramResponse from a JSON string
fetch_reward_program_response_instance = FetchRewardProgramResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardProgramResponse.to_json())

# convert the object into a dict
fetch_reward_program_response_dict = fetch_reward_program_response_instance.to_dict()
# create an instance of FetchRewardProgramResponse from a dict
fetch_reward_program_response_from_dict = FetchRewardProgramResponse.from_dict(fetch_reward_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


