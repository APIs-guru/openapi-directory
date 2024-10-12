# AlwaysOnVpnPackage

Configuration for an always-on VPN connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lockdown_enabled** | **bool** | Disallows networking when the VPN is not connected. | [optional] 
**package_name** | **str** | The package name of the VPN app. | [optional] 

## Example

```python
from openapi_client.models.always_on_vpn_package import AlwaysOnVpnPackage

# TODO update the JSON string below
json = "{}"
# create an instance of AlwaysOnVpnPackage from a JSON string
always_on_vpn_package_instance = AlwaysOnVpnPackage.from_json(json)
# print the JSON string representation of the object
print(AlwaysOnVpnPackage.to_json())

# convert the object into a dict
always_on_vpn_package_dict = always_on_vpn_package_instance.to_dict()
# create an instance of AlwaysOnVpnPackage from a dict
always_on_vpn_package_from_dict = AlwaysOnVpnPackage.from_dict(always_on_vpn_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


