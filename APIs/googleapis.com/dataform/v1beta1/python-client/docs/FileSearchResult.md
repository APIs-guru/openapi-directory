# FileSearchResult

Client-facing representation of a file entry in search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | File system path relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.file_search_result import FileSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of FileSearchResult from a JSON string
file_search_result_instance = FileSearchResult.from_json(json)
# print the JSON string representation of the object
print(FileSearchResult.to_json())

# convert the object into a dict
file_search_result_dict = file_search_result_instance.to_dict()
# create an instance of FileSearchResult from a dict
file_search_result_from_dict = FileSearchResult.from_dict(file_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


