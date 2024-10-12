# SignalRCorsSettings

Cross-Origin Resource Sharing (CORS) settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_origins** | **List[str]** | Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use \&quot;*\&quot; to allow all. If omitted, allow all by default. | [optional] 

## Example

```python
from openapi_client.models.signal_r_cors_settings import SignalRCorsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRCorsSettings from a JSON string
signal_r_cors_settings_instance = SignalRCorsSettings.from_json(json)
# print the JSON string representation of the object
print(SignalRCorsSettings.to_json())

# convert the object into a dict
signal_r_cors_settings_dict = signal_r_cors_settings_instance.to_dict()
# create an instance of SignalRCorsSettings from a dict
signal_r_cors_settings_from_dict = SignalRCorsSettings.from_dict(signal_r_cors_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


