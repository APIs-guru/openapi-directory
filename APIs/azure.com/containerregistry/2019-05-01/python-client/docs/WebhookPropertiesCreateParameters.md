# WebhookPropertiesCreateParameters

The parameters for creating the properties of a webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of actions that trigger the webhook to post notifications. | 
**custom_headers** | **Dict[str, str]** | Custom headers that will be added to the webhook notifications. | [optional] 
**scope** | **str** | The scope of repositories where the event can be triggered. For example, &#39;foo:*&#39; means events for all tags under repository &#39;foo&#39;. &#39;foo:bar&#39; means events for &#39;foo:bar&#39; only. &#39;foo&#39; is equivalent to &#39;foo:latest&#39;. Empty means all events. | [optional] 
**service_uri** | **str** | The service URI for the webhook to post notifications. | 
**status** | **str** | The status of the webhook at the time the operation was called. | [optional] 

## Example

```python
from openapi_client.models.webhook_properties_create_parameters import WebhookPropertiesCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookPropertiesCreateParameters from a JSON string
webhook_properties_create_parameters_instance = WebhookPropertiesCreateParameters.from_json(json)
# print the JSON string representation of the object
print(WebhookPropertiesCreateParameters.to_json())

# convert the object into a dict
webhook_properties_create_parameters_dict = webhook_properties_create_parameters_instance.to_dict()
# create an instance of WebhookPropertiesCreateParameters from a dict
webhook_properties_create_parameters_from_dict = WebhookPropertiesCreateParameters.from_dict(webhook_properties_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


