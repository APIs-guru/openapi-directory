# DiagnosticSettings

The diagnostic settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hub_authorization_rule_id** | **str** | The resource Id for the event hub authorization rule. | [optional] 
**event_hub_name** | **str** | The name of the event hub. If none is specified, the default event hub will be selected. | [optional] 
**logs** | [**List[LogSettings]**](LogSettings.md) | The list of logs settings. | [optional] 
**service_bus_rule_id** | **str** | The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. | [optional] 
**storage_account_id** | **str** | The resource ID of the storage account to which you would like to send Diagnostic Logs. | [optional] 
**workspace_id** | **str** | The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 | [optional] 

## Example

```python
from openapi_client.models.diagnostic_settings import DiagnosticSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettings from a JSON string
diagnostic_settings_instance = DiagnosticSettings.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettings.to_json())

# convert the object into a dict
diagnostic_settings_dict = diagnostic_settings_instance.to_dict()
# create an instance of DiagnosticSettings from a dict
diagnostic_settings_from_dict = DiagnosticSettings.from_dict(diagnostic_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


