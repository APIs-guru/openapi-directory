# UploadYumArtifactMediaResponse

The response to upload an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Operation**](Operation.md) |  | [optional] 

## Example

```python
from openapi_client.models.upload_yum_artifact_media_response import UploadYumArtifactMediaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadYumArtifactMediaResponse from a JSON string
upload_yum_artifact_media_response_instance = UploadYumArtifactMediaResponse.from_json(json)
# print the JSON string representation of the object
print(UploadYumArtifactMediaResponse.to_json())

# convert the object into a dict
upload_yum_artifact_media_response_dict = upload_yum_artifact_media_response_instance.to_dict()
# create an instance of UploadYumArtifactMediaResponse from a dict
upload_yum_artifact_media_response_from_dict = UploadYumArtifactMediaResponse.from_dict(upload_yum_artifact_media_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


