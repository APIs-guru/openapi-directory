# TransportWebhookGet

The TransportWebhook resource is a collection of transports that carry dispatched alerts to any external webhook destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**http_method_code** | **str** | The HTTP request method that must be used. | 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**must_be_encrypted_value** | **str** | An optional and arbitrary secret value that must be stored in encrypted format, such as an access token. In the webhookUrl and/or webhookHeaders fields, use the special ENCRYPTED_VALUE placeholder (must be uppercase), which we will replace with the decrypted secret value when using the transport. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**webhook_headers** | **List[str]** | The HTTP request headers, if any, for the Webhook service. To use the encrypted value:  E.g., Authorization: Bearer ENCRYPTED_VALUE. | [optional] 
**webhook_url** | **str** | The URL for the Webhook service. | 

## Example

```python
from openapi_client.models.transport_webhook_get import TransportWebhookGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportWebhookGet from a JSON string
transport_webhook_get_instance = TransportWebhookGet.from_json(json)
# print the JSON string representation of the object
print(TransportWebhookGet.to_json())

# convert the object into a dict
transport_webhook_get_dict = transport_webhook_get_instance.to_dict()
# create an instance of TransportWebhookGet from a dict
transport_webhook_get_from_dict = TransportWebhookGet.from_dict(transport_webhook_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


