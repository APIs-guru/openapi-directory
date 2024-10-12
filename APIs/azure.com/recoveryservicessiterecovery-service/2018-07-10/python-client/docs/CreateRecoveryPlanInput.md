# CreateRecoveryPlanInput

Create recovery plan input class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateRecoveryPlanInputProperties**](CreateRecoveryPlanInputProperties.md) |  | 

## Example

```python
from openapi_client.models.create_recovery_plan_input import CreateRecoveryPlanInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecoveryPlanInput from a JSON string
create_recovery_plan_input_instance = CreateRecoveryPlanInput.from_json(json)
# print the JSON string representation of the object
print(CreateRecoveryPlanInput.to_json())

# convert the object into a dict
create_recovery_plan_input_dict = create_recovery_plan_input_instance.to_dict()
# create an instance of CreateRecoveryPlanInput from a dict
create_recovery_plan_input_from_dict = CreateRecoveryPlanInput.from_dict(create_recovery_plan_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


