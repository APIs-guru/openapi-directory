# WebhooksList200ResponseValuesInner

Alerting webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Allows eanble/disable webhook | [optional] 
**event_types** | **List[str]** | Event types enabled for webhook | 
**id** | **str** | The unique id (UUID) of the webhook | [optional] 
**name** | **str** | display name of the webhook | 
**url** | **str** | target url of the webhook | 

## Example

```python
from openapi_client.models.webhooks_list200_response_values_inner import WebhooksList200ResponseValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksList200ResponseValuesInner from a JSON string
webhooks_list200_response_values_inner_instance = WebhooksList200ResponseValuesInner.from_json(json)
# print the JSON string representation of the object
print(WebhooksList200ResponseValuesInner.to_json())

# convert the object into a dict
webhooks_list200_response_values_inner_dict = webhooks_list200_response_values_inner_instance.to_dict()
# create an instance of WebhooksList200ResponseValuesInner from a dict
webhooks_list200_response_values_inner_from_dict = WebhooksList200ResponseValuesInner.from_dict(webhooks_list200_response_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


