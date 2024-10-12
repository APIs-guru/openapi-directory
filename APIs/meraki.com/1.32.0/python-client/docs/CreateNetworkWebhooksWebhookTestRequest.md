# CreateNetworkWebhooksWebhookTestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type_id** | **str** | The type of alert which the test webhook will send. Optional. Defaults to power_supply_down. | [optional] [default to 'power_supply_down']
**payload_template_id** | **str** | The ID of the payload template of the test webhook. Defaults to the HTTP server&#39;s template ID if one exists for the given URL, or Generic template ID otherwise | [optional] 
**payload_template_name** | **str** | The name of the payload template. | [optional] 
**shared_secret** | **str** | The shared secret the test webhook will send. Optional. Defaults to an empty string. | [optional] [default to '']
**url** | **str** | The URL where the test webhook will be sent | 

## Example

```python
from openapi_client.models.create_network_webhooks_webhook_test_request import CreateNetworkWebhooksWebhookTestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWebhooksWebhookTestRequest from a JSON string
create_network_webhooks_webhook_test_request_instance = CreateNetworkWebhooksWebhookTestRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWebhooksWebhookTestRequest.to_json())

# convert the object into a dict
create_network_webhooks_webhook_test_request_dict = create_network_webhooks_webhook_test_request_instance.to_dict()
# create an instance of CreateNetworkWebhooksWebhookTestRequest from a dict
create_network_webhooks_webhook_test_request_from_dict = CreateNetworkWebhooksWebhookTestRequest.from_dict(create_network_webhooks_webhook_test_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


