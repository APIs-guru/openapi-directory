# ListVpnGatewaysResult

Result of the request to list VpnGateways. It contains a list of VpnGateways and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VpnGateway]**](VpnGateway.md) | List of VpnGateways. | [optional] 

## Example

```python
from openapi_client.models.list_vpn_gateways_result import ListVpnGatewaysResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVpnGatewaysResult from a JSON string
list_vpn_gateways_result_instance = ListVpnGatewaysResult.from_json(json)
# print the JSON string representation of the object
print(ListVpnGatewaysResult.to_json())

# convert the object into a dict
list_vpn_gateways_result_dict = list_vpn_gateways_result_instance.to_dict()
# create an instance of ListVpnGatewaysResult from a dict
list_vpn_gateways_result_from_dict = ListVpnGatewaysResult.from_dict(list_vpn_gateways_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


