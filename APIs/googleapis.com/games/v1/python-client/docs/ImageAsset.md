# ImageAsset

An image asset object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the asset. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#imageAsset&#x60;. | [optional] 
**name** | **str** | The name of the asset. | [optional] 
**url** | **str** | The URL of the asset. | [optional] 
**width** | **int** | The width of the asset. | [optional] 

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


