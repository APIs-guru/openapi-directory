# ImageGroup

Group of images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | Image group identifier. | [optional] 
**items** | [**List[Image]**](Image.md) | List of images. | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_group import ImageGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ImageGroup from a JSON string
image_group_instance = ImageGroup.from_json(json)
# print the JSON string representation of the object
print(ImageGroup.to_json())

# convert the object into a dict
image_group_dict = image_group_instance.to_dict()
# create an instance of ImageGroup from a dict
image_group_from_dict = ImageGroup.from_dict(image_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


