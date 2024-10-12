# DhlExpressSettingsResponseBody

A DHL Express response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_account** | **bool** | Indicates if this is primary account | [optional] 
**nickname** | **str** | Account nickname | [optional] 
**should_hide_account_number_on_archive_doc** | **bool** | Indicates if the account number should be hidden on the archive documentation | [optional] 

## Example

```python
from openapi_client.models.dhl_express_settings_response_body import DhlExpressSettingsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of DhlExpressSettingsResponseBody from a JSON string
dhl_express_settings_response_body_instance = DhlExpressSettingsResponseBody.from_json(json)
# print the JSON string representation of the object
print(DhlExpressSettingsResponseBody.to_json())

# convert the object into a dict
dhl_express_settings_response_body_dict = dhl_express_settings_response_body_instance.to_dict()
# create an instance of DhlExpressSettingsResponseBody from a dict
dhl_express_settings_response_body_from_dict = DhlExpressSettingsResponseBody.from_dict(dhl_express_settings_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


