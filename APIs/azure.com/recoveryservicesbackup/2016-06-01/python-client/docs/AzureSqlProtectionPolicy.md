# AzureSqlProtectionPolicy

 The Azure SQL workload-specific backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_sql_protection_policy import AzureSqlProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSqlProtectionPolicy from a JSON string
azure_sql_protection_policy_instance = AzureSqlProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(AzureSqlProtectionPolicy.to_json())

# convert the object into a dict
azure_sql_protection_policy_dict = azure_sql_protection_policy_instance.to_dict()
# create an instance of AzureSqlProtectionPolicy from a dict
azure_sql_protection_policy_from_dict = AzureSqlProtectionPolicy.from_dict(azure_sql_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


