# P2sVpnGatewaysListDefaultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**details** | [**List[P2sVpnGatewaysListDefaultResponseDetailsInner]**](P2sVpnGatewaysListDefaultResponseDetailsInner.md) |  | [optional] 
**inner_error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**target** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.p2s_vpn_gateways_list_default_response import P2sVpnGatewaysListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of P2sVpnGatewaysListDefaultResponse from a JSON string
p2s_vpn_gateways_list_default_response_instance = P2sVpnGatewaysListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(P2sVpnGatewaysListDefaultResponse.to_json())

# convert the object into a dict
p2s_vpn_gateways_list_default_response_dict = p2s_vpn_gateways_list_default_response_instance.to_dict()
# create an instance of P2sVpnGatewaysListDefaultResponse from a dict
p2s_vpn_gateways_list_default_response_from_dict = P2sVpnGatewaysListDefaultResponse.from_dict(p2s_vpn_gateways_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


