# ImageTag

An image caption, i.e. a brief description of what the image depicts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The level of confidence the service has in the caption | [optional] 
**name** | **str** | The tag value | [optional] 

## Example

```python
from openapi_client.models.image_tag import ImageTag

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTag from a JSON string
image_tag_instance = ImageTag.from_json(json)
# print the JSON string representation of the object
print(ImageTag.to_json())

# convert the object into a dict
image_tag_dict = image_tag_instance.to_dict()
# create an instance of ImageTag from a dict
image_tag_from_dict = ImageTag.from_dict(image_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


