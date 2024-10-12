# ApplicationReportingSettings

Settings controlling the behavior of application reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_removed_apps** | **bool** | Whether removed apps are included in application reports. | [optional] 

## Example

```python
from openapi_client.models.application_reporting_settings import ApplicationReportingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationReportingSettings from a JSON string
application_reporting_settings_instance = ApplicationReportingSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationReportingSettings.to_json())

# convert the object into a dict
application_reporting_settings_dict = application_reporting_settings_instance.to_dict()
# create an instance of ApplicationReportingSettings from a dict
application_reporting_settings_from_dict = ApplicationReportingSettings.from_dict(application_reporting_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


