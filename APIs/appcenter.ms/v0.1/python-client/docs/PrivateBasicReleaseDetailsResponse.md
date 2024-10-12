# PrivateBasicReleaseDetailsResponse

Basic information on a release for private apis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_type** | **str** | The destination type.&lt;br&gt; &lt;b&gt;group&lt;/b&gt;: The release distributed to internal groups and distribution_groups details will be returned.&lt;br&gt; &lt;b&gt;store&lt;/b&gt;: The release distributed to external stores and distribution_stores details will be returned. &lt;br&gt;  | [optional] 
**distribution_group_id** | **str** | the destination id of release where it is distributed. | [optional] 
**id** | **int** | ID identifying this unique release. | [optional] 
**is_external_build** | **bool** | This value determines if a release is external or not. | [optional] 
**is_latest** | **bool** | Indicates if this is the latest release in the group. | [optional] 
**mandatory_update** | **bool** | A boolean which determines whether the release is a mandatory update or not. | [optional] 
**origin** | **str** | The release&#39;s origin | [optional] 
**publishing_status** | **str** | the publishing status of the distributed release | [optional] 
**short_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist.&lt;br&gt; For Android: android:versionName from AppManifest.xml.  | [optional] 
**uploaded_at** | **str** | UTC time in ISO 8601 format of the uploaded time. | [optional] 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist.&lt;br&gt; For Android: android:versionCode from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.private_basic_release_details_response import PrivateBasicReleaseDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateBasicReleaseDetailsResponse from a JSON string
private_basic_release_details_response_instance = PrivateBasicReleaseDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(PrivateBasicReleaseDetailsResponse.to_json())

# convert the object into a dict
private_basic_release_details_response_dict = private_basic_release_details_response_instance.to_dict()
# create an instance of PrivateBasicReleaseDetailsResponse from a dict
private_basic_release_details_response_from_dict = PrivateBasicReleaseDetailsResponse.from_dict(private_basic_release_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


