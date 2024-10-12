# UpdateNetworkSettingsRequestLocalStatusPage

A hash of Local Status page(s)' authentication options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**UpdateNetworkSettingsRequestLocalStatusPageAuthentication**](UpdateNetworkSettingsRequestLocalStatusPageAuthentication.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_settings_request_local_status_page import UpdateNetworkSettingsRequestLocalStatusPage

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSettingsRequestLocalStatusPage from a JSON string
update_network_settings_request_local_status_page_instance = UpdateNetworkSettingsRequestLocalStatusPage.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSettingsRequestLocalStatusPage.to_json())

# convert the object into a dict
update_network_settings_request_local_status_page_dict = update_network_settings_request_local_status_page_instance.to_dict()
# create an instance of UpdateNetworkSettingsRequestLocalStatusPage from a dict
update_network_settings_request_local_status_page_from_dict = UpdateNetworkSettingsRequestLocalStatusPage.from_dict(update_network_settings_request_local_status_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


