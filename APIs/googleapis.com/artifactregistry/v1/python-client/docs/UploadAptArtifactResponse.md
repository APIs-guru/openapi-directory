# UploadAptArtifactResponse

The response of the completed artifact upload operation. This response is contained in the Operation and available to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt_artifacts** | [**List[AptArtifact]**](AptArtifact.md) | The Apt artifacts updated. | [optional] 

## Example

```python
from openapi_client.models.upload_apt_artifact_response import UploadAptArtifactResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAptArtifactResponse from a JSON string
upload_apt_artifact_response_instance = UploadAptArtifactResponse.from_json(json)
# print the JSON string representation of the object
print(UploadAptArtifactResponse.to_json())

# convert the object into a dict
upload_apt_artifact_response_dict = upload_apt_artifact_response_instance.to_dict()
# create an instance of UploadAptArtifactResponse from a dict
upload_apt_artifact_response_from_dict = UploadAptArtifactResponse.from_dict(upload_apt_artifact_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


