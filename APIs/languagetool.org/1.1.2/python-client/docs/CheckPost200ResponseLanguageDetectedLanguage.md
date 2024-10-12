# CheckPost200ResponseLanguageDetectedLanguage

The automatically detected text language (might be different from the language actually used for checking).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | ISO 639-1 code like &#39;en&#39;, &#39;en-US&#39;, or &#39;ca-ES-valencia&#39;. | 
**name** | **str** | Language name like &#39;French&#39; or &#39;English (US)&#39;. | 

## Example

```python
from openapi_client.models.check_post200_response_language_detected_language import CheckPost200ResponseLanguageDetectedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200ResponseLanguageDetectedLanguage from a JSON string
check_post200_response_language_detected_language_instance = CheckPost200ResponseLanguageDetectedLanguage.from_json(json)
# print the JSON string representation of the object
print(CheckPost200ResponseLanguageDetectedLanguage.to_json())

# convert the object into a dict
check_post200_response_language_detected_language_dict = check_post200_response_language_detected_language_instance.to_dict()
# create an instance of CheckPost200ResponseLanguageDetectedLanguage from a dict
check_post200_response_language_detected_language_from_dict = CheckPost200ResponseLanguageDetectedLanguage.from_dict(check_post200_response_language_detected_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


