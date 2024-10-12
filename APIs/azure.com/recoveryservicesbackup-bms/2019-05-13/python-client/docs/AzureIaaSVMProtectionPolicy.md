# AzureIaaSVMProtectionPolicy

IaaS VM workload-specific backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instant_rp_retention_range_in_days** | **int** | Instant RP retention policy range in days | [optional] 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**schedule_policy** | [**SchedulePolicy**](SchedulePolicy.md) |  | [optional] 
**time_zone** | **str** | TimeZone optional input as string. For example: TimeZone &#x3D; \&quot;Pacific Standard Time\&quot;. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_protection_policy import AzureIaaSVMProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMProtectionPolicy from a JSON string
azure_iaa_svm_protection_policy_instance = AzureIaaSVMProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMProtectionPolicy.to_json())

# convert the object into a dict
azure_iaa_svm_protection_policy_dict = azure_iaa_svm_protection_policy_instance.to_dict()
# create an instance of AzureIaaSVMProtectionPolicy from a dict
azure_iaa_svm_protection_policy_from_dict = AzureIaaSVMProtectionPolicy.from_dict(azure_iaa_svm_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


