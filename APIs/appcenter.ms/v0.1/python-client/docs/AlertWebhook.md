# AlertWebhook

Alerting webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Allows eanble/disable webhook | [optional] 
**event_types** | **List[str]** | Event types enabled for webhook | 
**id** | **str** | The unique id (UUID) of the webhook | [optional] 
**name** | **str** | display name of the webhook | 
**url** | **str** | target url of the webhook | 

## Example

```python
from openapi_client.models.alert_webhook import AlertWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of AlertWebhook from a JSON string
alert_webhook_instance = AlertWebhook.from_json(json)
# print the JSON string representation of the object
print(AlertWebhook.to_json())

# convert the object into a dict
alert_webhook_dict = alert_webhook_instance.to_dict()
# create an instance of AlertWebhook from a dict
alert_webhook_from_dict = AlertWebhook.from_dict(alert_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


