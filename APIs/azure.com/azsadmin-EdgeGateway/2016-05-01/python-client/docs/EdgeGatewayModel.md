# EdgeGatewayModel

Object which holds information related to edge gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_capacity** | **int** | The available network capacity. | [optional] 
**number_of_connections** | **int** | The current number of connections. | [optional] 
**state** | **str** | The current state of the edge gateway. | [optional] 
**total_capacity** | **int** | The total network capacity. | [optional] 

## Example

```python
from openapi_client.models.edge_gateway_model import EdgeGatewayModel

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGatewayModel from a JSON string
edge_gateway_model_instance = EdgeGatewayModel.from_json(json)
# print the JSON string representation of the object
print(EdgeGatewayModel.to_json())

# convert the object into a dict
edge_gateway_model_dict = edge_gateway_model_instance.to_dict()
# create an instance of EdgeGatewayModel from a dict
edge_gateway_model_from_dict = EdgeGatewayModel.from_dict(edge_gateway_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


