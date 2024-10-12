# FetchRewardResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardResource**](RewardResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_reward_response import FetchRewardResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardResponse from a JSON string
fetch_reward_response_instance = FetchRewardResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardResponse.to_json())

# convert the object into a dict
fetch_reward_response_dict = fetch_reward_response_instance.to_dict()
# create an instance of FetchRewardResponse from a dict
fetch_reward_response_from_dict = FetchRewardResponse.from_dict(fetch_reward_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


