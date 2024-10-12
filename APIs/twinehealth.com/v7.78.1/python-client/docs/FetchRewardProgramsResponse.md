# FetchRewardProgramsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RewardProgramResource]**](RewardProgramResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_programs_response import FetchRewardProgramsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardProgramsResponse from a JSON string
fetch_reward_programs_response_instance = FetchRewardProgramsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardProgramsResponse.to_json())

# convert the object into a dict
fetch_reward_programs_response_dict = fetch_reward_programs_response_instance.to_dict()
# create an instance of FetchRewardProgramsResponse from a dict
fetch_reward_programs_response_from_dict = FetchRewardProgramsResponse.from_dict(fetch_reward_programs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


