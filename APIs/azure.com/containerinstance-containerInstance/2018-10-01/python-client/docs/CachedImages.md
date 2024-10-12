# CachedImages

The cached image and OS type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource Id of the cached image. | [optional] 
**image** | **str** | The cached image name. | 
**os_type** | **str** | The OS type of the cached image. | 

## Example

```python
from openapi_client.models.cached_images import CachedImages

# TODO update the JSON string below
json = "{}"
# create an instance of CachedImages from a JSON string
cached_images_instance = CachedImages.from_json(json)
# print the JSON string representation of the object
print(CachedImages.to_json())

# convert the object into a dict
cached_images_dict = cached_images_instance.to_dict()
# create an instance of CachedImages from a dict
cached_images_from_dict = CachedImages.from_dict(cached_images_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


