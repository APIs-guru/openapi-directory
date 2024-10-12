# LocalizedString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | [**TranslatedString**](TranslatedString.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#localizedString\&quot;&#x60;. | [optional] 
**translated_values** | [**List[TranslatedString]**](TranslatedString.md) | Contains the translations for the string. | [optional] 

## Example

```python
from openapi_client.models.localized_string import LocalizedString

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedString from a JSON string
localized_string_instance = LocalizedString.from_json(json)
# print the JSON string representation of the object
print(LocalizedString.to_json())

# convert the object into a dict
localized_string_dict = localized_string_instance.to_dict()
# create an instance of LocalizedString from a dict
localized_string_from_dict = LocalizedString.from_dict(localized_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


