# StatusReportingSettings

Settings controlling the behavior of status reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_reporting_settings** | [**ApplicationReportingSettings**](ApplicationReportingSettings.md) |  | [optional] 
**application_reports_enabled** | **bool** | Whether app reports are enabled. | [optional] 
**common_criteria_mode_enabled** | **bool** | Whether Common Criteria Mode reporting is enabled. | [optional] 
**device_settings_enabled** | **bool** | Whether device settings reporting is enabled. | [optional] 
**display_info_enabled** | **bool** | Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. | [optional] 
**hardware_status_enabled** | **bool** | Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. | [optional] 
**memory_info_enabled** | **bool** | Whether memory event reporting is enabled. | [optional] 
**network_info_enabled** | **bool** | Whether network info reporting is enabled. | [optional] 
**power_management_events_enabled** | **bool** | Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. | [optional] 
**software_info_enabled** | **bool** | Whether software info reporting is enabled. | [optional] 
**system_properties_enabled** | **bool** | Whether system properties reporting is enabled. | [optional] 

## Example

```python
from openapi_client.models.status_reporting_settings import StatusReportingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of StatusReportingSettings from a JSON string
status_reporting_settings_instance = StatusReportingSettings.from_json(json)
# print the JSON string representation of the object
print(StatusReportingSettings.to_json())

# convert the object into a dict
status_reporting_settings_dict = status_reporting_settings_instance.to_dict()
# create an instance of StatusReportingSettings from a dict
status_reporting_settings_from_dict = StatusReportingSettings.from_dict(status_reporting_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


