# VMwareCbtPolicyCreationInput

VMware Cbt Policy creation input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency (in minutes). | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency (in minutes). | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 

## Example

```python
from openapi_client.models.v_mware_cbt_policy_creation_input import VMwareCbtPolicyCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtPolicyCreationInput from a JSON string
v_mware_cbt_policy_creation_input_instance = VMwareCbtPolicyCreationInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtPolicyCreationInput.to_json())

# convert the object into a dict
v_mware_cbt_policy_creation_input_dict = v_mware_cbt_policy_creation_input_instance.to_dict()
# create an instance of VMwareCbtPolicyCreationInput from a dict
v_mware_cbt_policy_creation_input_from_dict = VMwareCbtPolicyCreationInput.from_dict(v_mware_cbt_policy_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


