# ImageField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | [**ImageAnchor**](ImageAnchor.md) |  | [optional] 
**bbox** | [**BoundingBox**](BoundingBox.md) |  | 
**name** | **str** |  | 
**page** | **int** |  | 
**required** | **bool** |  | [optional] [default to True]
**type** | **str** |  | [optional] [default to 'image']

## Example

```python
from openapi_client.models.image_field import ImageField

# TODO update the JSON string below
json = "{}"
# create an instance of ImageField from a JSON string
image_field_instance = ImageField.from_json(json)
# print the JSON string representation of the object
print(ImageField.to_json())

# convert the object into a dict
image_field_dict = image_field_instance.to_dict()
# create an instance of ImageField from a dict
image_field_from_dict = ImageField.from_dict(image_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


