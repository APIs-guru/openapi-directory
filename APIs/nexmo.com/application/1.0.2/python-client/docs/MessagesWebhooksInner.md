# MessagesWebhooksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | &#x60;inbound_url&#x60;: The URL where inbound messages are delivered. &#x60;status_url&#x60;: The URL where message status is delivered. | 
**endpoint_type** | **str** |  | 
**http_method** | **str** | The HTTP method used to send data to the &#x60;inbound_url&#x60; or &#x60;status_url&#x60;. Default is POST. | 

## Example

```python
from openapi_client.models.messages_webhooks_inner import MessagesWebhooksInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesWebhooksInner from a JSON string
messages_webhooks_inner_instance = MessagesWebhooksInner.from_json(json)
# print the JSON string representation of the object
print(MessagesWebhooksInner.to_json())

# convert the object into a dict
messages_webhooks_inner_dict = messages_webhooks_inner_instance.to_dict()
# create an instance of MessagesWebhooksInner from a dict
messages_webhooks_inner_from_dict = MessagesWebhooksInner.from_dict(messages_webhooks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


