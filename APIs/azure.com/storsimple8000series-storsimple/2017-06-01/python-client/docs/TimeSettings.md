# TimeSettings

The time settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TimeSettingsProperties**](TimeSettingsProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.time_settings import TimeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSettings from a JSON string
time_settings_instance = TimeSettings.from_json(json)
# print the JSON string representation of the object
print(TimeSettings.to_json())

# convert the object into a dict
time_settings_dict = time_settings_instance.to_dict()
# create an instance of TimeSettings from a dict
time_settings_from_dict = TimeSettings.from_dict(time_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


