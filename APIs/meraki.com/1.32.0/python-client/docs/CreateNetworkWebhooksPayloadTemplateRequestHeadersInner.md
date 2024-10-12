# CreateNetworkWebhooksPayloadTemplateRequestHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the header template | [optional] 
**template** | **str** | The liquid template for the headers | [optional] 

## Example

```python
from openapi_client.models.create_network_webhooks_payload_template_request_headers_inner import CreateNetworkWebhooksPayloadTemplateRequestHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksPayloadTemplateRequestHeadersInner from a JSON string
create_network_webhooks_payload_template_request_headers_inner_instance = CreateNetworkWebhooksPayloadTemplateRequestHeadersInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksPayloadTemplateRequestHeadersInner.to_json())

# convert the object into a dict
create_network_webhooks_payload_template_request_headers_inner_dict = create_network_webhooks_payload_template_request_headers_inner_instance.to_dict()
# create an instance of CreateNetworkWebhooksPayloadTemplateRequestHeadersInner from a dict
create_network_webhooks_payload_template_request_headers_inner_from_dict = CreateNetworkWebhooksPayloadTemplateRequestHeadersInner.from_dict(create_network_webhooks_payload_template_request_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


