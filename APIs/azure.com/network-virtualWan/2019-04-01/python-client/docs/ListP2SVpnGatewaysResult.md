# ListP2SVpnGatewaysResult

Result of the request to list P2SVpnGateways. It contains a list of P2SVpnGateways and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[P2SVpnGateway]**](P2SVpnGateway.md) | List of P2SVpnGateways. | [optional] 

## Example

```python
from openapi_client.models.list_p2_s_vpn_gateways_result import ListP2SVpnGatewaysResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListP2SVpnGatewaysResult from a JSON string
list_p2_s_vpn_gateways_result_instance = ListP2SVpnGatewaysResult.from_json(json)
# print the JSON string representation of the object
print(ListP2SVpnGatewaysResult.to_json())

# convert the object into a dict
list_p2_s_vpn_gateways_result_dict = list_p2_s_vpn_gateways_result_instance.to_dict()
# create an instance of ListP2SVpnGatewaysResult from a dict
list_p2_s_vpn_gateways_result_from_dict = ListP2SVpnGatewaysResult.from_dict(list_p2_s_vpn_gateways_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


