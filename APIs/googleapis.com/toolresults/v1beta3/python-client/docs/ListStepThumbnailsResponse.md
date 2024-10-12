# ListStepThumbnailsResponse

A response containing the thumbnails in a step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field. | [optional] 
**thumbnails** | [**List[Image]**](Image.md) | A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep). | [optional] 

## Example

```python
from openapi_client.models.list_step_thumbnails_response import ListStepThumbnailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStepThumbnailsResponse from a JSON string
list_step_thumbnails_response_instance = ListStepThumbnailsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStepThumbnailsResponse.to_json())

# convert the object into a dict
list_step_thumbnails_response_dict = list_step_thumbnails_response_instance.to_dict()
# create an instance of ListStepThumbnailsResponse from a dict
list_step_thumbnails_response_from_dict = ListStepThumbnailsResponse.from_dict(list_step_thumbnails_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


