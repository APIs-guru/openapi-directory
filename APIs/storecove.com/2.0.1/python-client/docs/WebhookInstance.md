# WebhookInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The webhook body that would have been pushed if this were a push-mode webhook. | [optional] 
**guid** | **str** | The GUID of the WebhookInstance. Use this to delete it. | [optional] 

## Example

```python
from openapi_client.models.webhook_instance import WebhookInstance

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookInstance from a JSON string
webhook_instance_instance = WebhookInstance.from_json(json)
# print the JSON string representation of the object
print(WebhookInstance.to_json())

# convert the object into a dict
webhook_instance_dict = webhook_instance_instance.to_dict()
# create an instance of WebhookInstance from a dict
webhook_instance_from_dict = WebhookInstance.from_dict(webhook_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


