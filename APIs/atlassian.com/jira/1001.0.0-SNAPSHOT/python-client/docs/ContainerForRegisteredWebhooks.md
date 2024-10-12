# ContainerForRegisteredWebhooks

Container for a list of registered webhooks. Webhook details are returned in the same order as the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_registration_result** | [**List[RegisteredWebhook]**](RegisteredWebhook.md) | A list of registered webhooks. | [optional] 

## Example

```python
from openapi_client.models.container_for_registered_webhooks import ContainerForRegisteredWebhooks

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerForRegisteredWebhooks from a JSON string
container_for_registered_webhooks_instance = ContainerForRegisteredWebhooks.from_json(json)
# print the JSON string representation of the object
print(ContainerForRegisteredWebhooks.to_json())

# convert the object into a dict
container_for_registered_webhooks_dict = container_for_registered_webhooks_instance.to_dict()
# create an instance of ContainerForRegisteredWebhooks from a dict
container_for_registered_webhooks_from_dict = ContainerForRegisteredWebhooks.from_dict(container_for_registered_webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


