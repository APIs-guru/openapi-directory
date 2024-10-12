# UpdateRecoveryPlanInput

Update recovery plan input class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateRecoveryPlanInputProperties**](UpdateRecoveryPlanInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_recovery_plan_input import UpdateRecoveryPlanInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRecoveryPlanInput from a JSON string
update_recovery_plan_input_instance = UpdateRecoveryPlanInput.from_json(json)
# print the JSON string representation of the object
print(UpdateRecoveryPlanInput.to_json())

# convert the object into a dict
update_recovery_plan_input_dict = update_recovery_plan_input_instance.to_dict()
# create an instance of UpdateRecoveryPlanInput from a dict
update_recovery_plan_input_from_dict = UpdateRecoveryPlanInput.from_dict(update_recovery_plan_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


