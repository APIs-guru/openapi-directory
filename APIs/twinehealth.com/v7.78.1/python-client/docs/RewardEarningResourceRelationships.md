# RewardEarningResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**RewardEarningFulfillmentResourceRelationshipsPatient**](RewardEarningFulfillmentResourceRelationshipsPatient.md) |  | [optional] 
**patient** | [**RewardEarningFulfillmentResourceRelationshipsPatient**](RewardEarningFulfillmentResourceRelationshipsPatient.md) |  | [optional] 
**reward** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | 
**reward_program_activation** | [**RewardEarningFulfillmentResourceRelationshipsPatient**](RewardEarningFulfillmentResourceRelationshipsPatient.md) |  | [optional] 

## Example

```python
from openapi_client.models.reward_earning_resource_relationships import RewardEarningResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningResourceRelationships from a JSON string
reward_earning_resource_relationships_instance = RewardEarningResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardEarningResourceRelationships.to_json())

# convert the object into a dict
reward_earning_resource_relationships_dict = reward_earning_resource_relationships_instance.to_dict()
# create an instance of RewardEarningResourceRelationships from a dict
reward_earning_resource_relationships_from_dict = RewardEarningResourceRelationships.from_dict(reward_earning_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


