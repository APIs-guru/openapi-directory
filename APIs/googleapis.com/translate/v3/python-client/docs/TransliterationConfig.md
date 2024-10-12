# TransliterationConfig

Configures transliteration feature on top of translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_transliteration** | **bool** | If true, source text in romanized form can be translated to the target language. | [optional] 

## Example

```python
from openapi_client.models.transliteration_config import TransliterationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TransliterationConfig from a JSON string
transliteration_config_instance = TransliterationConfig.from_json(json)
# print the JSON string representation of the object
print(TransliterationConfig.to_json())

# convert the object into a dict
transliteration_config_dict = transliteration_config_instance.to_dict()
# create an instance of TransliterationConfig from a dict
transliteration_config_from_dict = TransliterationConfig.from_dict(transliteration_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


