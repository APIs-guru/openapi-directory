# LeadWebhookEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** | Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn&#39;t exist yet, Vault will upsert a consumer based on your ID. | [optional] 
**entity_id** | **str** | The service provider&#39;s ID of the entity that triggered this event | [optional] 
**entity_type** | **str** | The type entity that triggered this event | [optional] 
**entity_url** | **str** | The url to retrieve entity detail. | [optional] 
**event_id** | **str** | Unique reference to this request event | [optional] 
**execution_attempt** | **float** | The current count this request event has been attempted | [optional] 
**occurred_at** | **str** | ISO Datetime for when the original event occurred | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 
**unified_api** | **str** | Name of Apideck Unified API | [optional] 
**event_type** | [**LeadEventType**](LeadEventType.md) |  | [optional] 

## Example

```python
from openapi_client.models.lead_webhook_event import LeadWebhookEvent

# TODO update the JSON string below
json = "{}"
# create an instance of LeadWebhookEvent from a JSON string
lead_webhook_event_instance = LeadWebhookEvent.from_json(json)
# print the JSON string representation of the object
print(LeadWebhookEvent.to_json())

# convert the object into a dict
lead_webhook_event_dict = lead_webhook_event_instance.to_dict()
# create an instance of LeadWebhookEvent from a dict
lead_webhook_event_from_dict = LeadWebhookEvent.from_dict(lead_webhook_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


