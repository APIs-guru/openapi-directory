# ImageDefinition

The image definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_url** | **str** | Content URL for the image blob. | [optional] 
**image_exists** | **bool** | Whether image exists already. | [optional] 
**relative_path** | **str** | Relative path of the image. | [optional] 

## Example

```python
from openapi_client.models.image_definition import ImageDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDefinition from a JSON string
image_definition_instance = ImageDefinition.from_json(json)
# print the JSON string representation of the object
print(ImageDefinition.to_json())

# convert the object into a dict
image_definition_dict = image_definition_instance.to_dict()
# create an instance of ImageDefinition from a dict
image_definition_from_dict = ImageDefinition.from_dict(image_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


