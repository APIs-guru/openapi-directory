# UploadGoogetArtifactResponse

The response of the completed artifact upload operation. This response is contained in the Operation and available to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**googet_artifacts** | [**List[GoogetArtifact]**](GoogetArtifact.md) | The GooGet artifacts updated. | [optional] 

## Example

```python
from openapi_client.models.upload_googet_artifact_response import UploadGoogetArtifactResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadGoogetArtifactResponse from a JSON string
upload_googet_artifact_response_instance = UploadGoogetArtifactResponse.from_json(json)
# print the JSON string representation of the object
print(UploadGoogetArtifactResponse.to_json())

# convert the object into a dict
upload_googet_artifact_response_dict = upload_googet_artifact_response_instance.to_dict()
# create an instance of UploadGoogetArtifactResponse from a dict
upload_googet_artifact_response_from_dict = UploadGoogetArtifactResponse.from_dict(upload_googet_artifact_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


