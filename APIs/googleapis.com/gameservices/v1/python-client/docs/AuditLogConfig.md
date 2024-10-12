# AuditLogConfig

Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempted_members** | **List[str]** | Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. | [optional] 
**ignore_child_exemptions** | **bool** |  | [optional] 
**log_type** | **str** | The log type that this config enables. | [optional] 

## Example

```python
from openapi_client.models.audit_log_config import AuditLogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLogConfig from a JSON string
audit_log_config_instance = AuditLogConfig.from_json(json)
# print the JSON string representation of the object
print(AuditLogConfig.to_json())

# convert the object into a dict
audit_log_config_dict = audit_log_config_instance.to_dict()
# create an instance of AuditLogConfig from a dict
audit_log_config_from_dict = AuditLogConfig.from_dict(audit_log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


