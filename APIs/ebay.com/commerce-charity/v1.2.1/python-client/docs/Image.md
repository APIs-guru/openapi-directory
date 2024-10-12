# Image

The logo of the charitable organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | The height of the logo image. | [optional] 
**image_url** | **str** | The URL to the logo image location. | [optional] 
**width** | **str** | The width of the logo image. | [optional] 

## Example

```python
from openapi_client.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


