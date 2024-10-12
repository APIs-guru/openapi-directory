# UpdateNetworkWebhooksPayloadTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The liquid template used for the body of the webhook message. | [optional] 
**body_file** | **bytearray** | A file containing liquid template used for the body of the webhook message. | [optional] 
**headers** | [**List[CreateNetworkWebhooksPayloadTemplateRequestHeadersInner]**](CreateNetworkWebhooksPayloadTemplateRequestHeadersInner.md) | The liquid template used with the webhook headers. | [optional] 
**headers_file** | **bytearray** | A file containing the liquid template used with the webhook headers. | [optional] 
**name** | **str** | The name of the template | [optional] 

## Example

```python
from openapi_client.models.update_network_webhooks_payload_template_request import UpdateNetworkWebhooksPayloadTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWebhooksPayloadTemplateRequest from a JSON string
update_network_webhooks_payload_template_request_instance = UpdateNetworkWebhooksPayloadTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWebhooksPayloadTemplateRequest.to_json())

# convert the object into a dict
update_network_webhooks_payload_template_request_dict = update_network_webhooks_payload_template_request_instance.to_dict()
# create an instance of UpdateNetworkWebhooksPayloadTemplateRequest from a dict
update_network_webhooks_payload_template_request_from_dict = UpdateNetworkWebhooksPayloadTemplateRequest.from_dict(update_network_webhooks_payload_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


