# AS2ErrorSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resend_if_mdn_not_received** | **bool** | The value indicating whether to resend message If MDN is not received. | [optional] 
**suspend_duplicate_message** | **bool** | The value indicating whether to suspend duplicate message. | [optional] 

## Example

```python
from openapi_client.models.as2_error_settings import AS2ErrorSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2ErrorSettings from a JSON string
as2_error_settings_instance = AS2ErrorSettings.from_json(json)
# print the JSON string representation of the object
print(AS2ErrorSettings.to_json())

# convert the object into a dict
as2_error_settings_dict = as2_error_settings_instance.to_dict()
# create an instance of AS2ErrorSettings from a dict
as2_error_settings_from_dict = AS2ErrorSettings.from_dict(as2_error_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


