# ApkManifest

An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_label** | **str** | User-readable name for the application. | [optional] 
**intent_filters** | [**List[IntentFilter]**](IntentFilter.md) |  | [optional] 
**max_sdk_version** | **int** | Maximum API level on which the application is designed to run. | [optional] 
**metadata** | [**List[Metadata]**](Metadata.md) | Meta-data tags defined in the manifest. | [optional] 
**min_sdk_version** | **int** | Minimum API level required for the application to run. | [optional] 
**package_name** | **str** | Full Java-style package name for this application, e.g. \&quot;com.example.foo\&quot;. | [optional] 
**services** | [**List[Service]**](Service.md) | Services contained in the tag. | [optional] 
**target_sdk_version** | **int** | Specifies the API Level on which the application is designed to run. | [optional] 
**uses_feature** | [**List[UsesFeature]**](UsesFeature.md) | Feature usage tags defined in the manifest. | [optional] 
**uses_permission** | **List[str]** | Permissions declared to be used by the application | [optional] 
**version_code** | **str** | Version number used internally by the app. | [optional] 
**version_name** | **str** | Version number shown to users. | [optional] 

## Example

```python
from openapi_client.models.apk_manifest import ApkManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ApkManifest from a JSON string
apk_manifest_instance = ApkManifest.from_json(json)
# print the JSON string representation of the object
print(ApkManifest.to_json())

# convert the object into a dict
apk_manifest_dict = apk_manifest_instance.to_dict()
# create an instance of ApkManifest from a dict
apk_manifest_from_dict = ApkManifest.from_dict(apk_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


