# WebAppsGetVnetConnectionGatewaySlot200ResponseProperties

VnetGateway resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vnet_name** | **str** | The Virtual Network name. | [optional] 
**vpn_package_uri** | **str** | The URI where the VPN package can be downloaded. | 

## Example

```python
from openapi_client.models.web_apps_get_vnet_connection_gateway_slot200_response_properties import WebAppsGetVnetConnectionGatewaySlot200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGetVnetConnectionGatewaySlot200ResponseProperties from a JSON string
web_apps_get_vnet_connection_gateway_slot200_response_properties_instance = WebAppsGetVnetConnectionGatewaySlot200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsGetVnetConnectionGatewaySlot200ResponseProperties.to_json())

# convert the object into a dict
web_apps_get_vnet_connection_gateway_slot200_response_properties_dict = web_apps_get_vnet_connection_gateway_slot200_response_properties_instance.to_dict()
# create an instance of WebAppsGetVnetConnectionGatewaySlot200ResponseProperties from a dict
web_apps_get_vnet_connection_gateway_slot200_response_properties_from_dict = WebAppsGetVnetConnectionGatewaySlot200ResponseProperties.from_dict(web_apps_get_vnet_connection_gateway_slot200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


