# FetchRewardEarningFulfillmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardEarningFulfillmentResource**](RewardEarningFulfillmentResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_earning_fulfillment_response import FetchRewardEarningFulfillmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardEarningFulfillmentResponse from a JSON string
fetch_reward_earning_fulfillment_response_instance = FetchRewardEarningFulfillmentResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardEarningFulfillmentResponse.to_json())

# convert the object into a dict
fetch_reward_earning_fulfillment_response_dict = fetch_reward_earning_fulfillment_response_instance.to_dict()
# create an instance of FetchRewardEarningFulfillmentResponse from a dict
fetch_reward_earning_fulfillment_response_from_dict = FetchRewardEarningFulfillmentResponse.from_dict(fetch_reward_earning_fulfillment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


