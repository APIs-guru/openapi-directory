# ArtifactList

List of blueprint artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of results. | [optional] [readonly] 
**value** | [**List[Artifact]**](Artifact.md) | List of blueprint artifacts. | [optional] 

## Example

```python
from openapi_client.models.artifact_list import ArtifactList

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactList from a JSON string
artifact_list_instance = ArtifactList.from_json(json)
# print the JSON string representation of the object
print(ArtifactList.to_json())

# convert the object into a dict
artifact_list_dict = artifact_list_instance.to_dict()
# create an instance of ArtifactList from a dict
artifact_list_from_dict = ArtifactList.from_dict(artifact_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


