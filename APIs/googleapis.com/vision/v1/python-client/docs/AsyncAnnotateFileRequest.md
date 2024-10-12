# AsyncAnnotateFileRequest

An offline file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[Feature]**](Feature.md) | Required. Requested features. | [optional] 
**image_context** | [**ImageContext**](ImageContext.md) |  | [optional] 
**input_config** | [**InputConfig**](InputConfig.md) |  | [optional] 
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.async_annotate_file_request import AsyncAnnotateFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncAnnotateFileRequest from a JSON string
async_annotate_file_request_instance = AsyncAnnotateFileRequest.from_json(json)
# print the JSON string representation of the object
print(AsyncAnnotateFileRequest.to_json())

# convert the object into a dict
async_annotate_file_request_dict = async_annotate_file_request_instance.to_dict()
# create an instance of AsyncAnnotateFileRequest from a dict
async_annotate_file_request_from_dict = AsyncAnnotateFileRequest.from_dict(async_annotate_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


