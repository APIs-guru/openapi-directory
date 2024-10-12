# TranslateTextRequest

The main translation request message for the Cloud Translation API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the source text, in either HTML (default) or plain-text. A value of \&quot;html\&quot; indicates HTML and a value of \&quot;text\&quot; indicates plain-text. | [optional] 
**model** | **str** | The &#x60;model&#x60; type requested for this translation. Valid values are listed in public documentation. | [optional] 
**q** | **List[str]** | The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs. | [optional] 
**source** | **str** | The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response. | [optional] 
**target** | **str** | The language to use for translation of the input text, set to one of the language codes listed in Language Support. | [optional] 

## Example

```python
from openapi_client.models.translate_text_request import TranslateTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateTextRequest from a JSON string
translate_text_request_instance = TranslateTextRequest.from_json(json)
# print the JSON string representation of the object
print(TranslateTextRequest.to_json())

# convert the object into a dict
translate_text_request_dict = translate_text_request_instance.to_dict()
# create an instance of TranslateTextRequest from a dict
translate_text_request_from_dict = TranslateTextRequest.from_dict(translate_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


