# RegisteredWebhook

ID of a registered webhook or error messages explaining why a webhook wasn't registered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_webhook_id** | **int** | The ID of the webhook. Returned if the webhook is created. | [optional] 
**errors** | **List[str]** | Error messages specifying why the webhook creation failed. | [optional] 

## Example

```python
from openapi_client.models.registered_webhook import RegisteredWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredWebhook from a JSON string
registered_webhook_instance = RegisteredWebhook.from_json(json)
# print the JSON string representation of the object
print(RegisteredWebhook.to_json())

# convert the object into a dict
registered_webhook_dict = registered_webhook_instance.to_dict()
# create an instance of RegisteredWebhook from a dict
registered_webhook_from_dict = RegisteredWebhook.from_dict(registered_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


