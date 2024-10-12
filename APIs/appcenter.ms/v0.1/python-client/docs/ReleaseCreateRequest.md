# ReleaseCreateRequest

A request containing information for creating a release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appex_provisioning_profiles** | [**List[ReleaseCreateRequestAppexProvisioningProfilesInner]**](ReleaseCreateRequestAppexProvisioningProfilesInner.md) | iOS app extension provisioning profiles included in the release. | [optional] 
**build_version** | **str** | The release&#39;s short version.&lt;br&gt; For iOS: CFBundleShortVersionString from info.plist.&lt;br&gt; For Android: android:versionName from AppManifest.xml.  | [optional] 
**device_family** | **str** | The release&#39;s device family. | [optional] 
**file_extension** | **str** | The file extension of the asset. Does not include the initial period. | [optional] 
**fingerprint** | **str** | MD5 checksum of the release binary. | 
**icon_asset_id** | **str** | The assetId associated with the icon uploaded to app center file upload service. | [optional] 
**ipa_uuids** | [**List[ReleaseCreateRequestIpaUuidsInner]**](ReleaseCreateRequestIpaUuidsInner.md) | A list of UUIDs for architectures for an iOS app. | [optional] 
**languages** | **List[str]** | The languages supported by the release. Limited to 510 characters in a serialized array. | [optional] 
**minimum_os_version** | **str** | The release&#39;s minimum required operating system. | [optional] 
**package_url** | **str** | The URL to the release&#39;s binary. | [optional] 
**provision** | [**ReleaseCreateRequestAppexProvisioningProfilesInner**](ReleaseCreateRequestAppexProvisioningProfilesInner.md) |  | [optional] 
**proxy_flow** | **bool** | If true this release was uploaded to the AKS upload proxy | [optional] 
**size** | **int** | The release&#39;s size in bytes. | 
**unique_identifier** | **str** | The identifier of the app&#39;s bundle. | [optional] 
**upload_id** | **str** | The upload id associated with the release, to map to the releases upload table. | 
**version** | **str** | The release&#39;s version.&lt;br&gt; For iOS: CFBundleVersion from info.plist.&lt;br&gt; For Android: android:versionCode from AppManifest.xml.  | [optional] 

## Example

```python
from openapi_client.models.release_create_request import ReleaseCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCreateRequest from a JSON string
release_create_request_instance = ReleaseCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseCreateRequest.to_json())

# convert the object into a dict
release_create_request_dict = release_create_request_instance.to_dict()
# create an instance of ReleaseCreateRequest from a dict
release_create_request_from_dict = ReleaseCreateRequest.from_dict(release_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


