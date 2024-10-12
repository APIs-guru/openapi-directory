# ApigatewayAuditLogConfig

Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempted_members** | **List[str]** | Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. | [optional] 
**log_type** | **str** | The log type that this config enables. | [optional] 

## Example

```python
from openapi_client.models.apigateway_audit_log_config import ApigatewayAuditLogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayAuditLogConfig from a JSON string
apigateway_audit_log_config_instance = ApigatewayAuditLogConfig.from_json(json)
# print the JSON string representation of the object
print(ApigatewayAuditLogConfig.to_json())

# convert the object into a dict
apigateway_audit_log_config_dict = apigateway_audit_log_config_instance.to_dict()
# create an instance of ApigatewayAuditLogConfig from a dict
apigateway_audit_log_config_from_dict = ApigatewayAuditLogConfig.from_dict(apigateway_audit_log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


