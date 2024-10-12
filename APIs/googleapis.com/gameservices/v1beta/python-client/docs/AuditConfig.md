# AuditConfig

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_log_configs** | [**List[AuditLogConfig]**](AuditLogConfig.md) | The configuration for logging of each type of permission. | [optional] 
**service** | **str** | Specifies a service that will be enabled for audit logging. For example, &#x60;storage.googleapis.com&#x60;, &#x60;cloudsql.googleapis.com&#x60;. &#x60;allServices&#x60; is a special value that covers all services. | [optional] 

## Example

```python
from openapi_client.models.audit_config import AuditConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuditConfig from a JSON string
audit_config_instance = AuditConfig.from_json(json)
# print the JSON string representation of the object
print(AuditConfig.to_json())

# convert the object into a dict
audit_config_dict = audit_config_instance.to_dict()
# create an instance of AuditConfig from a dict
audit_config_from_dict = AuditConfig.from_dict(audit_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


