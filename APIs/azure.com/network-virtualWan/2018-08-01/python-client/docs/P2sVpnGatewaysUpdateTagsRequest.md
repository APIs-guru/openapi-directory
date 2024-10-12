# P2sVpnGatewaysUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.p2s_vpn_gateways_update_tags_request import P2sVpnGatewaysUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of P2sVpnGatewaysUpdateTagsRequest from a JSON string
p2s_vpn_gateways_update_tags_request_instance = P2sVpnGatewaysUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(P2sVpnGatewaysUpdateTagsRequest.to_json())

# convert the object into a dict
p2s_vpn_gateways_update_tags_request_dict = p2s_vpn_gateways_update_tags_request_instance.to_dict()
# create an instance of P2sVpnGatewaysUpdateTagsRequest from a dict
p2s_vpn_gateways_update_tags_request_from_dict = P2sVpnGatewaysUpdateTagsRequest.from_dict(p2s_vpn_gateways_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


