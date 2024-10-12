# GetWebhookInfoPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**WebhookInfo**](WebhookInfo.md) |  | 

## Example

```python
from openapi_client.models.get_webhook_info_post200_response import GetWebhookInfoPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookInfoPost200Response from a JSON string
get_webhook_info_post200_response_instance = GetWebhookInfoPost200Response.from_json(json)
# print the JSON string representation of the object
print(GetWebhookInfoPost200Response.to_json())

# convert the object into a dict
get_webhook_info_post200_response_dict = get_webhook_info_post200_response_instance.to_dict()
# create an instance of GetWebhookInfoPost200Response from a dict
get_webhook_info_post200_response_from_dict = GetWebhookInfoPost200Response.from_dict(get_webhook_info_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


