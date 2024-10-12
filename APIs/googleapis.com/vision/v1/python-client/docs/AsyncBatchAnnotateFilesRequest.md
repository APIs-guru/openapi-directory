# AsyncBatchAnnotateFilesRequest

Multiple async file annotation requests are batched into a single service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. | [optional] 
**parent** | **str** | Optional. Target project and location to make a call. Format: &#x60;projects/{project-id}/locations/{location-id}&#x60;. If no parent is specified, a region will be chosen automatically. Supported location-ids: &#x60;us&#x60;: USA country only, &#x60;asia&#x60;: East asia areas, like Japan, Taiwan, &#x60;eu&#x60;: The European Union. Example: &#x60;projects/project-A/locations/eu&#x60;. | [optional] 
**requests** | [**List[AsyncAnnotateFileRequest]**](AsyncAnnotateFileRequest.md) | Required. Individual async file annotation requests for this batch. | [optional] 

## Example

```python
from openapi_client.models.async_batch_annotate_files_request import AsyncBatchAnnotateFilesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncBatchAnnotateFilesRequest from a JSON string
async_batch_annotate_files_request_instance = AsyncBatchAnnotateFilesRequest.from_json(json)
# print the JSON string representation of the object
print(AsyncBatchAnnotateFilesRequest.to_json())

# convert the object into a dict
async_batch_annotate_files_request_dict = async_batch_annotate_files_request_instance.to_dict()
# create an instance of AsyncBatchAnnotateFilesRequest from a dict
async_batch_annotate_files_request_from_dict = AsyncBatchAnnotateFilesRequest.from_dict(async_batch_annotate_files_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


