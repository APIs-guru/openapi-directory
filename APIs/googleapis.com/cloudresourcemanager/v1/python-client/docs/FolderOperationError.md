# FolderOperationError

A classification of the Folder Operation error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message_id** | **str** | The type of operation error experienced. | [optional] 

## Example

```python
from openapi_client.models.folder_operation_error import FolderOperationError

# TODO update the JSON string below
json = "{}"
# create an instance of FolderOperationError from a JSON string
folder_operation_error_instance = FolderOperationError.from_json(json)
# print the JSON string representation of the object
print(FolderOperationError.to_json())

# convert the object into a dict
folder_operation_error_dict = folder_operation_error_instance.to_dict()
# create an instance of FolderOperationError from a dict
folder_operation_error_from_dict = FolderOperationError.from_dict(folder_operation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


