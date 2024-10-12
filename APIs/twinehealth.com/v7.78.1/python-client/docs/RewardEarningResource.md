# RewardEarningResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RewardEarningResourceAttributes**](RewardEarningResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**RewardEarningResourceRelationships**](RewardEarningResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.reward_earning_resource import RewardEarningResource

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningResource from a JSON string
reward_earning_resource_instance = RewardEarningResource.from_json(json)
# print the JSON string representation of the object
print(RewardEarningResource.to_json())

# convert the object into a dict
reward_earning_resource_dict = reward_earning_resource_instance.to_dict()
# create an instance of RewardEarningResource from a dict
reward_earning_resource_from_dict = RewardEarningResource.from_dict(reward_earning_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


