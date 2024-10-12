# RecoveryPlanManualActionDetails

Recovery plan manual action details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The manual action description. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_manual_action_details import RecoveryPlanManualActionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanManualActionDetails from a JSON string
recovery_plan_manual_action_details_instance = RecoveryPlanManualActionDetails.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanManualActionDetails.to_json())

# convert the object into a dict
recovery_plan_manual_action_details_dict = recovery_plan_manual_action_details_instance.to_dict()
# create an instance of RecoveryPlanManualActionDetails from a dict
recovery_plan_manual_action_details_from_dict = RecoveryPlanManualActionDetails.from_dict(recovery_plan_manual_action_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


