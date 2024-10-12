# TimeSettingsProperties

The properties of time settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_time_server** | **str** | The primary Network Time Protocol (NTP) server name, like &#39;time.windows.com&#39;. | [optional] 
**secondary_time_server** | **List[str]** | The secondary Network Time Protocol (NTP) server name, like &#39;time.contoso.com&#39;. It&#39;s optional. | [optional] 
**time_zone** | **str** | The timezone of device, like &#39;(UTC -06:00) Central America&#39; | 

## Example

```python
from openapi_client.models.time_settings_properties import TimeSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSettingsProperties from a JSON string
time_settings_properties_instance = TimeSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(TimeSettingsProperties.to_json())

# convert the object into a dict
time_settings_properties_dict = time_settings_properties_instance.to_dict()
# create an instance of TimeSettingsProperties from a dict
time_settings_properties_from_dict = TimeSettingsProperties.from_dict(time_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


