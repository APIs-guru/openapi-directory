# RevertFolderResponse

The result of reverting folder changes in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | [**Folder**](Folder.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_folder_response import RevertFolderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertFolderResponse from a JSON string
revert_folder_response_instance = RevertFolderResponse.from_json(json)
# print the JSON string representation of the object
print(RevertFolderResponse.to_json())

# convert the object into a dict
revert_folder_response_dict = revert_folder_response_instance.to_dict()
# create an instance of RevertFolderResponse from a dict
revert_folder_response_from_dict = RevertFolderResponse.from_dict(revert_folder_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


