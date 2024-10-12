# SearchedArtifact

Models a single artifact from the result set returned when searching for artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** |  | 
**created_on** | **datetime** |  | 
**description** | **str** |  | [optional] 
**id** | **str** |  | 
**labels** | **List[str]** |  | [optional] 
**modified_by** | **str** |  | [optional] 
**modified_on** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**state** | [**ArtifactState**](ArtifactState.md) |  | 
**type** | [**ArtifactType**](ArtifactType.md) |  | 

## Example

```python
from openapi_client.models.searched_artifact import SearchedArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of SearchedArtifact from a JSON string
searched_artifact_instance = SearchedArtifact.from_json(json)
# print the JSON string representation of the object
print(SearchedArtifact.to_json())

# convert the object into a dict
searched_artifact_dict = searched_artifact_instance.to_dict()
# create an instance of SearchedArtifact from a dict
searched_artifact_from_dict = SearchedArtifact.from_dict(searched_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


