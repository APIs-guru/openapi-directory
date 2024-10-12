# RewardEarningFulfillmentResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**RewardEarningFulfillmentResourceRelationshipsPatient**](RewardEarningFulfillmentResourceRelationshipsPatient.md) |  | [optional] 
**reward_earning** | [**EmailHistoryResourceRelationshipsReceiver**](EmailHistoryResourceRelationshipsReceiver.md) |  | 

## Example

```python
from openapi_client.models.reward_earning_fulfillment_resource_relationships import RewardEarningFulfillmentResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningFulfillmentResourceRelationships from a JSON string
reward_earning_fulfillment_resource_relationships_instance = RewardEarningFulfillmentResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardEarningFulfillmentResourceRelationships.to_json())

# convert the object into a dict
reward_earning_fulfillment_resource_relationships_dict = reward_earning_fulfillment_resource_relationships_instance.to_dict()
# create an instance of RewardEarningFulfillmentResourceRelationships from a dict
reward_earning_fulfillment_resource_relationships_from_dict = RewardEarningFulfillmentResourceRelationships.from_dict(reward_earning_fulfillment_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


