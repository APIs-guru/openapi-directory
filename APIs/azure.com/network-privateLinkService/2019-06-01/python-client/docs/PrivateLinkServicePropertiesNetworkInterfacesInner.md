# PrivateLinkServicePropertiesNetworkInterfacesInner

A network interface in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.private_link_service_properties_network_interfaces_inner import PrivateLinkServicePropertiesNetworkInterfacesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServicePropertiesNetworkInterfacesInner from a JSON string
private_link_service_properties_network_interfaces_inner_instance = PrivateLinkServicePropertiesNetworkInterfacesInner.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServicePropertiesNetworkInterfacesInner.to_json())

# convert the object into a dict
private_link_service_properties_network_interfaces_inner_dict = private_link_service_properties_network_interfaces_inner_instance.to_dict()
# create an instance of PrivateLinkServicePropertiesNetworkInterfacesInner from a dict
private_link_service_properties_network_interfaces_inner_from_dict = PrivateLinkServicePropertiesNetworkInterfacesInner.from_dict(private_link_service_properties_network_interfaces_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


