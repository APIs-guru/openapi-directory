# RemoveFileRequest

`RemoveFile` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Required. The file&#39;s full path including filename, relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.remove_file_request import RemoveFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveFileRequest from a JSON string
remove_file_request_instance = RemoveFileRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveFileRequest.to_json())

# convert the object into a dict
remove_file_request_dict = remove_file_request_instance.to_dict()
# create an instance of RemoveFileRequest from a dict
remove_file_request_from_dict = RemoveFileRequest.from_dict(remove_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


