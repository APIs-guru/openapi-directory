# ImageMeta

Image meta data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**caption** | **str** |  | [optional] 
**height** | **int** |  | [optional] 
**url** | **str** |  | [optional] 
**width** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.image_meta import ImageMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ImageMeta from a JSON string
image_meta_instance = ImageMeta.from_json(json)
# print the JSON string representation of the object
print(ImageMeta.to_json())

# convert the object into a dict
image_meta_dict = image_meta_instance.to_dict()
# create an instance of ImageMeta from a dict
image_meta_from_dict = ImageMeta.from_dict(image_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


