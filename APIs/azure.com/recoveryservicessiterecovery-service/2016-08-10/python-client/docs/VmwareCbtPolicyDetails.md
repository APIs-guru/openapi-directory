# VmwareCbtPolicyDetails

VMware Cbt specific policy details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency in minutes. | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency in minutes. | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.vmware_cbt_policy_details import VmwareCbtPolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareCbtPolicyDetails from a JSON string
vmware_cbt_policy_details_instance = VmwareCbtPolicyDetails.from_json(json)
# print the JSON string representation of the object
print(VmwareCbtPolicyDetails.to_json())

# convert the object into a dict
vmware_cbt_policy_details_dict = vmware_cbt_policy_details_instance.to_dict()
# create an instance of VmwareCbtPolicyDetails from a dict
vmware_cbt_policy_details_from_dict = VmwareCbtPolicyDetails.from_dict(vmware_cbt_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


