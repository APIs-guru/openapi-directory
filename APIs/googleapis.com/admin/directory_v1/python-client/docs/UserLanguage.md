# UserLanguage

JSON template for a language entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_language** | **str** | Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, &#x60;languageCode&#x60; can&#39;t be set. | [optional] 
**language_code** | **str** | ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause &#x60;SchemaException&#x60;. If this is set, &#x60;customLanguage&#x60; can&#39;t be set. | [optional] 
**preference** | **str** | Optional. If present, controls whether the specified &#x60;languageCode&#x60; is the user&#39;s preferred language. If &#x60;customLanguage&#x60; is set, this can&#39;t be set. Allowed values are &#x60;preferred&#x60; and &#x60;not_preferred&#x60;. | [optional] 

## Example

```python
from openapi_client.models.user_language import UserLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of UserLanguage from a JSON string
user_language_instance = UserLanguage.from_json(json)
# print the JSON string representation of the object
print(UserLanguage.to_json())

# convert the object into a dict
user_language_dict = user_language_instance.to_dict()
# create an instance of UserLanguage from a dict
user_language_from_dict = UserLanguage.from_dict(user_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


