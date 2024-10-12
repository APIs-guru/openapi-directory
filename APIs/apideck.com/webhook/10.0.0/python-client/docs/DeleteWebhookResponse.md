# DeleteWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Webhook**](Webhook.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_webhook_response import DeleteWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteWebhookResponse from a JSON string
delete_webhook_response_instance = DeleteWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteWebhookResponse.to_json())

# convert the object into a dict
delete_webhook_response_dict = delete_webhook_response_instance.to_dict()
# create an instance of DeleteWebhookResponse from a dict
delete_webhook_response_from_dict = DeleteWebhookResponse.from_dict(delete_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


