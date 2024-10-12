# RewardRequest

Reward given to a rank response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Reward to be assigned to an action. Value should be between -1 and 1 inclusive. | 

## Example

```python
from openapi_client.models.reward_request import RewardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RewardRequest from a JSON string
reward_request_instance = RewardRequest.from_json(json)
# print the JSON string representation of the object
print(RewardRequest.to_json())

# convert the object into a dict
reward_request_dict = reward_request_instance.to_dict()
# create an instance of RewardRequest from a dict
reward_request_from_dict = RewardRequest.from_dict(reward_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


