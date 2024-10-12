# CreateNetworkWebhooksWebhookTest201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Webhook delivery identifier | [optional] 
**status** | **str** | Current status of the webhook delivery | [optional] 
**url** | **str** | URL where the webhook was delivered | [optional] 

## Example

```python
from openapi_client.models.create_network_webhooks_webhook_test201_response import CreateNetworkWebhooksWebhookTest201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksWebhookTest201Response from a JSON string
create_network_webhooks_webhook_test201_response_instance = CreateNetworkWebhooksWebhookTest201Response.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksWebhookTest201Response.to_json())

# convert the object into a dict
create_network_webhooks_webhook_test201_response_dict = create_network_webhooks_webhook_test201_response_instance.to_dict()
# create an instance of CreateNetworkWebhooksWebhookTest201Response from a dict
create_network_webhooks_webhook_test201_response_from_dict = CreateNetworkWebhooksWebhookTest201Response.from_dict(create_network_webhooks_webhook_test201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


