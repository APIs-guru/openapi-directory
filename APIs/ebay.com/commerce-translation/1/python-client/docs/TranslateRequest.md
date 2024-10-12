# TranslateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **str** | The language of the input text. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**text** | **List[str]** | The input text. | [optional] 
**to** | **str** | The language to use for the translation of th einput text. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**translation_context** | **str** | The context of the translation. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.translate_request import TranslateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateRequest from a JSON string
translate_request_instance = TranslateRequest.from_json(json)
# print the JSON string representation of the object
print(TranslateRequest.to_json())

# convert the object into a dict
translate_request_dict = translate_request_instance.to_dict()
# create an instance of TranslateRequest from a dict
translate_request_from_dict = TranslateRequest.from_dict(translate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


