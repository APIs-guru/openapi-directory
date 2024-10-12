# DeleteWebhookPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_pending_updates** | **bool** | Pass *True* to drop all pending updates | [optional] 

## Example

```python
from openapi_client.models.delete_webhook_post_request import DeleteWebhookPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteWebhookPostRequest from a JSON string
delete_webhook_post_request_instance = DeleteWebhookPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteWebhookPostRequest.to_json())

# convert the object into a dict
delete_webhook_post_request_dict = delete_webhook_post_request_instance.to_dict()
# create an instance of DeleteWebhookPostRequest from a dict
delete_webhook_post_request_from_dict = DeleteWebhookPostRequest.from_dict(delete_webhook_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


