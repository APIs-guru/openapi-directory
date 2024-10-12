# DatabaseBlobAuditingPolicyProperties

Properties of a database blob auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_actions_and_groups** | **List[str]** | Specifies the Actions and Actions-Groups to audit. | [optional] 
**is_storage_secondary_key_in_use** | **bool** | Specifies whether storageAccountAccessKey value is the storage’s secondary key. | [optional] 
**retention_days** | **int** | Specifies the number of days to keep in the audit logs. | [optional] 
**state** | **str** | Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required. | 
**storage_account_access_key** | **str** | Specifies the identifier key of the auditing storage account. If state is Enabled, storageAccountAccessKey is required. | [optional] 
**storage_account_subscription_id** | **str** | Specifies the blob storage subscription Id. | [optional] 
**storage_endpoint** | **str** | Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required. | [optional] 

## Example

```python
from openapi_client.models.database_blob_auditing_policy_properties import DatabaseBlobAuditingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseBlobAuditingPolicyProperties from a JSON string
database_blob_auditing_policy_properties_instance = DatabaseBlobAuditingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseBlobAuditingPolicyProperties.to_json())

# convert the object into a dict
database_blob_auditing_policy_properties_dict = database_blob_auditing_policy_properties_instance.to_dict()
# create an instance of DatabaseBlobAuditingPolicyProperties from a dict
database_blob_auditing_policy_properties_from_dict = DatabaseBlobAuditingPolicyProperties.from_dict(database_blob_auditing_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


