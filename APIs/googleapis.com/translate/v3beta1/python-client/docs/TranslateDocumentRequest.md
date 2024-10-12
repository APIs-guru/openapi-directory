# TranslateDocumentRequest

A document translation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customized_attribution** | **str** | Optional. This flag is to support user customized attribution. If not provided, the default is &#x60;Machine Translated by Google&#x60;. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos | [optional] 
**document_input_config** | [**DocumentInputConfig**](DocumentInputConfig.md) |  | [optional] 
**document_output_config** | [**DocumentOutputConfig**](DocumentOutputConfig.md) |  | [optional] 
**enable_rotation_correction** | **bool** | Optional. If true, enable auto rotation correction in DVS. | [optional] 
**enable_shadow_removal_native_pdf** | **bool** | Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false &amp;&amp; pdf_native_only: false | [optional] 
**glossary_config** | [**TranslateTextGlossaryConfig**](TranslateTextGlossaryConfig.md) |  | [optional] 
**is_translate_native_pdf_only** | **bool** | Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf translation is 300 and only native pdf pages will be translated. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. See https://cloud.google.com/translate/docs/advanced/labels for more information. | [optional] 
**model** | **str** | Optional. The &#x60;model&#x60; type requested for this translation. The format depends on model type: - AutoML Translation models: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/{model-id}&#x60; - General (built-in) models: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/general/nmt&#x60;, If not provided, the default Google model (NMT) will be used for translation. | [optional] 
**source_language_code** | **str** | Optional. The BCP-47 language code of the input document if known, for example, \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. Supported language codes are listed in Language Support. If the source language isn&#39;t specified, the API attempts to identify the source language automatically and returns the source language within the response. Source language must be specified if the request contains a glossary or a custom model. | [optional] 
**target_language_code** | **str** | Required. The BCP-47 language code to use for translation of the input document, set to one of the language codes listed in Language Support. | [optional] 

## Example

```python
from openapi_client.models.translate_document_request import TranslateDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateDocumentRequest from a JSON string
translate_document_request_instance = TranslateDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(TranslateDocumentRequest.to_json())

# convert the object into a dict
translate_document_request_dict = translate_document_request_instance.to_dict()
# create an instance of TranslateDocumentRequest from a dict
translate_document_request_from_dict = TranslateDocumentRequest.from_dict(translate_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


