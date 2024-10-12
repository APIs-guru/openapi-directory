# WebhookEvents200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[WebhookEvents200ResponseResultEventsInner]**](WebhookEvents200ResponseResultEventsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_events200_response_result import WebhookEvents200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEvents200ResponseResult from a JSON string
webhook_events200_response_result_instance = WebhookEvents200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(WebhookEvents200ResponseResult.to_json())

# convert the object into a dict
webhook_events200_response_result_dict = webhook_events200_response_result_instance.to_dict()
# create an instance of WebhookEvents200ResponseResult from a dict
webhook_events200_response_result_from_dict = WebhookEvents200ResponseResult.from_dict(webhook_events200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


