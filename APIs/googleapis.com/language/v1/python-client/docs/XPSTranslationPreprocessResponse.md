# XPSTranslationPreprocessResponse

Translation preprocess response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parsed_example_count** | **str** | Total example count parsed. | [optional] 
**valid_example_count** | **str** | Total valid example count. | [optional] 

## Example

```python
from openapi_client.models.xps_translation_preprocess_response import XPSTranslationPreprocessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTranslationPreprocessResponse from a JSON string
xps_translation_preprocess_response_instance = XPSTranslationPreprocessResponse.from_json(json)
# print the JSON string representation of the object
print(XPSTranslationPreprocessResponse.to_json())

# convert the object into a dict
xps_translation_preprocess_response_dict = xps_translation_preprocess_response_instance.to_dict()
# create an instance of XPSTranslationPreprocessResponse from a dict
xps_translation_preprocess_response_from_dict = XPSTranslationPreprocessResponse.from_dict(xps_translation_preprocess_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


