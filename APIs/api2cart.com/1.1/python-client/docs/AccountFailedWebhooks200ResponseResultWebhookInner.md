# AccountFailedWebhooks200ResponseResultWebhookInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** |  | [optional] 
**time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**webhook_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.account_failed_webhooks200_response_result_webhook_inner import AccountFailedWebhooks200ResponseResultWebhookInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFailedWebhooks200ResponseResultWebhookInner from a JSON string
account_failed_webhooks200_response_result_webhook_inner_instance = AccountFailedWebhooks200ResponseResultWebhookInner.from_json(json)
# print the JSON string representation of the object
print(AccountFailedWebhooks200ResponseResultWebhookInner.to_json())

# convert the object into a dict
account_failed_webhooks200_response_result_webhook_inner_dict = account_failed_webhooks200_response_result_webhook_inner_instance.to_dict()
# create an instance of AccountFailedWebhooks200ResponseResultWebhookInner from a dict
account_failed_webhooks200_response_result_webhook_inner_from_dict = AccountFailedWebhooks200ResponseResultWebhookInner.from_dict(account_failed_webhooks200_response_result_webhook_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


