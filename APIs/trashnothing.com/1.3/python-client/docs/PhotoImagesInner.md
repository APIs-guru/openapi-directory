# PhotoImagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**width** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.photo_images_inner import PhotoImagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoImagesInner from a JSON string
photo_images_inner_instance = PhotoImagesInner.from_json(json)
# print the JSON string representation of the object
print(PhotoImagesInner.to_json())

# convert the object into a dict
photo_images_inner_dict = photo_images_inner_instance.to_dict()
# create an instance of PhotoImagesInner from a dict
photo_images_inner_from_dict = PhotoImagesInner.from_dict(photo_images_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


