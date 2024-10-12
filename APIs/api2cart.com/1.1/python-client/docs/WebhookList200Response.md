# WebhookList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**WebhookList200ResponseResult**](WebhookList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_list200_response import WebhookList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookList200Response from a JSON string
webhook_list200_response_instance = WebhookList200Response.from_json(json)
# print the JSON string representation of the object
print(WebhookList200Response.to_json())

# convert the object into a dict
webhook_list200_response_dict = webhook_list200_response_instance.to_dict()
# create an instance of WebhookList200Response from a dict
webhook_list200_response_from_dict = WebhookList200Response.from_dict(webhook_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


