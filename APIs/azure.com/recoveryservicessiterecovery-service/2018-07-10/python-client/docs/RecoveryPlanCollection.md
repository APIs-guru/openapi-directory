# RecoveryPlanCollection

Recovery plan collection details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[RecoveryPlan]**](RecoveryPlan.md) | The list of recovery plans. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_collection import RecoveryPlanCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanCollection from a JSON string
recovery_plan_collection_instance = RecoveryPlanCollection.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanCollection.to_json())

# convert the object into a dict
recovery_plan_collection_dict = recovery_plan_collection_instance.to_dict()
# create an instance of RecoveryPlanCollection from a dict
recovery_plan_collection_from_dict = RecoveryPlanCollection.from_dict(recovery_plan_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


