# LocalNetworkGatewayListResult

Response for ListLocalNetworkGateways API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[LocalNetworkGateway]**](LocalNetworkGateway.md) | A list of local network gateways that exists in a resource group. | [optional] 

## Example

```python
from openapi_client.models.local_network_gateway_list_result import LocalNetworkGatewayListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNetworkGatewayListResult from a JSON string
local_network_gateway_list_result_instance = LocalNetworkGatewayListResult.from_json(json)
# print the JSON string representation of the object
print(LocalNetworkGatewayListResult.to_json())

# convert the object into a dict
local_network_gateway_list_result_dict = local_network_gateway_list_result_instance.to_dict()
# create an instance of LocalNetworkGatewayListResult from a dict
local_network_gateway_list_result_from_dict = LocalNetworkGatewayListResult.from_dict(local_network_gateway_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


