# UpdateNetworkSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_status_page** | [**UpdateNetworkSettingsRequestLocalStatusPage**](UpdateNetworkSettingsRequestLocalStatusPage.md) |  | [optional] 
**local_status_page_enabled** | **bool** | Enables / disables the local device status pages (&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://my.meraki.com/&#39;&gt;my.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://ap.meraki.com/&#39;&gt;ap.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://switch.meraki.com/&#39;&gt;switch.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://wired.meraki.com/&#39;&gt;wired.meraki.com&lt;/a&gt;). Optional (defaults to false) | [optional] 
**remote_status_page_enabled** | **bool** | Enables / disables access to the device status page (&lt;a target&#x3D;&#39;_blank&#39;&gt;http://[device&#39;s LAN IP])&lt;/a&gt;. Optional. Can only be set if localStatusPageEnabled is set to true | [optional] 
**secure_port** | [**GetNetworkSettings200ResponseSecurePort**](GetNetworkSettings200ResponseSecurePort.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_settings_request import UpdateNetworkSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSettingsRequest from a JSON string
update_network_settings_request_instance = UpdateNetworkSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSettingsRequest.to_json())

# convert the object into a dict
update_network_settings_request_dict = update_network_settings_request_instance.to_dict()
# create an instance of UpdateNetworkSettingsRequest from a dict
update_network_settings_request_from_dict = UpdateNetworkSettingsRequest.from_dict(update_network_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


