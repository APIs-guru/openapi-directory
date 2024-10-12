# AsyncAnnotateFileResponse

The response for a single offline file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.async_annotate_file_response import AsyncAnnotateFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncAnnotateFileResponse from a JSON string
async_annotate_file_response_instance = AsyncAnnotateFileResponse.from_json(json)
# print the JSON string representation of the object
print(AsyncAnnotateFileResponse.to_json())

# convert the object into a dict
async_annotate_file_response_dict = async_annotate_file_response_instance.to_dict()
# create an instance of AsyncAnnotateFileResponse from a dict
async_annotate_file_response_from_dict = AsyncAnnotateFileResponse.from_dict(async_annotate_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


