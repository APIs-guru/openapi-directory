# RewardResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**RewardEarningFulfillmentResourceRelationshipsPatient**](RewardEarningFulfillmentResourceRelationshipsPatient.md) |  | [optional] 
**reward_program_activation** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | 

## Example

```python
from openapi_client.models.reward_resource_relationships import RewardResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardResourceRelationships from a JSON string
reward_resource_relationships_instance = RewardResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardResourceRelationships.to_json())

# convert the object into a dict
reward_resource_relationships_dict = reward_resource_relationships_instance.to_dict()
# create an instance of RewardResourceRelationships from a dict
reward_resource_relationships_from_dict = RewardResourceRelationships.from_dict(reward_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


