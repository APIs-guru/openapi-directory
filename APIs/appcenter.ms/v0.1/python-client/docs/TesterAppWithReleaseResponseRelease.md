# TesterAppWithReleaseResponseRelease


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | This value determines the whether a release currently is enabled or disabled. | 
**id** | **int** | ID identifying this unique release. | 
**is_external_build** | **bool** | This value determines if a release is external or not. | [optional] 
**mandatory_update** | **bool** | A boolean which determines whether the release is a mandatory update or not. | 
**origin** | **str** | The release&#39;s origin | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist.&lt;br&gt; For Android: android:versionName from AppManifest.xml.  | 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist.&lt;br&gt; For Android: android:versionCode from AppManifest.xml.  | 
**install_url** | **str** | The href required to install a release on a mobile device. On iOS devices will be prefixed with &#x60;itms-services://?action&#x3D;download-manifest&amp;url&#x3D;&#x60; | [optional] 
**release_notes** | **str** | The release&#39;s release notes. | [optional] 
**size** | **int** | The release&#39;s size in bytes. | 

## Example

```python
from openapi_client.models.tester_app_with_release_response_release import TesterAppWithReleaseResponseRelease

# TODO update the JSON string below
json = "{}"
# create an instance of TesterAppWithReleaseResponseRelease from a JSON string
tester_app_with_release_response_release_instance = TesterAppWithReleaseResponseRelease.from_json(json)
# print the JSON string representation of the object
print(TesterAppWithReleaseResponseRelease.to_json())

# convert the object into a dict
tester_app_with_release_response_release_dict = tester_app_with_release_response_release_instance.to_dict()
# create an instance of TesterAppWithReleaseResponseRelease from a dict
tester_app_with_release_response_release_from_dict = TesterAppWithReleaseResponseRelease.from_dict(tester_app_with_release_response_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


