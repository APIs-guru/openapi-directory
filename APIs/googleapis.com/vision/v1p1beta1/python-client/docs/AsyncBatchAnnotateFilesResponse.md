# AsyncBatchAnnotateFilesResponse

Response to an async batch file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AsyncAnnotateFileResponse]**](AsyncAnnotateFileResponse.md) | The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. | [optional] 

## Example

```python
from openapi_client.models.async_batch_annotate_files_response import AsyncBatchAnnotateFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncBatchAnnotateFilesResponse from a JSON string
async_batch_annotate_files_response_instance = AsyncBatchAnnotateFilesResponse.from_json(json)
# print the JSON string representation of the object
print(AsyncBatchAnnotateFilesResponse.to_json())

# convert the object into a dict
async_batch_annotate_files_response_dict = async_batch_annotate_files_response_instance.to_dict()
# create an instance of AsyncBatchAnnotateFilesResponse from a dict
async_batch_annotate_files_response_from_dict = AsyncBatchAnnotateFilesResponse.from_dict(async_batch_annotate_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


