# AddActionWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionWebhookRequestConfig**](AddActionWebhookRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_webhook_request import AddActionWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionWebhookRequest from a JSON string
add_action_webhook_request_instance = AddActionWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionWebhookRequest.to_json())

# convert the object into a dict
add_action_webhook_request_dict = add_action_webhook_request_instance.to_dict()
# create an instance of AddActionWebhookRequest from a dict
add_action_webhook_request_from_dict = AddActionWebhookRequest.from_dict(add_action_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


