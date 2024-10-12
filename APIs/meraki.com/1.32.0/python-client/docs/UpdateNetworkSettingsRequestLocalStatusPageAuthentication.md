# UpdateNetworkSettingsRequestLocalStatusPageAuthentication

A hash of Local Status page(s)' authentication options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables / disables the authentication on Local Status page(s). | [optional] 
**password** | **str** | The password used for Local Status Page(s). Set this to null to clear the password. | [optional] 

## Example

```python
from openapi_client.models.update_network_settings_request_local_status_page_authentication import UpdateNetworkSettingsRequestLocalStatusPageAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSettingsRequestLocalStatusPageAuthentication from a JSON string
update_network_settings_request_local_status_page_authentication_instance = UpdateNetworkSettingsRequestLocalStatusPageAuthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSettingsRequestLocalStatusPageAuthentication.to_json())

# convert the object into a dict
update_network_settings_request_local_status_page_authentication_dict = update_network_settings_request_local_status_page_authentication_instance.to_dict()
# create an instance of UpdateNetworkSettingsRequestLocalStatusPageAuthentication from a dict
update_network_settings_request_local_status_page_authentication_from_dict = UpdateNetworkSettingsRequestLocalStatusPageAuthentication.from_dict(update_network_settings_request_local_status_page_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


