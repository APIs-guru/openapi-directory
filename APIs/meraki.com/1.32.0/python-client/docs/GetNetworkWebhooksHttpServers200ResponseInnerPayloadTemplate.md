# GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate

The payload template to use when posting data to the HTTP server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the payload template. | [optional] 
**payload_template_id** | **str** | The ID of the payload template. | [optional] 

## Example

```python
from openapi_client.models.get_network_webhooks_http_servers200_response_inner_payload_template import GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate from a JSON string
get_network_webhooks_http_servers200_response_inner_payload_template_instance = GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate.to_json())

# convert the object into a dict
get_network_webhooks_http_servers200_response_inner_payload_template_dict = get_network_webhooks_http_servers200_response_inner_payload_template_instance.to_dict()
# create an instance of GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate from a dict
get_network_webhooks_http_servers200_response_inner_payload_template_from_dict = GetNetworkWebhooksHttpServers200ResponseInnerPayloadTemplate.from_dict(get_network_webhooks_http_servers200_response_inner_payload_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


