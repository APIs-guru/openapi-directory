# DistributionGroupRelease

Response for getting a list of releases in a distribution group

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

## Example

```python
from openapi_client.models.distribution_group_release import DistributionGroupRelease

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupRelease from a JSON string
distribution_group_release_instance = DistributionGroupRelease.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupRelease.to_json())

# convert the object into a dict
distribution_group_release_dict = distribution_group_release_instance.to_dict()
# create an instance of DistributionGroupRelease from a dict
distribution_group_release_from_dict = DistributionGroupRelease.from_dict(distribution_group_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


