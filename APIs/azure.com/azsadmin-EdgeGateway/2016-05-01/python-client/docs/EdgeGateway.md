# EdgeGateway

This resource represents a gateway, which provides the configuration needed to provide gateway services to virtual networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EdgeGatewayModel**](EdgeGatewayModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.edge_gateway import EdgeGateway

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGateway from a JSON string
edge_gateway_instance = EdgeGateway.from_json(json)
# print the JSON string representation of the object
print(EdgeGateway.to_json())

# convert the object into a dict
edge_gateway_dict = edge_gateway_instance.to_dict()
# create an instance of EdgeGateway from a dict
edge_gateway_from_dict = EdgeGateway.from_dict(edge_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


