# TranslationAnnotation

Annotation details specific to translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**translated_content** | [**TextSnippet**](TextSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.translation_annotation import TranslationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationAnnotation from a JSON string
translation_annotation_instance = TranslationAnnotation.from_json(json)
# print the JSON string representation of the object
print(TranslationAnnotation.to_json())

# convert the object into a dict
translation_annotation_dict = translation_annotation_instance.to_dict()
# create an instance of TranslationAnnotation from a dict
translation_annotation_from_dict = TranslationAnnotation.from_dict(translation_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


