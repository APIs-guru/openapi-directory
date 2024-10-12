# ServerTableAuditingPolicyProperties

Properties of a server table auditing policy.

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
from openapi_client.models.server_table_auditing_policy_properties import ServerTableAuditingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerTableAuditingPolicyProperties from a JSON string
server_table_auditing_policy_properties_instance = ServerTableAuditingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ServerTableAuditingPolicyProperties.to_json())

# convert the object into a dict
server_table_auditing_policy_properties_dict = server_table_auditing_policy_properties_instance.to_dict()
# create an instance of ServerTableAuditingPolicyProperties from a dict
server_table_auditing_policy_properties_from_dict = ServerTableAuditingPolicyProperties.from_dict(server_table_auditing_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


