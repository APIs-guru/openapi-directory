# CachedImagesListResult

The response containing cached images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of cached images. | [optional] 
**value** | [**List[CachedImages]**](CachedImages.md) | The list of cached images. | [optional] 

## Example

```python
from openapi_client.models.cached_images_list_result import CachedImagesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CachedImagesListResult from a JSON string
cached_images_list_result_instance = CachedImagesListResult.from_json(json)
# print the JSON string representation of the object
print(CachedImagesListResult.to_json())

# convert the object into a dict
cached_images_list_result_dict = cached_images_list_result_instance.to_dict()
# create an instance of CachedImagesListResult from a dict
cached_images_list_result_from_dict = CachedImagesListResult.from_dict(cached_images_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


