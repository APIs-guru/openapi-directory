# RemoveDirectoryRequest

`RemoveDirectory` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Required. The directory&#39;s full path including directory name, relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.remove_directory_request import RemoveDirectoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDirectoryRequest from a JSON string
remove_directory_request_instance = RemoveDirectoryRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveDirectoryRequest.to_json())

# convert the object into a dict
remove_directory_request_dict = remove_directory_request_instance.to_dict()
# create an instance of RemoveDirectoryRequest from a dict
remove_directory_request_from_dict = RemoveDirectoryRequest.from_dict(remove_directory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


