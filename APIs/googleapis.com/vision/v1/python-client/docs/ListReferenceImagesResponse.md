# ListReferenceImagesResponse

Response message for the `ListReferenceImages` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next_page_token returned from a previous List request, if any. | [optional] 
**page_size** | **int** | The maximum number of items to return. Default 10, maximum 100. | [optional] 
**reference_images** | [**List[ReferenceImage]**](ReferenceImage.md) | The list of reference images. | [optional] 

## Example

```python
from openapi_client.models.list_reference_images_response import ListReferenceImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReferenceImagesResponse from a JSON string
list_reference_images_response_instance = ListReferenceImagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListReferenceImagesResponse.to_json())

# convert the object into a dict
list_reference_images_response_dict = list_reference_images_response_instance.to_dict()
# create an instance of ListReferenceImagesResponse from a dict
list_reference_images_response_from_dict = ListReferenceImagesResponse.from_dict(list_reference_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


