# FetchRewardsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RewardResource]**](RewardResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_rewards_response import FetchRewardsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchRewardsResponse from a JSON string
fetch_rewards_response_instance = FetchRewardsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchRewardsResponse.to_json())

# convert the object into a dict
fetch_rewards_response_dict = fetch_rewards_response_instance.to_dict()
# create an instance of FetchRewardsResponse from a dict
fetch_rewards_response_from_dict = FetchRewardsResponse.from_dict(fetch_rewards_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


