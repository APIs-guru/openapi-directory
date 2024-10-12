# VpnConnection

VpnConnection Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**VpnConnectionProperties**](VpnConnectionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.vpn_connection import VpnConnection

# TODO update the JSON string below
json = "{}"
# create an instance of VpnConnection from a JSON string
vpn_connection_instance = VpnConnection.from_json(json)
# print the JSON string representation of the object
print(VpnConnection.to_json())

# convert the object into a dict
vpn_connection_dict = vpn_connection_instance.to_dict()
# create an instance of VpnConnection from a dict
vpn_connection_from_dict = VpnConnection.from_dict(vpn_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


