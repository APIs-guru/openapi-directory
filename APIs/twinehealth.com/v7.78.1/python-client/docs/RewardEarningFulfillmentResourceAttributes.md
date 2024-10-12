# RewardEarningFulfillmentResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfilled_at** | **str** | Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned) | 
**fulfilled_unit** | **str** | Unit of the earned reward that has been fulfilled. (Read-only property) | [optional] [readonly] 
**fulfilled_value** | **float** | Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0) | 

## Example

```python
from openapi_client.models.reward_earning_fulfillment_resource_attributes import RewardEarningFulfillmentResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningFulfillmentResourceAttributes from a JSON string
reward_earning_fulfillment_resource_attributes_instance = RewardEarningFulfillmentResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardEarningFulfillmentResourceAttributes.to_json())

# convert the object into a dict
reward_earning_fulfillment_resource_attributes_dict = reward_earning_fulfillment_resource_attributes_instance.to_dict()
# create an instance of RewardEarningFulfillmentResourceAttributes from a dict
reward_earning_fulfillment_resource_attributes_from_dict = RewardEarningFulfillmentResourceAttributes.from_dict(reward_earning_fulfillment_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


