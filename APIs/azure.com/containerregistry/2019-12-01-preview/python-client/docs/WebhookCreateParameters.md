# WebhookCreateParameters

The parameters for creating a webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the webhook. This cannot be changed after the resource is created. | 
**properties** | [**WebhookPropertiesCreateParameters**](WebhookPropertiesCreateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags for the webhook. | [optional] 

## Example

```python
from openapi_client.models.webhook_create_parameters import WebhookCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCreateParameters from a JSON string
webhook_create_parameters_instance = WebhookCreateParameters.from_json(json)
# print the JSON string representation of the object
print(WebhookCreateParameters.to_json())

# convert the object into a dict
webhook_create_parameters_dict = webhook_create_parameters_instance.to_dict()
# create an instance of WebhookCreateParameters from a dict
webhook_create_parameters_from_dict = WebhookCreateParameters.from_dict(webhook_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


