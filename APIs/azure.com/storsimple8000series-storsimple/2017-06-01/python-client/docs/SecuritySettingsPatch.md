# SecuritySettingsPatch

Represents the patch request for the security settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecuritySettingsPatchProperties**](SecuritySettingsPatchProperties.md) |  | 

## Example

```python
from openapi_client.models.security_settings_patch import SecuritySettingsPatch

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySettingsPatch from a JSON string
security_settings_patch_instance = SecuritySettingsPatch.from_json(json)
# print the JSON string representation of the object
print(SecuritySettingsPatch.to_json())

# convert the object into a dict
security_settings_patch_dict = security_settings_patch_instance.to_dict()
# create an instance of SecuritySettingsPatch from a dict
security_settings_patch_from_dict = SecuritySettingsPatch.from_dict(security_settings_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


