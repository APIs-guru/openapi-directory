# ArtifactResult

An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | [**List[FileHashes]**](FileHashes.md) | The file hash of the artifact. | [optional] 
**location** | **str** | The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, &#x60;gs://mybucket/path/to/output.jar#generation&#x60;. | [optional] 

## Example

```python
from openapi_client.models.artifact_result import ArtifactResult

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactResult from a JSON string
artifact_result_instance = ArtifactResult.from_json(json)
# print the JSON string representation of the object
print(ArtifactResult.to_json())

# convert the object into a dict
artifact_result_dict = artifact_result_instance.to_dict()
# create an instance of ArtifactResult from a dict
artifact_result_from_dict = ArtifactResult.from_dict(artifact_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


