# CreateRewardEarningFulfillmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardEarningFulfillmentResource**](RewardEarningFulfillmentResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_reward_earning_fulfillment_response import CreateRewardEarningFulfillmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardEarningFulfillmentResponse from a JSON string
create_reward_earning_fulfillment_response_instance = CreateRewardEarningFulfillmentResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRewardEarningFulfillmentResponse.to_json())

# convert the object into a dict
create_reward_earning_fulfillment_response_dict = create_reward_earning_fulfillment_response_instance.to_dict()
# create an instance of CreateRewardEarningFulfillmentResponse from a dict
create_reward_earning_fulfillment_response_from_dict = CreateRewardEarningFulfillmentResponse.from_dict(create_reward_earning_fulfillment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


