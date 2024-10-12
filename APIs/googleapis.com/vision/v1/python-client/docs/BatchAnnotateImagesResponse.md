# BatchAnnotateImagesResponse

Response to a batch image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AnnotateImageResponse]**](AnnotateImageResponse.md) | Individual responses to image annotation requests within the batch. | [optional] 

## Example

```python
from openapi_client.models.batch_annotate_images_response import BatchAnnotateImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAnnotateImagesResponse from a JSON string
batch_annotate_images_response_instance = BatchAnnotateImagesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchAnnotateImagesResponse.to_json())

# convert the object into a dict
batch_annotate_images_response_dict = batch_annotate_images_response_instance.to_dict()
# create an instance of BatchAnnotateImagesResponse from a dict
batch_annotate_images_response_from_dict = BatchAnnotateImagesResponse.from_dict(batch_annotate_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


