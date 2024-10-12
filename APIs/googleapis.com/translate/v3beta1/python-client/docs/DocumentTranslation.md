# DocumentTranslation

A translated document message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_stream_outputs** | **List[bytearray]** | The array of translated documents. It is expected to be size 1 for now. We may produce multiple translated documents in the future for other type of file formats. | [optional] 
**detected_language_code** | **str** | The detected language for the input document. If the user did not provide the source language for the input document, this field will have the language code automatically detected. If the source language was passed, auto-detection of the language does not occur and this field is empty. | [optional] 
**mime_type** | **str** | The translated document&#39;s mime type. | [optional] 

## Example

```python
from openapi_client.models.document_translation import DocumentTranslation

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentTranslation from a JSON string
document_translation_instance = DocumentTranslation.from_json(json)
# print the JSON string representation of the object
print(DocumentTranslation.to_json())

# convert the object into a dict
document_translation_dict = document_translation_instance.to_dict()
# create an instance of DocumentTranslation from a dict
document_translation_from_dict = DocumentTranslation.from_dict(document_translation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


