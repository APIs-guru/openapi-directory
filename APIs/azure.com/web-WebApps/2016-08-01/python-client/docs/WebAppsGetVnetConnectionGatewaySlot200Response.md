# WebAppsGetVnetConnectionGatewaySlot200Response

The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsGetVnetConnectionGatewaySlot200ResponseProperties**](WebAppsGetVnetConnectionGatewaySlot200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_get_vnet_connection_gateway_slot200_response import WebAppsGetVnetConnectionGatewaySlot200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGetVnetConnectionGatewaySlot200Response from a JSON string
web_apps_get_vnet_connection_gateway_slot200_response_instance = WebAppsGetVnetConnectionGatewaySlot200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsGetVnetConnectionGatewaySlot200Response.to_json())

# convert the object into a dict
web_apps_get_vnet_connection_gateway_slot200_response_dict = web_apps_get_vnet_connection_gateway_slot200_response_instance.to_dict()
# create an instance of WebAppsGetVnetConnectionGatewaySlot200Response from a dict
web_apps_get_vnet_connection_gateway_slot200_response_from_dict = WebAppsGetVnetConnectionGatewaySlot200Response.from_dict(web_apps_get_vnet_connection_gateway_slot200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


