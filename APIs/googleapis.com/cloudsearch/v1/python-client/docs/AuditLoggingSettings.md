# AuditLoggingSettings

Represents the settings for Cloud audit logging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_admin_read_actions** | **bool** | Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc. | [optional] 
**log_data_read_actions** | **bool** | Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc. | [optional] 
**log_data_write_actions** | **bool** | Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc. | [optional] 
**project** | **str** | The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id} | [optional] 

## Example

```python
from openapi_client.models.audit_logging_settings import AuditLoggingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLoggingSettings from a JSON string
audit_logging_settings_instance = AuditLoggingSettings.from_json(json)
# print the JSON string representation of the object
print(AuditLoggingSettings.to_json())

# convert the object into a dict
audit_logging_settings_dict = audit_logging_settings_instance.to_dict()
# create an instance of AuditLoggingSettings from a dict
audit_logging_settings_from_dict = AuditLoggingSettings.from_dict(audit_logging_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


