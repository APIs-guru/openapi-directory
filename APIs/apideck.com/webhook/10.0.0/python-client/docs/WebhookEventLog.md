# WebhookEventLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | ID of your Apideck Application | [optional] 
**attempts** | [**List[WebhookEventLogAttemptsInner]**](WebhookEventLogAttemptsInner.md) | record of each attempt to call webhook endpoint | [optional] 
**consumer_id** | **str** | Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn&#39;t exist yet, Vault will upsert a consumer based on your ID. | [optional] 
**endpoint** | **str** | The URL of the webhook endpoint. | [optional] 
**entity_type** | **str** | Name of the Entity described by the attributes delivered within payload | [optional] 
**event_type** | **str** | Name of source event that webhook is subscribed to. | [optional] 
**execution_attempt** | **float** | Number of attempts webhook endpoint was called before a success was returned or eventually failed | [optional] 
**http_method** | **str** | HTTP Method of request to endpoint. | [optional] 
**id** | **str** |  | [optional] 
**request_body** | **str** | The JSON stringified payload that was delivered to the webhook endpoint. | [optional] 
**response_body** | **str** | The JSON stringified response that was returned from the webhook endpoint. | [optional] 
**retry_scheduled** | **bool** | If the request has not hit the max retry limit and will be retried. | [optional] 
**service** | [**WebhookEventLogService**](WebhookEventLogService.md) |  | [optional] 
**status_code** | **int** | HTTP Status code that was returned. | [optional] 
**success** | **bool** | Whether or not the request was successful. | [optional] 
**timestamp** | **str** | ISO Date and time when the request was made. | [optional] 
**unified_api** | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_event_log import WebhookEventLog

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEventLog from a JSON string
webhook_event_log_instance = WebhookEventLog.from_json(json)
# print the JSON string representation of the object
print(WebhookEventLog.to_json())

# convert the object into a dict
webhook_event_log_dict = webhook_event_log_instance.to_dict()
# create an instance of WebhookEventLog from a dict
webhook_event_log_from_dict = WebhookEventLog.from_dict(webhook_event_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


