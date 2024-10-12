# Translation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **str** | The language of the input text. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**original_text** | **str** | Original text. | [optional] 
**to** | **str** | The language to use for the translation of th einput text. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**translated_text** | **str** | Translated text. | [optional] 

## Example

```python
from openapi_client.models.translation import Translation

# TODO update the JSON string below
json = "{}"
# create an instance of Translation from a JSON string
translation_instance = Translation.from_json(json)
# print the JSON string representation of the object
print(Translation.to_json())

# convert the object into a dict
translation_dict = translation_instance.to_dict()
# create an instance of Translation from a dict
translation_from_dict = Translation.from_dict(translation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


