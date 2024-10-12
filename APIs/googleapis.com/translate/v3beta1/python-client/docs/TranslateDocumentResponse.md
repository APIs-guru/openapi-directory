# TranslateDocumentResponse

A translated document response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_translation** | [**DocumentTranslation**](DocumentTranslation.md) |  | [optional] 
**glossary_config** | [**TranslateTextGlossaryConfig**](TranslateTextGlossaryConfig.md) |  | [optional] 
**glossary_document_translation** | [**DocumentTranslation**](DocumentTranslation.md) |  | [optional] 
**model** | **str** | Only present when &#39;model&#39; is present in the request. &#39;model&#39; is normalized to have a project number. For example: If the &#39;model&#39; field in TranslateDocumentRequest is: &#x60;projects/{project-id}/locations/{location-id}/models/general/nmt&#x60; then &#x60;model&#x60; here would be normalized to &#x60;projects/{project-number}/locations/{location-id}/models/general/nmt&#x60;. | [optional] 

## Example

```python
from openapi_client.models.translate_document_response import TranslateDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateDocumentResponse from a JSON string
translate_document_response_instance = TranslateDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(TranslateDocumentResponse.to_json())

# convert the object into a dict
translate_document_response_dict = translate_document_response_instance.to_dict()
# create an instance of TranslateDocumentResponse from a dict
translate_document_response_from_dict = TranslateDocumentResponse.from_dict(translate_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


