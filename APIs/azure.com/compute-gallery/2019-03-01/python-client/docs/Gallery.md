# Gallery

Specifies information about the Shared Image Gallery that you want to create or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryProperties**](GalleryProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery import Gallery

# TODO update the JSON string below
json = "{}"
# create an instance of Gallery from a JSON string
gallery_instance = Gallery.from_json(json)
# print the JSON string representation of the object
print(Gallery.to_json())

# convert the object into a dict
gallery_dict = gallery_instance.to_dict()
# create an instance of Gallery from a dict
gallery_from_dict = Gallery.from_dict(gallery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


