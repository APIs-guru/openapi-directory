# GetNetworkWebhooksPayloadTemplates200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The body of the payload template, in liquid template | [optional] 
**headers** | [**List[GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner]**](GetNetworkWebhooksPayloadTemplates200ResponseInnerHeadersInner.md) | The payload template headers, will be rendered as a key-value pair in the webhook. | [optional] 
**name** | **str** | The name of the payload template | [optional] 
**payload_template_id** | **str** | Webhook payload template Id | [optional] 
**type** | **str** | The type of the payload template | [optional] 

## Example

```python
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWebhooksPayloadTemplates200ResponseInner from a JSON string
get_network_webhooks_payload_templates200_response_inner_instance = GetNetworkWebhooksPayloadTemplates200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWebhooksPayloadTemplates200ResponseInner.to_json())

# convert the object into a dict
get_network_webhooks_payload_templates200_response_inner_dict = get_network_webhooks_payload_templates200_response_inner_instance.to_dict()
# create an instance of GetNetworkWebhooksPayloadTemplates200ResponseInner from a dict
get_network_webhooks_payload_templates200_response_inner_from_dict = GetNetworkWebhooksPayloadTemplates200ResponseInner.from_dict(get_network_webhooks_payload_templates200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


