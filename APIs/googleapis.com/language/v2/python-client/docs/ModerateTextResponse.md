# ModerateTextResponse

The document moderation response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**language_supported** | **bool** | Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. | [optional] 
**moderation_categories** | [**List[ClassificationCategory]**](ClassificationCategory.md) | Harmful and sensitive categories representing the input document. | [optional] 

## Example

```python
from openapi_client.models.moderate_text_response import ModerateTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModerateTextResponse from a JSON string
moderate_text_response_instance = ModerateTextResponse.from_json(json)
# print the JSON string representation of the object
print(ModerateTextResponse.to_json())

# convert the object into a dict
moderate_text_response_dict = moderate_text_response_instance.to_dict()
# create an instance of ModerateTextResponse from a dict
moderate_text_response_from_dict = ModerateTextResponse.from_dict(moderate_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


