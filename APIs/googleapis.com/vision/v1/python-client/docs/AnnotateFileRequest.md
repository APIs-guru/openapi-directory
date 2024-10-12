# AnnotateFileRequest

A request to annotate one single file, e.g. a PDF, TIFF or GIF file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[Feature]**](Feature.md) | Required. Requested features. | [optional] 
**image_context** | [**ImageContext**](ImageContext.md) |  | [optional] 
**input_config** | [**InputConfig**](InputConfig.md) |  | [optional] 
**pages** | **List[int]** | Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file. | [optional] 

## Example

```python
from openapi_client.models.annotate_file_request import AnnotateFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateFileRequest from a JSON string
annotate_file_request_instance = AnnotateFileRequest.from_json(json)
# print the JSON string representation of the object
print(AnnotateFileRequest.to_json())

# convert the object into a dict
annotate_file_request_dict = annotate_file_request_instance.to_dict()
# create an instance of AnnotateFileRequest from a dict
annotate_file_request_from_dict = AnnotateFileRequest.from_dict(annotate_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


