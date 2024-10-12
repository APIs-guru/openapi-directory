# ImageDescriptor

Properties for a registry image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | The sha256-based digest of the image manifest. | [optional] 
**registry** | **str** | The registry login server. | [optional] 
**repository** | **str** | The repository name. | [optional] 
**tag** | **str** | The tag name. | [optional] 

## Example

```python
from openapi_client.models.image_descriptor import ImageDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDescriptor from a JSON string
image_descriptor_instance = ImageDescriptor.from_json(json)
# print the JSON string representation of the object
print(ImageDescriptor.to_json())

# convert the object into a dict
image_descriptor_dict = image_descriptor_instance.to_dict()
# create an instance of ImageDescriptor from a dict
image_descriptor_from_dict = ImageDescriptor.from_dict(image_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


