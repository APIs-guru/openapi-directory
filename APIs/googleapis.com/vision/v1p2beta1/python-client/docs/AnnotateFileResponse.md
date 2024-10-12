# AnnotateFileResponse

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**input_config** | [**InputConfig**](InputConfig.md) |  | [optional] 
**responses** | [**List[AnnotateImageResponse]**](AnnotateImageResponse.md) | Individual responses to images found within the file. This field will be empty if the &#x60;error&#x60; field is set. | [optional] 
**total_pages** | **int** | This field gives the total number of pages in the file. | [optional] 

## Example

```python
from openapi_client.models.annotate_file_response import AnnotateFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateFileResponse from a JSON string
annotate_file_response_instance = AnnotateFileResponse.from_json(json)
# print the JSON string representation of the object
print(AnnotateFileResponse.to_json())

# convert the object into a dict
annotate_file_response_dict = annotate_file_response_instance.to_dict()
# create an instance of AnnotateFileResponse from a dict
annotate_file_response_from_dict = AnnotateFileResponse.from_dict(annotate_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


