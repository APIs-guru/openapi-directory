# ConnectionWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**delivery_url** | **str** | The delivery url of the webhook endpoint. | 
**description** | **str** | A description of the object. | [optional] 
**disabled_reason** | **str** | Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it&#39;s plan. | [optional] 
**events** | **List[str]** | The list of subscribed events for this webhook. [&#x60;*&#x60;] indicates that all events are enabled. | 
**execute_base_url** | **str** | The Unify Base URL events from connectors will be sent to after service id is appended. | [readonly] 
**id** | **str** |  | [optional] [readonly] 
**status** | **str** | The status of the webhook. | 
**unified_api** | [**UnifiedApiId**](UnifiedApiId.md) |  | 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_webhook import ConnectionWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionWebhook from a JSON string
connection_webhook_instance = ConnectionWebhook.from_json(json)
# print the JSON string representation of the object
print(ConnectionWebhook.to_json())

# convert the object into a dict
connection_webhook_dict = connection_webhook_instance.to_dict()
# create an instance of ConnectionWebhook from a dict
connection_webhook_from_dict = ConnectionWebhook.from_dict(connection_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


