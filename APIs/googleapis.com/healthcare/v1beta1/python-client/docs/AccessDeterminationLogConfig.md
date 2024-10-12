# AccessDeterminationLogConfig

Configures consent audit log config for FHIR create, read, update, and delete (CRUD) operations. Cloud audit log for healthcare API must be [enabled](https://cloud.google.com/logging/docs/audit/configure-data-access#config-console-enable). The consent-related logs are included as part of `protoPayload.metadata`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_level** | **str** | Optional. Controls the amount of detail to include as part of the audit logs. | [optional] 

## Example

```python
from openapi_client.models.access_determination_log_config import AccessDeterminationLogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AccessDeterminationLogConfig from a JSON string
access_determination_log_config_instance = AccessDeterminationLogConfig.from_json(json)
# print the JSON string representation of the object
print(AccessDeterminationLogConfig.to_json())

# convert the object into a dict
access_determination_log_config_dict = access_determination_log_config_instance.to_dict()
# create an instance of AccessDeterminationLogConfig from a dict
access_determination_log_config_from_dict = AccessDeterminationLogConfig.from_dict(access_determination_log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


