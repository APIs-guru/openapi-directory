# RewardEarningResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earned_at** | **str** | Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired) | 
**earned_unit** | **str** | Unit of the reward that has been earned. (Read-only property) | [optional] [readonly] 
**earned_value** | **float** | Value of the reward that has been earned. (Must not exceed the allocated value for the reward) | 
**fulfilled_at** | **str** | Date at which the reward earning was fulfilled. (Read-only property) | [optional] [readonly] 
**fulfilled_value** | **float** | Value of the earned reward that has been fulfilled. (Read-only property) | [optional] [readonly] 
**ready_for_fulfillment** | **bool** | If true, the reward earning is ready to be fulfilled, either because the reward program activation was fulfill_as_earned or because the reward program activation has been deactivated. (Read-only property) | [optional] [readonly] 

## Example

```python
from openapi_client.models.reward_earning_resource_attributes import RewardEarningResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardEarningResourceAttributes from a JSON string
reward_earning_resource_attributes_instance = RewardEarningResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardEarningResourceAttributes.to_json())

# convert the object into a dict
reward_earning_resource_attributes_dict = reward_earning_resource_attributes_instance.to_dict()
# create an instance of RewardEarningResourceAttributes from a dict
reward_earning_resource_attributes_from_dict = RewardEarningResourceAttributes.from_dict(reward_earning_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


