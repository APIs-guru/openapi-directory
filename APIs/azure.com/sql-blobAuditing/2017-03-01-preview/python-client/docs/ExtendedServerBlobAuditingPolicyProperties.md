# ExtendedServerBlobAuditingPolicyProperties

Properties of an extended server blob auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_actions_and_groups** | **List[str]** | Specifies the Actions-Groups and Actions to audit.    The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:    BATCH_COMPLETED_GROUP,  SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,  FAILED_DATABASE_AUTHENTICATION_GROUP.    This above combination is also the set that is configured by default when enabling auditing from the Azure portal.    The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):    APPLICATION_ROLE_CHANGE_PASSWORD_GROUP  BACKUP_RESTORE_GROUP  DATABASE_LOGOUT_GROUP  DATABASE_OBJECT_CHANGE_GROUP  DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP  DATABASE_OBJECT_PERMISSION_CHANGE_GROUP  DATABASE_OPERATION_GROUP  DATABASE_PERMISSION_CHANGE_GROUP  DATABASE_PRINCIPAL_CHANGE_GROUP  DATABASE_PRINCIPAL_IMPERSONATION_GROUP  DATABASE_ROLE_MEMBER_CHANGE_GROUP  FAILED_DATABASE_AUTHENTICATION_GROUP  SCHEMA_OBJECT_ACCESS_GROUP  SCHEMA_OBJECT_CHANGE_GROUP  SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP  SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP  SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP  USER_CHANGE_PASSWORD_GROUP  BATCH_STARTED_GROUP  BATCH_COMPLETED_GROUP    These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.    For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).    For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:  SELECT  UPDATE  INSERT  DELETE  EXECUTE  RECEIVE  REFERENCES    The general form for defining an action to be audited is:  {action} ON {object} BY {principal}    Note that &lt;object&gt; in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.    For example:  SELECT on dbo.myTable by public  SELECT on DATABASE::myDatabase by public  SELECT on SCHEMA::mySchema by public    For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions) | [optional] 
**is_azure_monitor_target_enabled** | **bool** | Specifies whether audit events are sent to Azure Monitor.   In order to send the events to Azure Monitor, specify &#39;state&#39; as &#39;Enabled&#39; and &#39;isAzureMonitorTargetEnabled&#39; as true.    When using REST API to configure auditing, Diagnostic Settings with &#39;SQLSecurityAuditEvents&#39; diagnostic logs category on the database should be also created.  Note that for server level audit you should use the &#39;master&#39; database as {databaseName}.    Diagnostic Settings URI format:  PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version&#x3D;2017-05-01-preview    For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid&#x3D;2033207)  or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid&#x3D;2033043)   | [optional] 
**is_storage_secondary_key_in_use** | **bool** | Specifies whether storageAccountAccessKey value is the storage&#39;s secondary key. | [optional] 
**predicate_expression** | **str** | Specifies condition of where clause when creating an audit. | [optional] 
**queue_delay_ms** | **int** | Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.  The default minimum value is 1000 (1 second). The maximum is 2,147,483,647. | [optional] 
**retention_days** | **int** | Specifies the number of days to keep in the audit logs in the storage account. | [optional] 
**state** | **str** | Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required. | 
**storage_account_access_key** | **str** | Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. | [optional] 
**storage_account_subscription_id** | **str** | Specifies the blob storage subscription Id. | [optional] 
**storage_endpoint** | **str** | Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. | [optional] 

## Example

```python
from openapi_client.models.extended_server_blob_auditing_policy_properties import ExtendedServerBlobAuditingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedServerBlobAuditingPolicyProperties from a JSON string
extended_server_blob_auditing_policy_properties_instance = ExtendedServerBlobAuditingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ExtendedServerBlobAuditingPolicyProperties.to_json())

# convert the object into a dict
extended_server_blob_auditing_policy_properties_dict = extended_server_blob_auditing_policy_properties_instance.to_dict()
# create an instance of ExtendedServerBlobAuditingPolicyProperties from a dict
extended_server_blob_auditing_policy_properties_from_dict = ExtendedServerBlobAuditingPolicyProperties.from_dict(extended_server_blob_auditing_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


