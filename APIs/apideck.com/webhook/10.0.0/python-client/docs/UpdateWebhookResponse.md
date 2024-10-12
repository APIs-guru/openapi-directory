# UpdateWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Webhook**](Webhook.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_webhook_response import UpdateWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWebhookResponse from a JSON string
update_webhook_response_instance = UpdateWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateWebhookResponse.to_json())

# convert the object into a dict
update_webhook_response_dict = update_webhook_response_instance.to_dict()
# create an instance of UpdateWebhookResponse from a dict
update_webhook_response_from_dict = UpdateWebhookResponse.from_dict(update_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


