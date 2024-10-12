# RcmAzureMigrationPolicyDetails

RCM based Azure migration specific policy details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_consistent_frequency_in_minutes** | **int** | The app consistent snapshot frequency in minutes. | [optional] 
**crash_consistent_frequency_in_minutes** | **int** | The crash consistent snapshot frequency in minutes. | [optional] 
**multi_vm_sync_status** | **str** | A value indicating whether multi-VM sync has to be enabled. | [optional] 
**recovery_point_history** | **int** | The duration in minutes until which the recovery points need to be stored. | [optional] 
**recovery_point_threshold_in_minutes** | **int** | The recovery point threshold in minutes. | [optional] 

## Example

```python
from openapi_client.models.rcm_azure_migration_policy_details import RcmAzureMigrationPolicyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RcmAzureMigrationPolicyDetails from a JSON string
rcm_azure_migration_policy_details_instance = RcmAzureMigrationPolicyDetails.from_json(json)
# print the JSON string representation of the object
print(RcmAzureMigrationPolicyDetails.to_json())

# convert the object into a dict
rcm_azure_migration_policy_details_dict = rcm_azure_migration_policy_details_instance.to_dict()
# create an instance of RcmAzureMigrationPolicyDetails from a dict
rcm_azure_migration_policy_details_from_dict = RcmAzureMigrationPolicyDetails.from_dict(rcm_azure_migration_policy_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


