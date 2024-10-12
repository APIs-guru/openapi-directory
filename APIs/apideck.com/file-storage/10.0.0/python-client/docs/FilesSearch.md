# FilesSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_id** | **str** | ID of the drive to filter on | [optional] 
**query** | **str** | The query to search for. May match across multiple fields. | 

## Example

```python
from openapi_client.models.files_search import FilesSearch

# TODO update the JSON string below
json = "{}"
# create an instance of FilesSearch from a JSON string
files_search_instance = FilesSearch.from_json(json)
# print the JSON string representation of the object
print(FilesSearch.to_json())

# convert the object into a dict
files_search_dict = files_search_instance.to_dict()
# create an instance of FilesSearch from a dict
files_search_from_dict = FilesSearch.from_dict(files_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


