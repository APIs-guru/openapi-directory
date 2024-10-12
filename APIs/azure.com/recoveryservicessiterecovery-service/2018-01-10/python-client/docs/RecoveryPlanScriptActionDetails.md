# RecoveryPlanScriptActionDetails

Recovery plan script action details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_location** | **str** | The fabric location. | 
**path** | **str** | The script path. | 
**timeout** | **str** | The script timeout. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_script_action_details import RecoveryPlanScriptActionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanScriptActionDetails from a JSON string
recovery_plan_script_action_details_instance = RecoveryPlanScriptActionDetails.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanScriptActionDetails.to_json())

# convert the object into a dict
recovery_plan_script_action_details_dict = recovery_plan_script_action_details_instance.to_dict()
# create an instance of RecoveryPlanScriptActionDetails from a dict
recovery_plan_script_action_details_from_dict = RecoveryPlanScriptActionDetails.from_dict(recovery_plan_script_action_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


