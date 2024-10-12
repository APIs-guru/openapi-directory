# RewardResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RewardResourceAttributes**](RewardResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**RewardResourceRelationships**](RewardResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.reward_resource import RewardResource

# TODO update the JSON string below
json = "{}"
# create an instance of RewardResource from a JSON string
reward_resource_instance = RewardResource.from_json(json)
# print the JSON string representation of the object
print(RewardResource.to_json())

# convert the object into a dict
reward_resource_dict = reward_resource_instance.to_dict()
# create an instance of RewardResource from a dict
reward_resource_from_dict = RewardResource.from_dict(reward_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


