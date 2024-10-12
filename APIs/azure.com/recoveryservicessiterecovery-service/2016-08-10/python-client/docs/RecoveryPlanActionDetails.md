# RecoveryPlanActionDetails

Recovery plan action custom details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values). | [optional] [readonly] 

## Example

```python
from openapi_client.models.recovery_plan_action_details import RecoveryPlanActionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanActionDetails from a JSON string
recovery_plan_action_details_instance = RecoveryPlanActionDetails.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanActionDetails.to_json())

# convert the object into a dict
recovery_plan_action_details_dict = recovery_plan_action_details_instance.to_dict()
# create an instance of RecoveryPlanActionDetails from a dict
recovery_plan_action_details_from_dict = RecoveryPlanActionDetails.from_dict(recovery_plan_action_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


