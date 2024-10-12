# WebhookEventLogsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** |  | [optional] 
**entity_type** | **str** |  | [optional] 
**event_type** | **str** |  | [optional] 
**exclude_apis** | **str** |  | [optional] 
**service** | [**WebhookEventLogsFilterService**](WebhookEventLogsFilterService.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_event_logs_filter import WebhookEventLogsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEventLogsFilter from a JSON string
webhook_event_logs_filter_instance = WebhookEventLogsFilter.from_json(json)
# print the JSON string representation of the object
print(WebhookEventLogsFilter.to_json())

# convert the object into a dict
webhook_event_logs_filter_dict = webhook_event_logs_filter_instance.to_dict()
# create an instance of WebhookEventLogsFilter from a dict
webhook_event_logs_filter_from_dict = WebhookEventLogsFilter.from_dict(webhook_event_logs_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


