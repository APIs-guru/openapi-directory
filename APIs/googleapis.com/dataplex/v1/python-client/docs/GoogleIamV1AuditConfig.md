# GoogleIamV1AuditConfig

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_log_configs** | [**List[GoogleIamV1AuditLogConfig]**](GoogleIamV1AuditLogConfig.md) | The configuration for logging of each type of permission. | [optional] 
**service** | **str** | Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_audit_config import GoogleIamV1AuditConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1AuditConfig from a JSON string
google_iam_v1_audit_config_instance = GoogleIamV1AuditConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1AuditConfig.to_json())

# convert the object into a dict
google_iam_v1_audit_config_dict = google_iam_v1_audit_config_instance.to_dict()
# create an instance of GoogleIamV1AuditConfig from a dict
google_iam_v1_audit_config_from_dict = GoogleIamV1AuditConfig.from_dict(google_iam_v1_audit_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


