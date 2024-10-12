# ServiceDiagnosticSettings

The diagnostic settings for service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**List[LogSettings]**](LogSettings.md) | the list of logs settings. | [optional] 
**metrics** | [**List[MetricSettings]**](MetricSettings.md) | the list of metric settings. | [optional] 
**service_bus_rule_id** | **str** | The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming Diagnostic Logs. The rule ID is of the format: &#39;{service bus resource ID}/authorizationrules/{key name}&#39;. | [optional] 
**storage_account_id** | **str** | The resource ID of the storage account to which you would like to send Diagnostic Logs. | [optional] 
**workspace_id** | **str** | The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 | [optional] 

## Example

```python
from openapi_client.models.service_diagnostic_settings import ServiceDiagnosticSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDiagnosticSettings from a JSON string
service_diagnostic_settings_instance = ServiceDiagnosticSettings.from_json(json)
# print the JSON string representation of the object
print(ServiceDiagnosticSettings.to_json())

# convert the object into a dict
service_diagnostic_settings_dict = service_diagnostic_settings_instance.to_dict()
# create an instance of ServiceDiagnosticSettings from a dict
service_diagnostic_settings_from_dict = ServiceDiagnosticSettings.from_dict(service_diagnostic_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


