# LegacyCodePushReleaseResponsePackage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** | The version of the release | [optional] 
**blob_url** | **str** | Location (URL) of release package | [optional] 
**diff_package_map** | **object** | Object containing URL and size of changed package hashes contained in the release | [optional] 
**is_disabled** | **bool** | Flag used to determine if release is disabled | [optional] 
**is_mandatory** | **bool** | Flag used to determine if release is mandatory | [optional] 
**label** | **str** | Release label (aka release name) | [optional] 
**manifest_blob_url** | **str** | The URL location of the package&#39;s manifest file. | [optional] 
**release_method** | **str** | Method used to deploy release | [optional] 
**released_by_user_id** | **str** | User ID that triggered most recent release | [optional] 
**rollout** | **int** | Percentage (out of 100) that release is deployed to | [optional] 
**size** | **int** | Size of release package | [optional] 
**upload_time** | **int** | Release upload time as epoch Unix timestamp | [optional] 

## Example

```python
from openapi_client.models.legacy_code_push_release_response_package import LegacyCodePushReleaseResponsePackage

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCodePushReleaseResponsePackage from a JSON string
legacy_code_push_release_response_package_instance = LegacyCodePushReleaseResponsePackage.from_json(json)
# print the JSON string representation of the object
print(LegacyCodePushReleaseResponsePackage.to_json())

# convert the object into a dict
legacy_code_push_release_response_package_dict = legacy_code_push_release_response_package_instance.to_dict()
# create an instance of LegacyCodePushReleaseResponsePackage from a dict
legacy_code_push_release_response_package_from_dict = LegacyCodePushReleaseResponsePackage.from_dict(legacy_code_push_release_response_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


