# Image1Image


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png | 

## Example

```python
from openapi_client.models.image1_image import Image1Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image1Image from a JSON string
image1_image_instance = Image1Image.from_json(json)
# print the JSON string representation of the object
print(Image1Image.to_json())

# convert the object into a dict
image1_image_dict = image1_image_instance.to_dict()
# create an instance of Image1Image from a dict
image1_image_from_dict = Image1Image.from_dict(image1_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


