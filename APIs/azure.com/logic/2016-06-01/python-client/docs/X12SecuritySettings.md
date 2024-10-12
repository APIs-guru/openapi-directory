# X12SecuritySettings

The X12 agreement security settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_qualifier** | **str** | The authorization qualifier. | 
**authorization_value** | **str** | The authorization value. | [optional] 
**password_value** | **str** | The password value. | [optional] 
**security_qualifier** | **str** | The security qualifier. | 

## Example

```python
from openapi_client.models.x12_security_settings import X12SecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12SecuritySettings from a JSON string
x12_security_settings_instance = X12SecuritySettings.from_json(json)
# print the JSON string representation of the object
print(X12SecuritySettings.to_json())

# convert the object into a dict
x12_security_settings_dict = x12_security_settings_instance.to_dict()
# create an instance of X12SecuritySettings from a dict
x12_security_settings_from_dict = X12SecuritySettings.from_dict(x12_security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


