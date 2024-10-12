# AzureFileShareProtectionPolicy

AzureStorage backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**schedule_policy** | [**SchedulePolicy**](SchedulePolicy.md) |  | [optional] 
**time_zone** | **str** | TimeZone optional input as string. For example: TimeZone &#x3D; \&quot;Pacific Standard Time\&quot;. | [optional] 
**work_load_type** | **str** | Type of workload for the backup management | [optional] 

## Example

```python
from openapi_client.models.azure_file_share_protection_policy import AzureFileShareProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareProtectionPolicy from a JSON string
azure_file_share_protection_policy_instance = AzureFileShareProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareProtectionPolicy.to_json())

# convert the object into a dict
azure_file_share_protection_policy_dict = azure_file_share_protection_policy_instance.to_dict()
# create an instance of AzureFileShareProtectionPolicy from a dict
azure_file_share_protection_policy_from_dict = AzureFileShareProtectionPolicy.from_dict(azure_file_share_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


