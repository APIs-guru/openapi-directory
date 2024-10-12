# GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the header attribute | [optional] 
**template** | **str** | The value returned in the header attribute, in liquid template | [optional] 

## Example

```python
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner_headers_inner import GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner from a JSON string
get_network_webhooks_payload_templates200_response_inner_headers_inner_instance = GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner.to_json())

# convert the object into a dict
get_network_webhooks_payload_templates200_response_inner_headers_inner_dict = get_network_webhooks_payload_templates200_response_inner_headers_inner_instance.to_dict()
# create an instance of GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner from a dict
get_network_webhooks_payload_templates200_response_inner_headers_inner_from_dict = GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner.from_dict(get_network_webhooks_payload_templates200_response_inner_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


