# WriteFileRequest

`WriteFile` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | Required. The file&#39;s contents. | [optional] 
**path** | **str** | Required. The file. | [optional] 

## Example

```python
from openapi_client.models.write_file_request import WriteFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WriteFileRequest from a JSON string
write_file_request_instance = WriteFileRequest.from_json(json)
# print the JSON string representation of the object
print(WriteFileRequest.to_json())

# convert the object into a dict
write_file_request_dict = write_file_request_instance.to_dict()
# create an instance of WriteFileRequest from a dict
write_file_request_from_dict = WriteFileRequest.from_dict(write_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


