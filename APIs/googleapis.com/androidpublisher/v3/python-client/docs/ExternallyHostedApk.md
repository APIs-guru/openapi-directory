# ExternallyHostedApk

Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_label** | **str** | The application label. | [optional] 
**certificate_base64s** | **List[str]** | A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array. | [optional] 
**externally_hosted_url** | **str** | The URL at which the APK is hosted. This must be an https URL. | [optional] 
**file_sha1_base64** | **str** | The sha1 checksum of this APK, represented as a base64 encoded byte array. | [optional] 
**file_sha256_base64** | **str** | The sha256 checksum of this APK, represented as a base64 encoded byte array. | [optional] 
**file_size** | **str** | The file size in bytes of this APK. | [optional] 
**icon_base64** | **str** | The icon image from the APK, as a base64 encoded byte array. | [optional] 
**maximum_sdk** | **int** | The maximum SDK supported by this APK (optional). | [optional] 
**minimum_sdk** | **int** | The minimum SDK targeted by this APK. | [optional] 
**native_codes** | **List[str]** | The native code environments supported by this APK (optional). | [optional] 
**package_name** | **str** | The package name. | [optional] 
**uses_features** | **List[str]** | The features required by this APK (optional). | [optional] 
**uses_permissions** | [**List[UsesPermission]**](UsesPermission.md) | The permissions requested by this APK. | [optional] 
**version_code** | **int** | The version code of this APK. | [optional] 
**version_name** | **str** | The version name of this APK. | [optional] 

## Example

```python
from openapi_client.models.externally_hosted_apk import ExternallyHostedApk

# TODO update the JSON string below
json = "{}"
# create an instance of ExternallyHostedApk from a JSON string
externally_hosted_apk_instance = ExternallyHostedApk.from_json(json)
# print the JSON string representation of the object
print(ExternallyHostedApk.to_json())

# convert the object into a dict
externally_hosted_apk_dict = externally_hosted_apk_instance.to_dict()
# create an instance of ExternallyHostedApk from a dict
externally_hosted_apk_from_dict = ExternallyHostedApk.from_dict(externally_hosted_apk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


