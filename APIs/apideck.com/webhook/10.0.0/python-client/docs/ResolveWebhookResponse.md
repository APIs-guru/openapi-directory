# ResolveWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | UUID of the request received | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 
**timestamp** | **str** | ISO Datetime webhook event was received | [optional] 

## Example

```python
from openapi_client.models.resolve_webhook_response import ResolveWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveWebhookResponse from a JSON string
resolve_webhook_response_instance = ResolveWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(ResolveWebhookResponse.to_json())

# convert the object into a dict
resolve_webhook_response_dict = resolve_webhook_response_instance.to_dict()
# create an instance of ResolveWebhookResponse from a dict
resolve_webhook_response_from_dict = ResolveWebhookResponse.from_dict(resolve_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


