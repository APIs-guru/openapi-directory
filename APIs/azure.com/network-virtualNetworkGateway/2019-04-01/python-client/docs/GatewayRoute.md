# GatewayRoute

Gateway routing details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_path** | **str** | The route&#39;s AS path sequence. | [optional] [readonly] 
**local_address** | **str** | The gateway&#39;s local address. | [optional] [readonly] 
**network** | **str** | The route&#39;s network prefix. | [optional] [readonly] 
**next_hop** | **str** | The route&#39;s next hop. | [optional] [readonly] 
**origin** | **str** | The source this route was learned from. | [optional] [readonly] 
**source_peer** | **str** | The peer this route was learned from. | [optional] [readonly] 
**weight** | **int** | The route&#39;s weight. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway_route import GatewayRoute

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayRoute from a JSON string
gateway_route_instance = GatewayRoute.from_json(json)
# print the JSON string representation of the object
print(GatewayRoute.to_json())

# convert the object into a dict
gateway_route_dict = gateway_route_instance.to_dict()
# create an instance of GatewayRoute from a dict
gateway_route_from_dict = GatewayRoute.from_dict(gateway_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


