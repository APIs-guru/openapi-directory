# ImageItem

An item containing an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_item import ImageItem

# TODO update the JSON string below
json = "{}"
# create an instance of ImageItem from a JSON string
image_item_instance = ImageItem.from_json(json)
# print the JSON string representation of the object
print(ImageItem.to_json())

# convert the object into a dict
image_item_dict = image_item_instance.to_dict()
# create an instance of ImageItem from a dict
image_item_from_dict = ImageItem.from_dict(image_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


