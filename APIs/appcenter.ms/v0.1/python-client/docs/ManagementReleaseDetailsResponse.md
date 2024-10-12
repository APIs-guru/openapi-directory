# ManagementReleaseDetailsResponse

Details of an uploaded release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_version** | **str** | The release&#39;s buildVersion.&lt;br&gt; For iOS: CFBundleVersion from info.plist.&lt;br&gt; For Android: android:versionCode from AppManifest.xml.  | [optional] 
**created_at** | **str** | UTC time the release was created in ISO 8601 format. | [optional] 
**deleted_at** | **str** | UTC time the release was created in ISO 8601 format. | [optional] 
**distinct_id** | **int** | ID identifying this unique release. | [optional] 
**enabled** | **bool** | This value determines the whether a release currently is enabled or disabled. | [optional] 
**origin** | **str** | The release&#39;s origin | [optional] 
**sort_version** | **str** | The release&#39;s sortVersion. | [optional] 
**version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist.&lt;br&gt; For Android: android:versionName from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.management_release_details_response import ManagementReleaseDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementReleaseDetailsResponse from a JSON string
management_release_details_response_instance = ManagementReleaseDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(ManagementReleaseDetailsResponse.to_json())

# convert the object into a dict
management_release_details_response_dict = management_release_details_response_instance.to_dict()
# create an instance of ManagementReleaseDetailsResponse from a dict
management_release_details_response_from_dict = ManagementReleaseDetailsResponse.from_dict(management_release_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


