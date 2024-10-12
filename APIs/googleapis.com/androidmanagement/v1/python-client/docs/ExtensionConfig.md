# ExtensionConfig

Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_receiver** | **str** | Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates. | [optional] 
**signing_key_fingerprints_sha256** | **List[str]** | Hex-encoded SHA-256 hash of the signing certificate of the extension app. Only hexadecimal string representations of 64 characters are valid.If not specified, the signature for the corresponding package name is obtained from the Play Store instead.If this list is empty, the signature of the extension app on the device must match the signature obtained from the Play Store for the app to be able to communicate with Android Device Policy.If this list is not empty, the signature of the extension app on the device must match one of the entries in this list for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty. | [optional] 

## Example

```python
from openapi_client.models.extension_config import ExtensionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionConfig from a JSON string
extension_config_instance = ExtensionConfig.from_json(json)
# print the JSON string representation of the object
print(ExtensionConfig.to_json())

# convert the object into a dict
extension_config_dict = extension_config_instance.to_dict()
# create an instance of ExtensionConfig from a dict
extension_config_from_dict = ExtensionConfig.from_dict(extension_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


