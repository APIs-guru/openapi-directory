# AdWordsLocationExtensions

Additional information that is surfaced in AdWords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_phone** | **str** | An alternate phone number to display on AdWords location extensions instead of the location&#39;s primary phone number. | [optional] 

## Example

```python
from openapi_client.models.ad_words_location_extensions import AdWordsLocationExtensions

# TODO update the JSON string below
json = "{}"
# create an instance of AdWordsLocationExtensions from a JSON string
ad_words_location_extensions_instance = AdWordsLocationExtensions.from_json(json)
# print the JSON string representation of the object
print(AdWordsLocationExtensions.to_json())

# convert the object into a dict
ad_words_location_extensions_dict = ad_words_location_extensions_instance.to_dict()
# create an instance of AdWordsLocationExtensions from a dict
ad_words_location_extensions_from_dict = AdWordsLocationExtensions.from_dict(ad_words_location_extensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


