# StoreReleasesGetLatest200ResponseInner

Details of an uploaded release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_min_api_level** | **str** | The release&#39;s minimum required Android API level. | [optional] 
**app_display_name** | **str** | The app&#39;s display name. | [optional] 
**app_name** | **str** | The app&#39;s name (extracted from the uploaded release). | [optional] 
**bundle_identifier** | **str** | The identifier of the apps bundle. | [optional] 
**distribution_stores** | [**List[StoreReleasesGetLatest200ResponseInnerDistributionStoresInner]**](StoreReleasesGetLatest200ResponseInnerDistributionStoresInner.md) | a list of distribution stores that are associated with this release. | [optional] 
**download_url** | **str** | The URL that hosts the binary for this release. | [optional] 
**fingerprint** | **str** | MD5 checksum of the release binary. | [optional] 
**id** | **float** | ID identifying this unique release. | [optional] 
**install_url** | **str** | The href required to install a release on a mobile device. On iOS devices will be prefixed with &#x60;itms-services://?action&#x3D;download-manifest&amp;url&#x3D;&#x60; | [optional] 
**min_os** | **str** | The release&#39;s minimum required operating system. | [optional] 
**release_notes** | **str** | The release&#39;s release notes. | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist. For Android: android:versionName from AppManifest.xml.  | [optional] 
**size** | **float** | The release&#39;s size in bytes. | [optional] 
**status** | **str** | OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any &#39;available&#39; release will be associated with the default distribution group of an app.&lt;/br&gt; The release state.&lt;br&gt; &lt;b&gt;available&lt;/b&gt;: The uploaded release has been distributed.&lt;br&gt; &lt;b&gt;unavailable&lt;/b&gt;: The uploaded release is not visible to the user. &lt;br&gt;  | [optional] 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | [optional] 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist. For Android: android:versionCode from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.store_releases_get_latest200_response_inner import StoreReleasesGetLatest200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesGetLatest200ResponseInner from a JSON string
store_releases_get_latest200_response_inner_instance = StoreReleasesGetLatest200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesGetLatest200ResponseInner.to_json())

# convert the object into a dict
store_releases_get_latest200_response_inner_dict = store_releases_get_latest200_response_inner_instance.to_dict()
# create an instance of StoreReleasesGetLatest200ResponseInner from a dict
store_releases_get_latest200_response_inner_from_dict = StoreReleasesGetLatest200ResponseInner.from_dict(store_releases_get_latest200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


