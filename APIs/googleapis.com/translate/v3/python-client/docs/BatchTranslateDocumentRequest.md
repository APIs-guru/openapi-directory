# BatchTranslateDocumentRequest

The BatchTranslateDocument request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customized_attribution** | **str** | Optional. This flag is to support user customized attribution. If not provided, the default is &#x60;Machine Translated by Google&#x60;. Customized attribution should follow rules in https://cloud.google.com/translate/attribution#attribution_and_logos | [optional] 
**enable_rotation_correction** | **bool** | Optional. If true, enable auto rotation correction in DVS. | [optional] 
**enable_shadow_removal_native_pdf** | **bool** | Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false &amp;&amp; pdf_native_only: false | [optional] 
**format_conversions** | **Dict[str, str]** | Optional. The file format conversion map that is applied to all input files. The map key is the original mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes: - &#x60;application/pdf&#x60; to &#x60;application/vnd.openxmlformats-officedocument.wordprocessingml.document&#x60; If nothing specified, output files will be in the same format as the original file. | [optional] 
**glossaries** | [**Dict[str, TranslateTextGlossaryConfig]**](TranslateTextGlossaryConfig.md) | Optional. Glossaries to be applied. It&#39;s keyed by target language code. | [optional] 
**input_configs** | [**List[BatchDocumentInputConfig]**](BatchDocumentInputConfig.md) | Required. Input configurations. The total number of files matched should be &lt;&#x3D; 100. The total content size to translate should be &lt;&#x3D; 100M Unicode codepoints. The files must use UTF-8 encoding. | [optional] 
**models** | **Dict[str, str]** | Optional. The models to use for translation. Map&#39;s key is target language code. Map&#39;s value is the model name. Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: - AutoML Translation models: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/{model-id}&#x60; - General (built-in) models: &#x60;projects/{project-number-or-id}/locations/{location-id}/models/general/nmt&#x60;, If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used. | [optional] 
**output_config** | [**BatchDocumentOutputConfig**](BatchDocumentOutputConfig.md) |  | [optional] 
**source_language_code** | **str** | Required. The ISO-639 language code of the input document if known, for example, \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages). | [optional] 
**target_language_codes** | **List[str]** | Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes here. | [optional] 

## Example

```python
from openapi_client.models.batch_translate_document_request import BatchTranslateDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchTranslateDocumentRequest from a JSON string
batch_translate_document_request_instance = BatchTranslateDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(BatchTranslateDocumentRequest.to_json())

# convert the object into a dict
batch_translate_document_request_dict = batch_translate_document_request_instance.to_dict()
# create an instance of BatchTranslateDocumentRequest from a dict
batch_translate_document_request_from_dict = BatchTranslateDocumentRequest.from_dict(batch_translate_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


