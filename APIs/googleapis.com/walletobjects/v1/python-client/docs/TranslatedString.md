# TranslatedString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#translatedString\&quot;&#x60;. | [optional] 
**language** | **str** | Represents the BCP 47 language tag. Example values are \&quot;en-US\&quot;, \&quot;en-GB\&quot;, \&quot;de\&quot;, or \&quot;de-AT\&quot;. | [optional] 
**value** | **str** | The UTF-8 encoded translated string. | [optional] 

## Example

```python
from openapi_client.models.translated_string import TranslatedString

# TODO update the JSON string below
json = "{}"
# create an instance of TranslatedString from a JSON string
translated_string_instance = TranslatedString.from_json(json)
# print the JSON string representation of the object
print(TranslatedString.to_json())

# convert the object into a dict
translated_string_dict = translated_string_instance.to_dict()
# create an instance of TranslatedString from a dict
translated_string_from_dict = TranslatedString.from_dict(translated_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


