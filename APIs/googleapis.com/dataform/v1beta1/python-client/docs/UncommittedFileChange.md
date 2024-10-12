# UncommittedFileChange

Represents the Git state of a file with uncommitted changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The file&#39;s full path including filename, relative to the workspace root. | [optional] 
**state** | **str** | Indicates the status of the file. | [optional] 

## Example

```python
from openapi_client.models.uncommitted_file_change import UncommittedFileChange

# TODO update the JSON string below
json = "{}"
# create an instance of UncommittedFileChange from a JSON string
uncommitted_file_change_instance = UncommittedFileChange.from_json(json)
# print the JSON string representation of the object
print(UncommittedFileChange.to_json())

# convert the object into a dict
uncommitted_file_change_dict = uncommitted_file_change_instance.to_dict()
# create an instance of UncommittedFileChange from a dict
uncommitted_file_change_from_dict = UncommittedFileChange.from_dict(uncommitted_file_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


