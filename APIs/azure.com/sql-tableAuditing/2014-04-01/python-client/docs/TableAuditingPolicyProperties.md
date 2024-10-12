# TableAuditingPolicyProperties

Properties of a table auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_logs_table_name** | **str** | The audit logs table name. | [optional] 
**auditing_state** | **str** | The state of the policy. | [optional] 
**event_types_to_audit** | **str** | Comma-separated list of event types to audit. | [optional] 
**full_audit_logs_table_name** | **str** | The full audit logs table name. | [optional] 
**retention_days** | **str** | The number of days to keep in the audit logs. | [optional] 
**storage_account_key** | **str** | The key of the auditing storage account. | [optional] 
**storage_account_name** | **str** | The table storage account name | [optional] 
**storage_account_resource_group_name** | **str** | The table storage account resource group name | [optional] 
**storage_account_secondary_key** | **str** | The secondary key of the auditing storage account. | [optional] 
**storage_account_subscription_id** | **str** | The table storage subscription Id. | [optional] 
**storage_table_endpoint** | **str** | The storage table endpoint. | [optional] 

## Example

```python
from openapi_client.models.table_auditing_policy_properties import TableAuditingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableAuditingPolicyProperties from a JSON string
table_auditing_policy_properties_instance = TableAuditingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(TableAuditingPolicyProperties.to_json())

# convert the object into a dict
table_auditing_policy_properties_dict = table_auditing_policy_properties_instance.to_dict()
# create an instance of TableAuditingPolicyProperties from a dict
table_auditing_policy_properties_from_dict = TableAuditingPolicyProperties.from_dict(table_auditing_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


