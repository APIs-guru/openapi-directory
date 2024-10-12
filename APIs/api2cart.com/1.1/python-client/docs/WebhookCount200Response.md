# WebhookCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**WebhookCount200ResponseResult**](WebhookCount200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_count200_response import WebhookCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCount200Response from a JSON string
webhook_count200_response_instance = WebhookCount200Response.from_json(json)
# print the JSON string representation of the object
print(WebhookCount200Response.to_json())

# convert the object into a dict
webhook_count200_response_dict = webhook_count200_response_instance.to_dict()
# create an instance of WebhookCount200Response from a dict
webhook_count200_response_from_dict = WebhookCount200Response.from_dict(webhook_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


