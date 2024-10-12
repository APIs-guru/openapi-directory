# TransportGatewayApiPut

The TransportGatewayApi resource is a collection of transports that carry dispatched alerts to the external GatewayAPI service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**gateway_api_from** | **str** | The sender name for the Gateway API service. | 
**gateway_api_token** | **str** | The token for the Gateway API service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_gateway_api_put import TransportGatewayApiPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGatewayApiPut from a JSON string
transport_gateway_api_put_instance = TransportGatewayApiPut.from_json(json)
# print the JSON string representation of the object
print(TransportGatewayApiPut.to_json())

# convert the object into a dict
transport_gateway_api_put_dict = transport_gateway_api_put_instance.to_dict()
# create an instance of TransportGatewayApiPut from a dict
transport_gateway_api_put_from_dict = TransportGatewayApiPut.from_dict(transport_gateway_api_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


