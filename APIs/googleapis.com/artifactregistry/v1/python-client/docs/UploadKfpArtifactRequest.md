# UploadKfpArtifactRequest

The request to upload an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the package version. | [optional] 
**tags** | **List[str]** | Tags to be created with the version. | [optional] 

## Example

```python
from openapi_client.models.upload_kfp_artifact_request import UploadKfpArtifactRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UploadKfpArtifactRequest from a JSON string
upload_kfp_artifact_request_instance = UploadKfpArtifactRequest.from_json(json)
# print the JSON string representation of the object
print(UploadKfpArtifactRequest.to_json())

# convert the object into a dict
upload_kfp_artifact_request_dict = upload_kfp_artifact_request_instance.to_dict()
# create an instance of UploadKfpArtifactRequest from a dict
upload_kfp_artifact_request_from_dict = UploadKfpArtifactRequest.from_dict(upload_kfp_artifact_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


