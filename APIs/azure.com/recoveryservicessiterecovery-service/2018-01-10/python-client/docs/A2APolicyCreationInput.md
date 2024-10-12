# A2APolicyCreationInput

A2A Policy creation input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency (in minutes). | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency (in minutes). | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. Value should be &#39;Enabled&#39; or &#39;Disabled&#39;. | 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 

## Example

```python
from openapi_client.models.a2_a_policy_creation_input import A2APolicyCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2APolicyCreationInput from a JSON string
a2_a_policy_creation_input_instance = A2APolicyCreationInput.from_json(json)
# print the JSON string representation of the object
print(A2APolicyCreationInput.to_json())

# convert the object into a dict
a2_a_policy_creation_input_dict = a2_a_policy_creation_input_instance.to_dict()
# create an instance of A2APolicyCreationInput from a dict
a2_a_policy_creation_input_from_dict = A2APolicyCreationInput.from_dict(a2_a_policy_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


