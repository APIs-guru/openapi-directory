# PreviewFileResponse

Response object for preview file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PreviewFile**](PreviewFile.md) |  | [optional] 
**response_status** | **int** | HTTP Status Code | [optional] 

## Example

```python
from openapi_client.models.preview_file_response import PreviewFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PreviewFileResponse from a JSON string
preview_file_response_instance = PreviewFileResponse.from_json(json)
# print the JSON string representation of the object
print(PreviewFileResponse.to_json())

# convert the object into a dict
preview_file_response_dict = preview_file_response_instance.to_dict()
# create an instance of PreviewFileResponse from a dict
preview_file_response_from_dict = PreviewFileResponse.from_dict(preview_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


