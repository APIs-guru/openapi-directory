# VersionSearchResults

Describes the response received when searching for artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total number of artifacts that matched the search criteria. | 
**versions** | [**List[SearchedVersion]**](SearchedVersion.md) |  | 

## Example

```python
from openapi_client.models.version_search_results import VersionSearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of VersionSearchResults from a JSON string
version_search_results_instance = VersionSearchResults.from_json(json)
# print the JSON string representation of the object
print(VersionSearchResults.to_json())

# convert the object into a dict
version_search_results_dict = version_search_results_instance.to_dict()
# create an instance of VersionSearchResults from a dict
version_search_results_from_dict = VersionSearchResults.from_dict(version_search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


