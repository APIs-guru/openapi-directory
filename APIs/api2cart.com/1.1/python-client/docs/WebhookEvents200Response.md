# WebhookEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**WebhookEvents200ResponseResult**](WebhookEvents200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_events200_response import WebhookEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEvents200Response from a JSON string
webhook_events200_response_instance = WebhookEvents200Response.from_json(json)
# print the JSON string representation of the object
print(WebhookEvents200Response.to_json())

# convert the object into a dict
webhook_events200_response_dict = webhook_events200_response_instance.to_dict()
# create an instance of WebhookEvents200Response from a dict
webhook_events200_response_from_dict = WebhookEvents200Response.from_dict(webhook_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


