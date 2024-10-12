# Artifact

Details of an Artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}. | [optional] 
**container** | **str** | The name of container. Artifacts can be grouped by container. | 
**created_time** | **datetime** | The Date and Time at which the Artifact is created. The DateTime is in UTC. | [optional] [readonly] 
**data_path** | [**DataPath**](DataPath.md) |  | [optional] 
**etag** | **str** | The Etag of the Artifact. | [optional] [readonly] 
**origin** | **str** | The origin of the Artifact creation request. Available origins are &#39;ExperimentRun&#39;, &#39;LocalUpload&#39;, &#39;WebUpload&#39;, &#39;Dataset&#39; and &#39;Unknown&#39;. | 
**path** | **str** | The path to the Artifact in a container. | 

## Example

```python
from openapi_client.models.artifact import Artifact

# TODO update the JSON string below
json = "{}"
# create an instance of Artifact from a JSON string
artifact_instance = Artifact.from_json(json)
# print the JSON string representation of the object
print(Artifact.to_json())

# convert the object into a dict
artifact_dict = artifact_instance.to_dict()
# create an instance of Artifact from a dict
artifact_from_dict = Artifact.from_dict(artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


