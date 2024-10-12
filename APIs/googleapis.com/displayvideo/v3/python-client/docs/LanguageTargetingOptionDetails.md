# LanguageTargetingOptionDetails

Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the language (e.g., \&quot;French\&quot;). | [optional] [readonly] 

## Example

```python
from openapi_client.models.language_targeting_option_details import LanguageTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageTargetingOptionDetails from a JSON string
language_targeting_option_details_instance = LanguageTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(LanguageTargetingOptionDetails.to_json())

# convert the object into a dict
language_targeting_option_details_dict = language_targeting_option_details_instance.to_dict()
# create an instance of LanguageTargetingOptionDetails from a dict
language_targeting_option_details_from_dict = LanguageTargetingOptionDetails.from_dict(language_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


