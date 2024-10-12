# GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse

Response to an async batch image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**GoogleCloudVisionV1p4beta1OutputConfig**](GoogleCloudVisionV1p4beta1OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_async_batch_annotate_images_response import GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse from a JSON string
google_cloud_vision_v1p4beta1_async_batch_annotate_images_response_instance = GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_async_batch_annotate_images_response_dict = google_cloud_vision_v1p4beta1_async_batch_annotate_images_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse from a dict
google_cloud_vision_v1p4beta1_async_batch_annotate_images_response_from_dict = GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse.from_dict(google_cloud_vision_v1p4beta1_async_batch_annotate_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


