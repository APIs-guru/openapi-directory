# RewardEarningFulfillmentResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**RewardEarningFulfillmentResourceAttributes**](RewardEarningFulfillmentResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**relationships** | [**RewardEarningFulfillmentResourceRelationships**](RewardEarningFulfillmentResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.reward_earning_fulfillment_resource import RewardEarningFulfillmentResource

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningFulfillmentResource from a JSON string
reward_earning_fulfillment_resource_instance = RewardEarningFulfillmentResource.from_json(json)
# print the JSON string representation of the object
print(RewardEarningFulfillmentResource.to_json())

# convert the object into a dict
reward_earning_fulfillment_resource_dict = reward_earning_fulfillment_resource_instance.to_dict()
# create an instance of RewardEarningFulfillmentResource from a dict
reward_earning_fulfillment_resource_from_dict = RewardEarningFulfillmentResource.from_dict(reward_earning_fulfillment_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


