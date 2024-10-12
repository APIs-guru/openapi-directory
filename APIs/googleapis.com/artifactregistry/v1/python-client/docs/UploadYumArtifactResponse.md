# UploadYumArtifactResponse

The response of the completed artifact upload operation. This response is contained in the Operation and available to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**yum_artifacts** | [**List[YumArtifact]**](YumArtifact.md) | The Yum artifacts updated. | [optional] 

## Example

```python
from openapi_client.models.upload_yum_artifact_response import UploadYumArtifactResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadYumArtifactResponse from a JSON string
upload_yum_artifact_response_instance = UploadYumArtifactResponse.from_json(json)
# print the JSON string representation of the object
print(UploadYumArtifactResponse.to_json())

# convert the object into a dict
upload_yum_artifact_response_dict = upload_yum_artifact_response_instance.to_dict()
# create an instance of UploadYumArtifactResponse from a dict
upload_yum_artifact_response_from_dict = UploadYumArtifactResponse.from_dict(upload_yum_artifact_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


