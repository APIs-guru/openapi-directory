# AlertWebhookListResult

List of alerting webhooks wrapped as operation result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[WebhooksList200ResponseValuesInner]**](WebhooksList200ResponseValuesInner.md) |  | 

## Example

```python
from openapi_client.models.alert_webhook_list_result import AlertWebhookListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertWebhookListResult from a JSON string
alert_webhook_list_result_instance = AlertWebhookListResult.from_json(json)
# print the JSON string representation of the object
print(AlertWebhookListResult.to_json())

# convert the object into a dict
alert_webhook_list_result_dict = alert_webhook_list_result_instance.to_dict()
# create an instance of AlertWebhookListResult from a dict
alert_webhook_list_result_from_dict = AlertWebhookListResult.from_dict(alert_webhook_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


