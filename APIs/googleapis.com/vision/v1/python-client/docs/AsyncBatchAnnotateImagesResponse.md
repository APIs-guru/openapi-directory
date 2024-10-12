# AsyncBatchAnnotateImagesResponse

Response to an async batch image annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.async_batch_annotate_images_response import AsyncBatchAnnotateImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncBatchAnnotateImagesResponse from a JSON string
async_batch_annotate_images_response_instance = AsyncBatchAnnotateImagesResponse.from_json(json)
# print the JSON string representation of the object
print(AsyncBatchAnnotateImagesResponse.to_json())

# convert the object into a dict
async_batch_annotate_images_response_dict = async_batch_annotate_images_response_instance.to_dict()
# create an instance of AsyncBatchAnnotateImagesResponse from a dict
async_batch_annotate_images_response_from_dict = AsyncBatchAnnotateImagesResponse.from_dict(async_batch_annotate_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


