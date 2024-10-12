# FilesSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Files | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.files_sort import FilesSort

# TODO update the JSON string below
json = "{}"
# create an instance of FilesSort from a JSON string
files_sort_instance = FilesSort.from_json(json)
# print the JSON string representation of the object
print(FilesSort.to_json())

# convert the object into a dict
files_sort_dict = files_sort_instance.to_dict()
# create an instance of FilesSort from a dict
files_sort_from_dict = FilesSort.from_dict(files_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


