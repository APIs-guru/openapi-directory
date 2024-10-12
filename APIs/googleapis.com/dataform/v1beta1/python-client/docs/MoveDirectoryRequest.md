# MoveDirectoryRequest

`MoveDirectory` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_path** | **str** | Required. The new path for the directory including directory name, rooted at workspace root. | [optional] 
**path** | **str** | Required. The directory&#39;s full path including directory name, relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.move_directory_request import MoveDirectoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveDirectoryRequest from a JSON string
move_directory_request_instance = MoveDirectoryRequest.from_json(json)
# print the JSON string representation of the object
print(MoveDirectoryRequest.to_json())

# convert the object into a dict
move_directory_request_dict = move_directory_request_instance.to_dict()
# create an instance of MoveDirectoryRequest from a dict
move_directory_request_from_dict = MoveDirectoryRequest.from_dict(move_directory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


