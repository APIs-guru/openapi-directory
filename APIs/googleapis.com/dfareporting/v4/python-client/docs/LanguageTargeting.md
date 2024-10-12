# LanguageTargeting

Language Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[Language]**](Language.md) | Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated. | [optional] 

## Example

```python
from openapi_client.models.language_targeting import LanguageTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageTargeting from a JSON string
language_targeting_instance = LanguageTargeting.from_json(json)
# print the JSON string representation of the object
print(LanguageTargeting.to_json())

# convert the object into a dict
language_targeting_dict = language_targeting_instance.to_dict()
# create an instance of LanguageTargeting from a dict
language_targeting_from_dict = LanguageTargeting.from_dict(language_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


