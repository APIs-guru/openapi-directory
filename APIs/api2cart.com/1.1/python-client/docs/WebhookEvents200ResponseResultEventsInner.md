# WebhookEvents200ResponseResultEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**entity** | **str** |  | [optional] 
**webhook_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_events200_response_result_events_inner import WebhookEvents200ResponseResultEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEvents200ResponseResultEventsInner from a JSON string
webhook_events200_response_result_events_inner_instance = WebhookEvents200ResponseResultEventsInner.from_json(json)
# print the JSON string representation of the object
print(WebhookEvents200ResponseResultEventsInner.to_json())

# convert the object into a dict
webhook_events200_response_result_events_inner_dict = webhook_events200_response_result_events_inner_instance.to_dict()
# create an instance of WebhookEvents200ResponseResultEventsInner from a dict
webhook_events200_response_result_events_inner_from_dict = WebhookEvents200ResponseResultEventsInner.from_dict(webhook_events200_response_result_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


