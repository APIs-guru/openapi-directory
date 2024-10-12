# WebhookList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook** | [**List[Webhook]**](Webhook.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_list200_response_result import WebhookList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookList200ResponseResult from a JSON string
webhook_list200_response_result_instance = WebhookList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(WebhookList200ResponseResult.to_json())

# convert the object into a dict
webhook_list200_response_result_dict = webhook_list200_response_result_instance.to_dict()
# create an instance of WebhookList200ResponseResult from a dict
webhook_list200_response_result_from_dict = WebhookList200ResponseResult.from_dict(webhook_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


