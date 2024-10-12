# CreateRewardResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardResource**](RewardResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_reward_response import CreateRewardResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardResponse from a JSON string
create_reward_response_instance = CreateRewardResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRewardResponse.to_json())

# convert the object into a dict
create_reward_response_dict = create_reward_response_instance.to_dict()
# create an instance of CreateRewardResponse from a dict
create_reward_response_from_dict = CreateRewardResponse.from_dict(create_reward_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


