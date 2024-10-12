# ImageConfig

Specifies how to handle de-identification of image pixels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_redaction_mode** | **str** | Determines how to redact text from image. | [optional] 

## Example

```python
from openapi_client.models.image_config import ImageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ImageConfig from a JSON string
image_config_instance = ImageConfig.from_json(json)
# print the JSON string representation of the object
print(ImageConfig.to_json())

# convert the object into a dict
image_config_dict = image_config_instance.to_dict()
# create an instance of ImageConfig from a dict
image_config_from_dict = ImageConfig.from_dict(image_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


