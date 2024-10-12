# WebproxySettings

The web proxy settings on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **str** | The authentication type. | 
**connection_uri** | **str** | The connection URI. | [optional] 
**username** | **str** | The webproxy username. | 

## Example

```python
from openapi_client.models.webproxy_settings import WebproxySettings

# TODO update the JSON string below
json = "{}"
# create an instance of WebproxySettings from a JSON string
webproxy_settings_instance = WebproxySettings.from_json(json)
# print the JSON string representation of the object
print(WebproxySettings.to_json())

# convert the object into a dict
webproxy_settings_dict = webproxy_settings_instance.to_dict()
# create an instance of WebproxySettings from a dict
webproxy_settings_from_dict = WebproxySettings.from_dict(webproxy_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


