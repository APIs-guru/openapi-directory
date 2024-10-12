# UploadAptArtifactMediaResponse

The response to upload an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Operation**](Operation.md) |  | [optional] 

## Example

```python
from openapi_client.models.upload_apt_artifact_media_response import UploadAptArtifactMediaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAptArtifactMediaResponse from a JSON string
upload_apt_artifact_media_response_instance = UploadAptArtifactMediaResponse.from_json(json)
# print the JSON string representation of the object
print(UploadAptArtifactMediaResponse.to_json())

# convert the object into a dict
upload_apt_artifact_media_response_dict = upload_apt_artifact_media_response_instance.to_dict()
# create an instance of UploadAptArtifactMediaResponse from a dict
upload_apt_artifact_media_response_from_dict = UploadAptArtifactMediaResponse.from_dict(upload_apt_artifact_media_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


