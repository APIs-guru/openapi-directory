# SqlServerAuditConfig

SQL Server specific audit configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the destination bucket (e.g., gs://mybucket). | [optional] 
**kind** | **str** | This is always sql#sqlServerAuditConfig | [optional] 
**retention_interval** | **str** | How long to keep generated audit files. | [optional] 
**upload_interval** | **str** | How often to upload generated audit files. | [optional] 

## Example

```python
from openapi_client.models.sql_server_audit_config import SqlServerAuditConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerAuditConfig from a JSON string
sql_server_audit_config_instance = SqlServerAuditConfig.from_json(json)
# print the JSON string representation of the object
print(SqlServerAuditConfig.to_json())

# convert the object into a dict
sql_server_audit_config_dict = sql_server_audit_config_instance.to_dict()
# create an instance of SqlServerAuditConfig from a dict
sql_server_audit_config_from_dict = SqlServerAuditConfig.from_dict(sql_server_audit_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


