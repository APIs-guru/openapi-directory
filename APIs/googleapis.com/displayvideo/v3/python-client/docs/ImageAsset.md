# ImageAsset

Meta data of an image asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_size** | **str** | File size of the image asset in bytes. | [optional] 
**full_size** | [**Dimensions**](Dimensions.md) |  | [optional] 
**mime_type** | **str** | MIME type of the image asset. | [optional] 

## Example

```python
from openapi_client.models.image_asset import ImageAsset

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAsset from a JSON string
image_asset_instance = ImageAsset.from_json(json)
# print the JSON string representation of the object
print(ImageAsset.to_json())

# convert the object into a dict
image_asset_dict = image_asset_instance.to_dict()
# create an instance of ImageAsset from a dict
image_asset_from_dict = ImageAsset.from_dict(image_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


