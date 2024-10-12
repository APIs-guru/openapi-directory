# ReleasesGetLatestByDistributionGroup200Response

Details of an uploaded release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_min_api_level** | **str** | The release&#39;s minimum required Android API level. | [optional] 
**app_display_name** | **str** | The app&#39;s display name. | 
**app_icon_url** | **str** | A URL to the app&#39;s icon. | 
**app_name** | **str** | The app&#39;s name (extracted from the uploaded release). | 
**app_os** | **str** | The app&#39;s OS. | [optional] 
**build** | [**ReleasesGetLatestByDistributionGroup200ResponseBuild**](ReleasesGetLatestByDistributionGroup200ResponseBuild.md) |  | [optional] 
**bundle_identifier** | **str** | The identifier of the apps bundle. | [optional] 
**can_resign** | **bool** | In calls that allow passing &#x60;udid&#x60; in the query string, this value determines if a release can be re-signed. When true, after a re-sign, the tester will be able to install the release from his registered devices. Will not be returned for non-iOS platforms. | [optional] 
**destination_type** | **str** | OBSOLETE. Will be removed in next version. The destination type.&lt;br&gt; &lt;b&gt;group&lt;/b&gt;: The release distributed to internal groups and distribution_groups details will be returned.&lt;br&gt; &lt;b&gt;store&lt;/b&gt;: The release distributed to external stores and distribution_stores details will be returned.&lt;br&gt; &lt;b&gt;tester&lt;/b&gt;: The release distributed testers details will be returned.&lt;br&gt;  | [optional] 
**destinations** | [**List[ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner]**](ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner.md) | A list of distribution groups or stores. | [optional] 
**device_family** | **str** | The release&#39;s device family. | [optional] 
**distribution_groups** | [**List[ReleasesGetLatestByDistributionGroup200ResponseDistributionGroupsInner]**](ReleasesGetLatestByDistributionGroup200ResponseDistributionGroupsInner.md) | OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release. | [optional] 
**distribution_stores** | [**List[ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner]**](ReleasesGetLatestByDistributionGroup200ResponseDistributionStoresInner.md) | OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release. | [optional] 
**download_url** | **str** | The URL that hosts the binary for this release. | [optional] 
**enabled** | **bool** | This value determines the whether a release currently is enabled or disabled. | 
**fingerprint** | **str** | MD5 checksum of the release binary. | [optional] 
**id** | **int** | ID identifying this unique release. | 
**install_url** | **str** | The href required to install a release on a mobile device. On iOS devices will be prefixed with &#x60;itms-services://?action&#x3D;download-manifest&amp;url&#x3D;&#x60; | [optional] 
**is_external_build** | **bool** | This value determines if a release is external or not. | [optional] 
**is_provisioning_profile_syncing** | **bool** | A flag that determines whether the release&#39;s provisioning profile is still extracted or not. | [optional] 
**is_udid_provisioned** | **bool** | In calls that allow passing &#x60;udid&#x60; in the query string, this value will hold the provisioning status of that UDID in this release. Will be ignored for non-iOS platforms. | [optional] 
**min_os** | **str** | The release&#39;s minimum required operating system. | [optional] 
**origin** | **str** | The release&#39;s origin | [optional] 
**package_hashes** | **List[str]** | Hashes for the packages. | [optional] 
**provisioning_profile_expiry_date** | **str** | expiration date of provisioning profile in UTC format. | [optional] 
**provisioning_profile_name** | **str** | The release&#39;s provisioning profile name. | [optional] 
**provisioning_profile_type** | **str** | The type of the provisioning profile for the requested app version. | [optional] 
**release_notes** | **str** | The release&#39;s release notes. | [optional] 
**secondary_download_url** | **str** | The URL that hosts the secondary binary for this release, such as the apk file for aab releases. | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist. For Android: android:versionName from AppManifest.xml.  | 
**size** | **int** | The release&#39;s size in bytes. | [optional] 
**status** | **str** | Status of the release. | [optional] 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist. For Android: android:versionCode from AppManifest.xml.  | 

## Example

```python
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesGetLatestByDistributionGroup200Response from a JSON string
releases_get_latest_by_distribution_group200_response_instance = ReleasesGetLatestByDistributionGroup200Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesGetLatestByDistributionGroup200Response.to_json())

# convert the object into a dict
releases_get_latest_by_distribution_group200_response_dict = releases_get_latest_by_distribution_group200_response_instance.to_dict()
# create an instance of ReleasesGetLatestByDistributionGroup200Response from a dict
releases_get_latest_by_distribution_group200_response_from_dict = ReleasesGetLatestByDistributionGroup200Response.from_dict(releases_get_latest_by_distribution_group200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


