# CreateRewardEarningResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardEarningResource**](RewardEarningResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_reward_earning_response import CreateRewardEarningResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardEarningResponse from a JSON string
create_reward_earning_response_instance = CreateRewardEarningResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRewardEarningResponse.to_json())

# convert the object into a dict
create_reward_earning_response_dict = create_reward_earning_response_instance.to_dict()
# create an instance of CreateRewardEarningResponse from a dict
create_reward_earning_response_from_dict = CreateRewardEarningResponse.from_dict(create_reward_earning_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


