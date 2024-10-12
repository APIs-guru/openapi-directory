# PrivateReleaseDetailsResponse

Details of an uploaded release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_min_api_level** | **str** | The release&#39;s minimum required Android API level. | [optional] 
**app_display_name** | **str** | The app&#39;s display name. | [optional] 
**app_icon_url** | **str** | A URL to the app&#39;s icon. | [optional] 
**app_name** | **str** | The app&#39;s name (extracted from the uploaded release). | [optional] 
**bundle_identifier** | **str** | The identifier of the apps bundle. | [optional] 
**destination_type** | **str** | The destination type.&lt;br&gt; &lt;b&gt;group&lt;/b&gt;: The release distributed to internal groups and distribution_groups details will be returned.&lt;br&gt; &lt;b&gt;store&lt;/b&gt;: The release distributed to external stores and distribution_stores details will be returned. &lt;br&gt;  | [optional] 
**device_family** | **str** | The release&#39;s device family. | [optional] 
**distribution_group_id** | **str** | the destination where release is distributed | [optional] 
**download_url** | **str** | The URL that hosts the binary for this release. | [optional] 
**fingerprint** | **str** | MD5 checksum of the release binary. | [optional] 
**id** | **int** | ID identifying this unique release. | [optional] 
**install_url** | **str** | The href required to install a release on a mobile device. On iOS devices will be prefixed with &#x60;itms-services://?action&#x3D;download-manifest&amp;url&#x3D;&#x60; | [optional] 
**is_external_build** | **bool** | This value determines if a release is external or not. | [optional] 
**is_provisioning_profile_syncing** | **bool** | A flag that determines whether the release&#39;s provisioning profile is still extracted or not. | [optional] 
**min_os** | **str** | The release&#39;s minimum required operating system. | [optional] 
**origin** | **str** | The release&#39;s origin | [optional] 
**provisioning_profile_name** | **str** | The release&#39;s provisioning profile name. | [optional] 
**provisioning_profile_type** | **str** | The type of the provisioning profile for the requested app version. | [optional] 
**publishing_status** | **str** | the publishing status of the distributed release | [optional] 
**release_notes** | **str** | The release&#39;s release notes. | [optional] 
**secondary_download_url** | **str** | The URL that hosts the secondary binary for this release, such as the apk file for aab releases. | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist. For Android: android:versionName from AppManifest.xml.  | [optional] 
**size** | **int** | The release&#39;s size in bytes. | [optional] 
**status** | **str** | OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any &#39;available&#39; release will be associated with the default distribution group of an app.&lt;/br&gt; The release state.&lt;br&gt; &lt;b&gt;available&lt;/b&gt;: The uploaded release has been distributed.&lt;br&gt; &lt;b&gt;unavailable&lt;/b&gt;: The uploaded release is not visible to the user. &lt;br&gt;  | [optional] 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | [optional] 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist. For Android: android:versionCode from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.private_release_details_response import PrivateReleaseDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateReleaseDetailsResponse from a JSON string
private_release_details_response_instance = PrivateReleaseDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(PrivateReleaseDetailsResponse.to_json())

# convert the object into a dict
private_release_details_response_dict = private_release_details_response_instance.to_dict()
# create an instance of PrivateReleaseDetailsResponse from a dict
private_release_details_response_from_dict = PrivateReleaseDetailsResponse.from_dict(private_release_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


