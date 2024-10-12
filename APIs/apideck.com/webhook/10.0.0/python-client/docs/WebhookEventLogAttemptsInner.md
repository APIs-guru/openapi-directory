# WebhookEventLogAttemptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_attempt** | **float** | Number of attempts webhook endpoint was called before a success was returned or eventually failed | [optional] 
**status_code** | **int** | HTTP Status code that was returned. | [optional] 
**success** | **bool** | Whether or not the request was successful. | [optional] 
**timestamp** | **str** | ISO Date and time when the request was made. | [optional] 

## Example

```python
from openapi_client.models.webhook_event_log_attempts_inner import WebhookEventLogAttemptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEventLogAttemptsInner from a JSON string
webhook_event_log_attempts_inner_instance = WebhookEventLogAttemptsInner.from_json(json)
# print the JSON string representation of the object
print(WebhookEventLogAttemptsInner.to_json())

# convert the object into a dict
webhook_event_log_attempts_inner_dict = webhook_event_log_attempts_inner_instance.to_dict()
# create an instance of WebhookEventLogAttemptsInner from a dict
webhook_event_log_attempts_inner_from_dict = WebhookEventLogAttemptsInner.from_dict(webhook_event_log_attempts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


