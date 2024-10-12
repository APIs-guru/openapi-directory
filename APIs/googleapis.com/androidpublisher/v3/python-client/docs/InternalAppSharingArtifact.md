# InternalAppSharingArtifact

An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_fingerprint** | **str** | The sha256 fingerprint of the certificate used to sign the generated artifact. | [optional] 
**download_url** | **str** | The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it. | [optional] 
**sha256** | **str** | The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command. | [optional] 

## Example

```python
from openapi_client.models.internal_app_sharing_artifact import InternalAppSharingArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of InternalAppSharingArtifact from a JSON string
internal_app_sharing_artifact_instance = InternalAppSharingArtifact.from_json(json)
# print the JSON string representation of the object
print(InternalAppSharingArtifact.to_json())

# convert the object into a dict
internal_app_sharing_artifact_dict = internal_app_sharing_artifact_instance.to_dict()
# create an instance of InternalAppSharingArtifact from a dict
internal_app_sharing_artifact_from_dict = InternalAppSharingArtifact.from_dict(internal_app_sharing_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


