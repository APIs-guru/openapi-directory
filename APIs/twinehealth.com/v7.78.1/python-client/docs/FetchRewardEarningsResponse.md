# FetchRewardEarningsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RewardEarningResource]**](RewardEarningResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_earnings_response import FetchRewardEarningsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardEarningsResponse from a JSON string
fetch_reward_earnings_response_instance = FetchRewardEarningsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardEarningsResponse.to_json())

# convert the object into a dict
fetch_reward_earnings_response_dict = fetch_reward_earnings_response_instance.to_dict()
# create an instance of FetchRewardEarningsResponse from a dict
fetch_reward_earnings_response_from_dict = FetchRewardEarningsResponse.from_dict(fetch_reward_earnings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


