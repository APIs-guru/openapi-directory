# TranslateTextResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glossary_translations** | [**List[Translation]**](Translation.md) | Text translation responses if a glossary is provided in the request. This can be the same as &#x60;translations&#x60; if no terms apply. This field has the same length as &#x60;contents&#x60;. | [optional] 
**translations** | [**List[Translation]**](Translation.md) | Text translation responses with no glossary applied. This field has the same length as &#x60;contents&#x60;. | [optional] 

## Example

```python
from openapi_client.models.translate_text_response import TranslateTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateTextResponse from a JSON string
translate_text_response_instance = TranslateTextResponse.from_json(json)
# print the JSON string representation of the object
print(TranslateTextResponse.to_json())

# convert the object into a dict
translate_text_response_dict = translate_text_response_instance.to_dict()
# create an instance of TranslateTextResponse from a dict
translate_text_response_from_dict = TranslateTextResponse.from_dict(translate_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


