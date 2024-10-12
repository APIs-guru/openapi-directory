# UpdateNetworkCellularGatewaySubnetPoolRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr** | **str** | CIDR of the pool of subnets. Each MG in this network will automatically pick a subnet from this pool. | [optional] 
**mask** | **int** | Mask used for the subnet of all MGs in  this network. | [optional] 

## Example

```python
from openapi_client.models.update_network_cellular_gateway_subnet_pool_request import UpdateNetworkCellularGatewaySubnetPoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCellularGatewaySubnetPoolRequest from a JSON string
update_network_cellular_gateway_subnet_pool_request_instance = UpdateNetworkCellularGatewaySubnetPoolRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCellularGatewaySubnetPoolRequest.to_json())

# convert the object into a dict
update_network_cellular_gateway_subnet_pool_request_dict = update_network_cellular_gateway_subnet_pool_request_instance.to_dict()
# create an instance of UpdateNetworkCellularGatewaySubnetPoolRequest from a dict
update_network_cellular_gateway_subnet_pool_request_from_dict = UpdateNetworkCellularGatewaySubnetPoolRequest.from_dict(update_network_cellular_gateway_subnet_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


