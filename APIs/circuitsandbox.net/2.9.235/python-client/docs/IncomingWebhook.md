# IncomingWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | The conversation where the posts go to | [optional] 
**creation_time** | **float** | Milliseconds since 1.1.1900 when the hook was created | [optional] 
**creator_id** | **str** | Th e user who created the webhook | [optional] 
**description** | **str** | A short plain text to describe the webhook | [optional] 
**modification_time** | **float** | Milliseconds since 1.1.1900 when the hook was modified | [optional] 
**name** | **str** | A name to identify the webhook | [optional] 
**status** | **str** | Status may be ENABLED or DISABLED. A disabled hook cannot be used | [optional] 
**tenant_id** | **str** | The tenant where the conversation and users belong to | [optional] 
**url** | **str** | The url where the webhokk can be used | [optional] 
**user_id** | **str** | The user who will occur as author of the posts | [optional] 
**webhook_id** | **str** | Unique id of the webhook | [optional] 

## Example

```python
from openapi_client.models.incoming_webhook import IncomingWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of IncomingWebhook from a JSON string
incoming_webhook_instance = IncomingWebhook.from_json(json)
# print the JSON string representation of the object
print(IncomingWebhook.to_json())

# convert the object into a dict
incoming_webhook_dict = incoming_webhook_instance.to_dict()
# create an instance of IncomingWebhook from a dict
incoming_webhook_from_dict = IncomingWebhook.from_dict(incoming_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


