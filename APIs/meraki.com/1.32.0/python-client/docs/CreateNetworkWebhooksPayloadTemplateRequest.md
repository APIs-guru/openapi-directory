# CreateNetworkWebhooksPayloadTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The liquid template used for the body of the webhook message. Either &#x60;body&#x60; or &#x60;bodyFile&#x60; must be specified. | [optional] 
**body_file** | **bytearray** | A file containing liquid template used for the body of the webhook message. Either &#x60;body&#x60; or &#x60;bodyFile&#x60; must be specified. | [optional] 
**headers** | [**List[CreateNetworkWebhooksPayloadTemplateRequestHeadersInner]**](CreateNetworkWebhooksPayloadTemplateRequestHeadersInner.md) | The liquid template used with the webhook headers. | [optional] 
**headers_file** | **bytearray** | A file containing the liquid template used with the webhook headers. | [optional] 
**name** | **str** | The name of the new template | 

## Example

```python
from openapi_client.models.create_network_webhooks_payload_template_request import CreateNetworkWebhooksPayloadTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksPayloadTemplateRequest from a JSON string
create_network_webhooks_payload_template_request_instance = CreateNetworkWebhooksPayloadTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksPayloadTemplateRequest.to_json())

# convert the object into a dict
create_network_webhooks_payload_template_request_dict = create_network_webhooks_payload_template_request_instance.to_dict()
# create an instance of CreateNetworkWebhooksPayloadTemplateRequest from a dict
create_network_webhooks_payload_template_request_from_dict = CreateNetworkWebhooksPayloadTemplateRequest.from_dict(create_network_webhooks_payload_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


