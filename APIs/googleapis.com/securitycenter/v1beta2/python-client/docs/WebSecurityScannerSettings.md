# WebSecurityScannerSettings

Resource capturing the settings for the Web Security Scanner service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | [**Dict[str, Config]**](Config.md) | The configurations including the state of enablement for the service&#39;s different modules. The absence of a module in the map implies its configuration is inherited from its parent&#39;s. | [optional] 
**name** | **str** | The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings | [optional] 
**service_enablement_state** | **str** | The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. | [optional] 
**update_time** | **str** | Output only. The time the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_security_scanner_settings import WebSecurityScannerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of WebSecurityScannerSettings from a JSON string
web_security_scanner_settings_instance = WebSecurityScannerSettings.from_json(json)
# print the JSON string representation of the object
print(WebSecurityScannerSettings.to_json())

# convert the object into a dict
web_security_scanner_settings_dict = web_security_scanner_settings_instance.to_dict()
# create an instance of WebSecurityScannerSettings from a dict
web_security_scanner_settings_from_dict = WebSecurityScannerSettings.from_dict(web_security_scanner_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


