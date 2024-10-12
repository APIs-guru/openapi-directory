# BatchAnnotateFilesResponse

A list of file annotation responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AnnotateFileResponse]**](AnnotateFileResponse.md) | The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. | [optional] 

## Example

```python
from openapi_client.models.batch_annotate_files_response import BatchAnnotateFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAnnotateFilesResponse from a JSON string
batch_annotate_files_response_instance = BatchAnnotateFilesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchAnnotateFilesResponse.to_json())

# convert the object into a dict
batch_annotate_files_response_dict = batch_annotate_files_response_instance.to_dict()
# create an instance of BatchAnnotateFilesResponse from a dict
batch_annotate_files_response_from_dict = BatchAnnotateFilesResponse.from_dict(batch_annotate_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


