# AccountConversionSettings

Settings for conversion tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_listings_auto_tagging_enabled** | **bool** | When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659). | [optional] 

## Example

```python
from openapi_client.models.account_conversion_settings import AccountConversionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccountConversionSettings from a JSON string
account_conversion_settings_instance = AccountConversionSettings.from_json(json)
# print the JSON string representation of the object
print(AccountConversionSettings.to_json())

# convert the object into a dict
account_conversion_settings_dict = account_conversion_settings_instance.to_dict()
# create an instance of AccountConversionSettings from a dict
account_conversion_settings_from_dict = AccountConversionSettings.from_dict(account_conversion_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


