# ReadRepositoryFileResponse

`ReadRepositoryFile` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The file&#39;s contents. | [optional] 

## Example

```python
from openapi_client.models.read_repository_file_response import ReadRepositoryFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReadRepositoryFileResponse from a JSON string
read_repository_file_response_instance = ReadRepositoryFileResponse.from_json(json)
# print the JSON string representation of the object
print(ReadRepositoryFileResponse.to_json())

# convert the object into a dict
read_repository_file_response_dict = read_repository_file_response_instance.to_dict()
# create an instance of ReadRepositoryFileResponse from a dict
read_repository_file_response_from_dict = ReadRepositoryFileResponse.from_dict(read_repository_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


