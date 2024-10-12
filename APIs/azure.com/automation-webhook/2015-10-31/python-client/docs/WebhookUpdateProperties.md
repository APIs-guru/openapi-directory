# WebhookUpdateProperties

The properties of the update webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the webhook. | [optional] 
**is_enabled** | **bool** | Gets or sets the value of the enabled flag of webhook. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 
**run_on** | **str** | Gets or sets the name of the hybrid worker group the webhook job will run on. | [optional] 

## Example

```python
from openapi_client.models.webhook_update_properties import WebhookUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookUpdateProperties from a JSON string
webhook_update_properties_instance = WebhookUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(WebhookUpdateProperties.to_json())

# convert the object into a dict
webhook_update_properties_dict = webhook_update_properties_instance.to_dict()
# create an instance of WebhookUpdateProperties from a dict
webhook_update_properties_from_dict = WebhookUpdateProperties.from_dict(webhook_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


