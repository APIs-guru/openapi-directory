# ImageConfig

Specifies how to handle de-identification of image pixels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info_types** | **List[str]** | Additional InfoTypes to redact in the images in addition to those used by &#x60;text_redaction_mode&#x60;. Can only be used when &#x60;text_redaction_mode&#x60; is set to &#x60;REDACT_SENSITIVE_TEXT&#x60;, &#x60;REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS&#x60; or &#x60;TEXT_REDACTION_MODE_UNSPECIFIED&#x60;. | [optional] 
**exclude_info_types** | **List[str]** | InfoTypes to skip redacting, overriding those used by &#x60;text_redaction_mode&#x60;. Can only be used when &#x60;text_redaction_mode&#x60; is set to &#x60;REDACT_SENSITIVE_TEXT&#x60; or &#x60;REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS&#x60;. | [optional] 
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


