# ReadFileResponse

`ReadFile` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_contents** | **bytearray** | The file&#39;s contents. | [optional] 

## Example

```python
from openapi_client.models.read_file_response import ReadFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReadFileResponse from a JSON string
read_file_response_instance = ReadFileResponse.from_json(json)
# print the JSON string representation of the object
print(ReadFileResponse.to_json())

# convert the object into a dict
read_file_response_dict = read_file_response_instance.to_dict()
# create an instance of ReadFileResponse from a dict
read_file_response_from_dict = ReadFileResponse.from_dict(read_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


