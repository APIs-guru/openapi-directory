# DirectorySearchResult

Client-facing representation of a directory entry in search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | File system path relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.directory_search_result import DirectorySearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorySearchResult from a JSON string
directory_search_result_instance = DirectorySearchResult.from_json(json)
# print the JSON string representation of the object
print(DirectorySearchResult.to_json())

# convert the object into a dict
directory_search_result_dict = directory_search_result_instance.to_dict()
# create an instance of DirectorySearchResult from a dict
directory_search_result_from_dict = DirectorySearchResult.from_dict(directory_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


