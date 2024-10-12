# MakeDirectoryRequest

`MakeDirectory` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Required. The directory&#39;s full path including directory name, relative to the workspace root. | [optional] 

## Example

```python
from openapi_client.models.make_directory_request import MakeDirectoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MakeDirectoryRequest from a JSON string
make_directory_request_instance = MakeDirectoryRequest.from_json(json)
# print the JSON string representation of the object
print(MakeDirectoryRequest.to_json())

# convert the object into a dict
make_directory_request_dict = make_directory_request_instance.to_dict()
# create an instance of MakeDirectoryRequest from a dict
make_directory_request_from_dict = MakeDirectoryRequest.from_dict(make_directory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


