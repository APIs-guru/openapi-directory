# PaginatedArtifactList

A paginated list of Artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[Artifact]**](Artifact.md) | An array of objects of type Artifact. | [optional] 

## Example

```python
from openapi_client.models.paginated_artifact_list import PaginatedArtifactList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedArtifactList from a JSON string
paginated_artifact_list_instance = PaginatedArtifactList.from_json(json)
# print the JSON string representation of the object
print(PaginatedArtifactList.to_json())

# convert the object into a dict
paginated_artifact_list_dict = paginated_artifact_list_instance.to_dict()
# create an instance of PaginatedArtifactList from a dict
paginated_artifact_list_from_dict = PaginatedArtifactList.from_dict(paginated_artifact_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


