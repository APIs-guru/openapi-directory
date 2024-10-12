# WebAppsListVnetConnectionsSlot200ResponseInnerProperties

VnetInfo resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_blob** | **str** | A certificate file (.cer) blob containing the public key of the private key used to authenticate a  Point-To-Site VPN connection. | [optional] 
**cert_thumbprint** | **str** | The client certificate thumbprint. | [optional] [readonly] 
**dns_servers** | **str** | DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. | [optional] 
**is_swift** | **bool** | Flag that is used to denote if this is VNET injection | [optional] 
**resync_required** | **bool** | &lt;code&gt;true&lt;/code&gt; if a resync is required; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] [readonly] 
**routes** | [**List[WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInner]**](WebAppsListVnetConnectionsSlot200ResponseInnerPropertiesRoutesInner.md) | The routes that this Virtual Network connection uses. | [optional] [readonly] 
**vnet_resource_id** | **str** | The Virtual Network&#39;s resource ID. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_vnet_connections_slot200_response_inner_properties import WebAppsListVnetConnectionsSlot200ResponseInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListVnetConnectionsSlot200ResponseInnerProperties from a JSON string
web_apps_list_vnet_connections_slot200_response_inner_properties_instance = WebAppsListVnetConnectionsSlot200ResponseInnerProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsListVnetConnectionsSlot200ResponseInnerProperties.to_json())

# convert the object into a dict
web_apps_list_vnet_connections_slot200_response_inner_properties_dict = web_apps_list_vnet_connections_slot200_response_inner_properties_instance.to_dict()
# create an instance of WebAppsListVnetConnectionsSlot200ResponseInnerProperties from a dict
web_apps_list_vnet_connections_slot200_response_inner_properties_from_dict = WebAppsListVnetConnectionsSlot200ResponseInnerProperties.from_dict(web_apps_list_vnet_connections_slot200_response_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


