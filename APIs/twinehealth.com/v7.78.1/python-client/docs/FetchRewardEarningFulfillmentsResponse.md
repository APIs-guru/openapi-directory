# FetchRewardEarningFulfillmentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RewardEarningFulfillmentResource]**](RewardEarningFulfillmentResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_earning_fulfillments_response import FetchRewardEarningFulfillmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardEarningFulfillmentsResponse from a JSON string
fetch_reward_earning_fulfillments_response_instance = FetchRewardEarningFulfillmentsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardEarningFulfillmentsResponse.to_json())

# convert the object into a dict
fetch_reward_earning_fulfillments_response_dict = fetch_reward_earning_fulfillments_response_instance.to_dict()
# create an instance of FetchRewardEarningFulfillmentsResponse from a dict
fetch_reward_earning_fulfillments_response_from_dict = FetchRewardEarningFulfillmentsResponse.from_dict(fetch_reward_earning_fulfillments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


