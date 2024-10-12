# GetWebhookByIdResponseBody

A get webhook id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**WebhookEvent**](WebhookEvent.md) |  | 
**url** | **str** | The url that the webhook sends the request to | 
**webhook_id** | **str** | A string that uniquely identifies the webhook | [readonly] 

## Example

```python
from openapi_client.models.get_webhook_by_id_response_body import GetWebhookByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookByIdResponseBody from a JSON string
get_webhook_by_id_response_body_instance = GetWebhookByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetWebhookByIdResponseBody.to_json())

# convert the object into a dict
get_webhook_by_id_response_body_dict = get_webhook_by_id_response_body_instance.to_dict()
# create an instance of GetWebhookByIdResponseBody from a dict
get_webhook_by_id_response_body_from_dict = GetWebhookByIdResponseBody.from_dict(get_webhook_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


