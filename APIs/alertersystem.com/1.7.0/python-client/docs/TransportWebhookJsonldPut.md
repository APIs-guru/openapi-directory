# TransportWebhookJsonldPut

The TransportWebhook resource is a collection of transports that carry dispatched alerts to any external webhook destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**http_method_code** | **str** | The HTTP request method that must be used. | 
**must_be_encrypted_value** | **str** | An optional and arbitrary secret value that must be stored in encrypted format, such as an access token. In the webhookUrl and/or webhookHeaders fields, use the special ENCRYPTED_VALUE placeholder (must be uppercase), which we will replace with the decrypted secret value when using the transport. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**webhook_headers** | **List[str]** | The HTTP request headers, if any, for the Webhook service. To use the encrypted value:  E.g., Authorization: Bearer ENCRYPTED_VALUE. | [optional] 
**webhook_url** | **str** | The URL for the Webhook service. | 

## Example

```python
from openapi_client.models.transport_webhook_jsonld_put import TransportWebhookJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportWebhookJsonldPut from a JSON string
transport_webhook_jsonld_put_instance = TransportWebhookJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportWebhookJsonldPut.to_json())

# convert the object into a dict
transport_webhook_jsonld_put_dict = transport_webhook_jsonld_put_instance.to_dict()
# create an instance of TransportWebhookJsonldPut from a dict
transport_webhook_jsonld_put_from_dict = TransportWebhookJsonldPut.from_dict(transport_webhook_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


