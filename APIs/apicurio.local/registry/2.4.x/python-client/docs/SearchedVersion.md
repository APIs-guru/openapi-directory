# SearchedVersion

Models a single artifact from the result set returned when searching for artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_id** | **int** |  | 
**created_by** | **str** |  | 
**created_on** | **datetime** |  | 
**description** | **str** |  | [optional] 
**global_id** | **int** |  | 
**labels** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | [optional] 
**references** | [**List[ArtifactReference]**](ArtifactReference.md) |  | 
**state** | [**ArtifactState**](ArtifactState.md) |  | 
**type** | **str** |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.searched_version import SearchedVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SearchedVersion from a JSON string
searched_version_instance = SearchedVersion.from_json(json)
# print the JSON string representation of the object
print(SearchedVersion.to_json())

# convert the object into a dict
searched_version_dict = searched_version_instance.to_dict()
# create an instance of SearchedVersion from a dict
searched_version_from_dict = SearchedVersion.from_dict(searched_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


