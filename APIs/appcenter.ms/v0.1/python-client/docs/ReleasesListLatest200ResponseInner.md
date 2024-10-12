# ReleasesListLatest200ResponseInner

Basic information on a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**ReleasesListLatest200ResponseInnerBuild**](ReleasesListLatest200ResponseInnerBuild.md) |  | [optional] 
**destination_type** | **str** | OBSOLETE. Will be removed in next version. The destination type.&lt;br&gt; &lt;b&gt;group&lt;/b&gt;: The release distributed to internal groups and distribution_groups details will be returned.&lt;br&gt; &lt;b&gt;store&lt;/b&gt;: The release distributed to external stores and distribution_stores details will be returned. &lt;br&gt;  | [optional] 
**destinations** | [**List[ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner]**](ReleasesGetLatestByDistributionGroup200ResponseDestinationsInner.md) | A list of distribution groups or stores. | [optional] 
**distribution_groups** | [**List[ReleasesListLatest200ResponseInnerDistributionGroupsInner]**](ReleasesListLatest200ResponseInnerDistributionGroupsInner.md) | OBSOLETE. Will be removed in next version. A list of distribution groups that are associated with this release. | [optional] 
**distribution_stores** | [**List[ReleasesListLatest200ResponseInnerDistributionStoresInner]**](ReleasesListLatest200ResponseInnerDistributionStoresInner.md) | OBSOLETE. Will be removed in next version. A list of distribution stores that are associated with this release. | [optional] 
**enabled** | **bool** | This value determines the whether a release currently is enabled or disabled. | 
**file_extension** | **str** | The file extension of the main (user-uploaded) package file. | [optional] 
**id** | **int** | ID identifying this unique release. | 
**is_external_build** | **bool** | This value determines if a release is external or not. | [optional] 
**origin** | **str** | The release&#39;s origin | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist.&lt;br&gt; For Android: android:versionName from AppManifest.xml.  | 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist.&lt;br&gt; For Android: android:versionCode from AppManifest.xml.  | 

## Example

```python
from openapi_client.models.releases_list_latest200_response_inner import ReleasesListLatest200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesListLatest200ResponseInner from a JSON string
releases_list_latest200_response_inner_instance = ReleasesListLatest200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesListLatest200ResponseInner.to_json())

# convert the object into a dict
releases_list_latest200_response_inner_dict = releases_list_latest200_response_inner_instance.to_dict()
# create an instance of ReleasesListLatest200ResponseInner from a dict
releases_list_latest200_response_inner_from_dict = ReleasesListLatest200ResponseInner.from_dict(releases_list_latest200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


