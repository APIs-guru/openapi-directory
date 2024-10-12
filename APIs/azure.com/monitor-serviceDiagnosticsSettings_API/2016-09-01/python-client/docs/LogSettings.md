# LogSettings

Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. | [optional] 
**enabled** | **bool** | a value indicating whether this log is enabled. | 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.log_settings import LogSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LogSettings from a JSON string
log_settings_instance = LogSettings.from_json(json)
# print the JSON string representation of the object
print(LogSettings.to_json())

# convert the object into a dict
log_settings_dict = log_settings_instance.to_dict()
# create an instance of LogSettings from a dict
log_settings_from_dict = LogSettings.from_dict(log_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


