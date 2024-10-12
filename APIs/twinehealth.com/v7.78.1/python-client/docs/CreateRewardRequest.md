# CreateRewardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardResource**](RewardResource.md) |  | 

## Example

```python
from openapi_client.models.create_reward_request import CreateRewardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardRequest from a JSON string
create_reward_request_instance = CreateRewardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRewardRequest.to_json())

# convert the object into a dict
create_reward_request_dict = create_reward_request_instance.to_dict()
# create an instance of CreateRewardRequest from a dict
create_reward_request_from_dict = CreateRewardRequest.from_dict(create_reward_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


