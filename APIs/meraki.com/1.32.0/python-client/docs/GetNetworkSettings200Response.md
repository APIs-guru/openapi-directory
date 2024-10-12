# GetNetworkSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_privacy** | [**GetNetworkSettings200ResponseClientPrivacy**](GetNetworkSettings200ResponseClientPrivacy.md) |  | [optional] 
**fips** | [**GetNetworkSettings200ResponseFips**](GetNetworkSettings200ResponseFips.md) |  | [optional] 
**local_status_page** | [**GetNetworkSettings200ResponseLocalStatusPage**](GetNetworkSettings200ResponseLocalStatusPage.md) |  | [optional] 
**local_status_page_enabled** | **bool** | Enables / disables the local device status pages (&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://my.meraki.com/&#39;&gt;my.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://ap.meraki.com/&#39;&gt;ap.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://switch.meraki.com/&#39;&gt;switch.meraki.com, &lt;/a&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;http://wired.meraki.com/&#39;&gt;wired.meraki.com&lt;/a&gt;). Optional (defaults to false) | [optional] 
**named_vlans** | [**GetNetworkSettings200ResponseNamedVlans**](GetNetworkSettings200ResponseNamedVlans.md) |  | [optional] 
**remote_status_page_enabled** | **bool** | Enables / disables access to the device status page (&lt;a target&#x3D;&#39;_blank&#39;&gt;http://[device&#39;s LAN IP])&lt;/a&gt;. Optional. Can only be set if localStatusPageEnabled is set to true | [optional] 
**secure_port** | [**GetNetworkSettings200ResponseSecurePort**](GetNetworkSettings200ResponseSecurePort.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response import GetNetworkSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200Response from a JSON string
get_network_settings200_response_instance = GetNetworkSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200Response.to_json())

# convert the object into a dict
get_network_settings200_response_dict = get_network_settings200_response_instance.to_dict()
# create an instance of GetNetworkSettings200Response from a dict
get_network_settings200_response_from_dict = GetNetworkSettings200Response.from_dict(get_network_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


