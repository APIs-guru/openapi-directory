# GetWebhookEventLogsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WebhookEventLog]**](WebhookEventLog.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_webhook_event_logs_response import GetWebhookEventLogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEventLogsResponse from a JSON string
get_webhook_event_logs_response_instance = GetWebhookEventLogsResponse.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEventLogsResponse.to_json())

# convert the object into a dict
get_webhook_event_logs_response_dict = get_webhook_event_logs_response_instance.to_dict()
# create an instance of GetWebhookEventLogsResponse from a dict
get_webhook_event_logs_response_from_dict = GetWebhookEventLogsResponse.from_dict(get_webhook_event_logs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


