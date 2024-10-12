# LocalizationSettings

Localization settings for reports, such as currency and language. It affects how metrics are calculated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified. | [optional] 
**language_code** | **str** | Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to &#39;en-US&#39; if unspecified. | [optional] 

## Example

```python
from openapi_client.models.localization_settings import LocalizationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizationSettings from a JSON string
localization_settings_instance = LocalizationSettings.from_json(json)
# print the JSON string representation of the object
print(LocalizationSettings.to_json())

# convert the object into a dict
localization_settings_dict = localization_settings_instance.to_dict()
# create an instance of LocalizationSettings from a dict
localization_settings_from_dict = LocalizationSettings.from_dict(localization_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


