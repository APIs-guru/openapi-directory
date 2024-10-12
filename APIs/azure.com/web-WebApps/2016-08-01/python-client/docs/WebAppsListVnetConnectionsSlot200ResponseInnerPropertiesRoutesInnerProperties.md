# WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties

VnetRoute resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_address** | **str** | The ending address for this route. If the start address is specified in CIDR notation, this must be omitted. | [optional] 
**name** | **str** | The name of this route. This is only returned by the server and does not need to be set by the client. | [optional] 
**route_type** | **str** | The type of route this is: DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918 INHERITED - Routes inherited from the real Virtual Network routes STATIC - Static route set on the app only  These values will be used for syncing an app&#39;s routes with those from a Virtual Network. | [optional] 
**start_address** | **str** | The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties import WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties from a JSON string
web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties_instance = WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties.to_json())

# convert the object into a dict
web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties_dict = web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties_instance.to_dict()
# create an instance of WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties from a dict
web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties_from_dict = WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInnerProperties.from_dict(web_apps_list_vnet_connections_slot200_response_inner_properties_routes_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


