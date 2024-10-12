# UpdateRecoveryPlanInputProperties

Recovery plan update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[RecoveryPlanGroup]**](RecoveryPlanGroup.md) | The recovery plan groups. | [optional] 

## Example

```python
from openapi_client.models.update_recovery_plan_input_properties import UpdateRecoveryPlanInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRecoveryPlanInputProperties from a JSON string
update_recovery_plan_input_properties_instance = UpdateRecoveryPlanInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateRecoveryPlanInputProperties.to_json())

# convert the object into a dict
update_recovery_plan_input_properties_dict = update_recovery_plan_input_properties_instance.to_dict()
# create an instance of UpdateRecoveryPlanInputProperties from a dict
update_recovery_plan_input_properties_from_dict = UpdateRecoveryPlanInputProperties.from_dict(update_recovery_plan_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


