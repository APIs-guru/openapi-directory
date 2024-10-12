# LocalNetworkGateway

A common class for general resource information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**LocalNetworkGatewayPropertiesFormat**](LocalNetworkGatewayPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.local_network_gateway import LocalNetworkGateway

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNetworkGateway from a JSON string
local_network_gateway_instance = LocalNetworkGateway.from_json(json)
# print the JSON string representation of the object
print(LocalNetworkGateway.to_json())

# convert the object into a dict
local_network_gateway_dict = local_network_gateway_instance.to_dict()
# create an instance of LocalNetworkGateway from a dict
local_network_gateway_from_dict = LocalNetworkGateway.from_dict(local_network_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


