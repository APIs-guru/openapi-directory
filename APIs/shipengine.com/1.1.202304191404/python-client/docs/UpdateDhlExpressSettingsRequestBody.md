# UpdateDhlExpressSettingsRequestBody

An update dhl express settings request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_account** | **bool** | Indicates if this is primary account | [optional] 
**nickname** | **str** | Account nickname | [optional] 
**should_hide_account_number_on_archive_doc** | **bool** | Indicates if the account number should be hidden on the archive documentation | [optional] 

## Example

```python
from openapi_client.models.update_dhl_express_settings_request_body import UpdateDhlExpressSettingsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDhlExpressSettingsRequestBody from a JSON string
update_dhl_express_settings_request_body_instance = UpdateDhlExpressSettingsRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateDhlExpressSettingsRequestBody.to_json())

# convert the object into a dict
update_dhl_express_settings_request_body_dict = update_dhl_express_settings_request_body_instance.to_dict()
# create an instance of UpdateDhlExpressSettingsRequestBody from a dict
update_dhl_express_settings_request_body_from_dict = UpdateDhlExpressSettingsRequestBody.from_dict(update_dhl_express_settings_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


