# BatchArtifactContentInformationResult

Results of the Batch Artifact Content Information request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_content_information** | [**Dict[str, ArtifactContentInformation]**](ArtifactContentInformation.md) | Artifact Content Information details of the Artifact Ids requested. | [optional] 
**artifacts** | [**Dict[str, Artifact]**](Artifact.md) | Artifact details of the Artifact Ids requested. | [optional] 
**errors** | [**Dict[str, ErrorResponse]**](ErrorResponse.md) | Errors occurred while fetching the requested Artifact Ids. | [optional] 

## Example

```python
from openapi_client.models.batch_artifact_content_information_result import BatchArtifactContentInformationResult

# TODO update the JSON string below
json = "{}"
# create an instance of BatchArtifactContentInformationResult from a JSON string
batch_artifact_content_information_result_instance = BatchArtifactContentInformationResult.from_json(json)
# print the JSON string representation of the object
print(BatchArtifactContentInformationResult.to_json())

# convert the object into a dict
batch_artifact_content_information_result_dict = batch_artifact_content_information_result_instance.to_dict()
# create an instance of BatchArtifactContentInformationResult from a dict
batch_artifact_content_information_result_from_dict = BatchArtifactContentInformationResult.from_dict(batch_artifact_content_information_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


