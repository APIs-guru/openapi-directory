# CreateRewardEarningRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardEarningResource**](RewardEarningResource.md) |  | 

## Example

```python
from openapi_client.models.create_reward_earning_request import CreateRewardEarningRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardEarningRequest from a JSON string
create_reward_earning_request_instance = CreateRewardEarningRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRewardEarningRequest.to_json())

# convert the object into a dict
create_reward_earning_request_dict = create_reward_earning_request_instance.to_dict()
# create an instance of CreateRewardEarningRequest from a dict
create_reward_earning_request_from_dict = CreateRewardEarningRequest.from_dict(create_reward_earning_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


