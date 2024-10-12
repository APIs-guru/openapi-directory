# PatchReleaseAssetIdRequest

Patch the asset id of a release request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipa_uuids** | **str** | The ipa UUIDs for this release, as a serialized JSON array | [optional] 
**package_asset_id** | **str** | The release new package id in ACFUS | 
**upload_id** | **str** | The release upload id used to upload the release | 

## Example

```python
from openapi_client.models.patch_release_asset_id_request import PatchReleaseAssetIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReleaseAssetIdRequest from a JSON string
patch_release_asset_id_request_instance = PatchReleaseAssetIdRequest.from_json(json)
# print the JSON string representation of the object
print(PatchReleaseAssetIdRequest.to_json())

# convert the object into a dict
patch_release_asset_id_request_dict = patch_release_asset_id_request_instance.to_dict()
# create an instance of PatchReleaseAssetIdRequest from a dict
patch_release_asset_id_request_from_dict = PatchReleaseAssetIdRequest.from_dict(patch_release_asset_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


