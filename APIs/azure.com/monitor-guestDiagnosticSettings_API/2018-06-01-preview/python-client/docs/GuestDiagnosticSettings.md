# GuestDiagnosticSettings

Virtual machine diagnostic settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_sources** | [**List[DataSource]**](DataSource.md) | the array of data source object which are configured to collect and send data | [optional] 
**os_type** | **str** | Operating system type for the configuration | [optional] 
**proxy_setting** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.guest_diagnostic_settings import GuestDiagnosticSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GuestDiagnosticSettings from a JSON string
guest_diagnostic_settings_instance = GuestDiagnosticSettings.from_json(json)
# print the JSON string representation of the object
print(GuestDiagnosticSettings.to_json())

# convert the object into a dict
guest_diagnostic_settings_dict = guest_diagnostic_settings_instance.to_dict()
# create an instance of GuestDiagnosticSettings from a dict
guest_diagnostic_settings_from_dict = GuestDiagnosticSettings.from_dict(guest_diagnostic_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


