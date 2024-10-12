# WebhookListResult

The response model for the list webhook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Webhook]**](Webhook.md) | Gets or sets a list of webhooks. | [optional] 

## Example

```python
from openapi_client.models.webhook_list_result import WebhookListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookListResult from a JSON string
webhook_list_result_instance = WebhookListResult.from_json(json)
# print the JSON string representation of the object
print(WebhookListResult.to_json())

# convert the object into a dict
webhook_list_result_dict = webhook_list_result_instance.to_dict()
# create an instance of WebhookListResult from a dict
webhook_list_result_from_dict = WebhookListResult.from_dict(webhook_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


