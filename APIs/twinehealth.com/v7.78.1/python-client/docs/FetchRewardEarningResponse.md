# FetchRewardEarningResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardEarningResource**](RewardEarningResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_earning_response import FetchRewardEarningResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardEarningResponse from a JSON string
fetch_reward_earning_response_instance = FetchRewardEarningResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardEarningResponse.to_json())

# convert the object into a dict
fetch_reward_earning_response_dict = fetch_reward_earning_response_instance.to_dict()
# create an instance of FetchRewardEarningResponse from a dict
fetch_reward_earning_response_from_dict = FetchRewardEarningResponse.from_dict(fetch_reward_earning_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


