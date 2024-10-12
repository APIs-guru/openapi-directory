# GetNetworkWebhooksHttpServers200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **bytearray** | A Base64 encoded ID. | [optional] 
**name** | **str** | A name for easy reference to the HTTP server | [optional] 
**network_id** | **str** | A Meraki network ID. | [optional] 
**payload_template** | [**GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate**](GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate.md) |  | [optional] 
**url** | **str** | The URL of the HTTP server. | [optional] 

## Example

```python
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWebhooksHttpServers200ResponseInner from a JSON string
get_network_webhooks_http_servers200_response_inner_instance = GetNetworkWebhooksHttpServers200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWebhooksHttpServers200ResponseInner.to_json())

# convert the object into a dict
get_network_webhooks_http_servers200_response_inner_dict = get_network_webhooks_http_servers200_response_inner_instance.to_dict()
# create an instance of GetNetworkWebhooksHttpServers200ResponseInner from a dict
get_network_webhooks_http_servers200_response_inner_from_dict = GetNetworkWebhooksHttpServers200ResponseInner.from_dict(get_network_webhooks_http_servers200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


