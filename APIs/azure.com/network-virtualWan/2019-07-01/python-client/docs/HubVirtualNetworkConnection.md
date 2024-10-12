# HubVirtualNetworkConnection

HubVirtualNetworkConnection Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**HubVirtualNetworkConnectionProperties**](HubVirtualNetworkConnectionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.hub_virtual_network_connection import HubVirtualNetworkConnection

# TODO update the JSON string below
json = "{}"
# create an instance of HubVirtualNetworkConnection from a JSON string
hub_virtual_network_connection_instance = HubVirtualNetworkConnection.from_json(json)
# print the JSON string representation of the object
print(HubVirtualNetworkConnection.to_json())

# convert the object into a dict
hub_virtual_network_connection_dict = hub_virtual_network_connection_instance.to_dict()
# create an instance of HubVirtualNetworkConnection from a dict
hub_virtual_network_connection_from_dict = HubVirtualNetworkConnection.from_dict(hub_virtual_network_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


