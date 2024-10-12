# AlertWebhookPingResult

Alerting webhook ping operation result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 
**response_reason** | **str** | Reason returned in response from calling webhook | [optional] 
**response_status_code** | **int** | HTTP status code returned in response from calling webhook | 

## Example

```python
from openapi_client.models.alert_webhook_ping_result import AlertWebhookPingResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertWebhookPingResult from a JSON string
alert_webhook_ping_result_instance = AlertWebhookPingResult.from_json(json)
# print the JSON string representation of the object
print(AlertWebhookPingResult.to_json())

# convert the object into a dict
alert_webhook_ping_result_dict = alert_webhook_ping_result_instance.to_dict()
# create an instance of AlertWebhookPingResult from a dict
alert_webhook_ping_result_from_dict = AlertWebhookPingResult.from_dict(alert_webhook_ping_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


