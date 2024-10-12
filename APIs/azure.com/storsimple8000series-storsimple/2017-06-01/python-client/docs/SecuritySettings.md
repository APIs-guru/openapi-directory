# SecuritySettings

The security settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecuritySettingsProperties**](SecuritySettingsProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_settings import SecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySettings from a JSON string
security_settings_instance = SecuritySettings.from_json(json)
# print the JSON string representation of the object
print(SecuritySettings.to_json())

# convert the object into a dict
security_settings_dict = security_settings_instance.to_dict()
# create an instance of SecuritySettings from a dict
security_settings_from_dict = SecuritySettings.from_dict(security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


