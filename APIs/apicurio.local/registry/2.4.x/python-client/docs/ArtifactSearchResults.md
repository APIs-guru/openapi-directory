# ArtifactSearchResults

Describes the response received when searching for artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[SearchedArtifact]**](SearchedArtifact.md) | The artifacts returned in the result set. | 
**count** | **int** | The total number of artifacts that matched the query that produced the result set (may be  more than the number of artifacts in the result set). | 

## Example

```python
from openapi_client.models.artifact_search_results import ArtifactSearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSearchResults from a JSON string
artifact_search_results_instance = ArtifactSearchResults.from_json(json)
# print the JSON string representation of the object
print(ArtifactSearchResults.to_json())

# convert the object into a dict
artifact_search_results_dict = artifact_search_results_instance.to_dict()
# create an instance of ArtifactSearchResults from a dict
artifact_search_results_from_dict = ArtifactSearchResults.from_dict(artifact_search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


