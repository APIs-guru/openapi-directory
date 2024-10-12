# NatGatewayListResult

Response for ListNatGateways API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[NatGateway]**](NatGateway.md) | A list of Nat Gateways that exists in a resource group. | [optional] 

## Example

```python
from openapi_client.models.nat_gateway_list_result import NatGatewayListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NatGatewayListResult from a JSON string
nat_gateway_list_result_instance = NatGatewayListResult.from_json(json)
# print the JSON string representation of the object
print(NatGatewayListResult.to_json())

# convert the object into a dict
nat_gateway_list_result_dict = nat_gateway_list_result_instance.to_dict()
# create an instance of NatGatewayListResult from a dict
nat_gateway_list_result_from_dict = NatGatewayListResult.from_dict(nat_gateway_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


