# DhlExpressAccountSettings

A DHL Express account settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_account** | **bool** | Indicates if this is primary account | [optional] 
**nickname** | **str** | Account nickname | [optional] 
**should_hide_account_number_on_archive_doc** | **bool** | Indicates if the account number should be hidden on the archive documentation | [optional] 

## Example

```python
from openapi_client.models.dhl_express_account_settings import DhlExpressAccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DhlExpressAccountSettings from a JSON string
dhl_express_account_settings_instance = DhlExpressAccountSettings.from_json(json)
# print the JSON string representation of the object
print(DhlExpressAccountSettings.to_json())

# convert the object into a dict
dhl_express_account_settings_dict = dhl_express_account_settings_instance.to_dict()
# create an instance of DhlExpressAccountSettings from a dict
dhl_express_account_settings_from_dict = DhlExpressAccountSettings.from_dict(dhl_express_account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


