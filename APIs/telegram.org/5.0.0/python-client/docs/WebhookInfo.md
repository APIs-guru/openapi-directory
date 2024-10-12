# WebhookInfo

Contains information about the current status of a webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_updates** | **List[str]** | *Optional*. A list of update types the bot is subscribed to. Defaults to all update types | [optional] 
**has_custom_certificate** | **bool** | True, if a custom certificate was provided for webhook certificate checks | 
**ip_address** | **str** | *Optional*. Currently used webhook IP address | [optional] 
**last_error_date** | **int** | *Optional*. Unix time for the most recent error that happened when trying to deliver an update via webhook | [optional] 
**last_error_message** | **str** | *Optional*. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook | [optional] 
**max_connections** | **int** | *Optional*. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery | [optional] 
**pending_update_count** | **int** | Number of updates awaiting delivery | 
**url** | **str** | Webhook URL, may be empty if webhook is not set up | 

## Example

```python
from openapi_client.models.webhook_info import WebhookInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookInfo from a JSON string
webhook_info_instance = WebhookInfo.from_json(json)
# print the JSON string representation of the object
print(WebhookInfo.to_json())

# convert the object into a dict
webhook_info_dict = webhook_info_instance.to_dict()
# create an instance of WebhookInfo from a dict
webhook_info_from_dict = WebhookInfo.from_dict(webhook_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


