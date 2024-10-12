# WebhooksSubscribeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | **List[str]** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhooks_subscribe_request import WebhooksSubscribeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksSubscribeRequest from a JSON string
webhooks_subscribe_request_instance = WebhooksSubscribeRequest.from_json(json)
# print the JSON string representation of the object
print(WebhooksSubscribeRequest.to_json())

# convert the object into a dict
webhooks_subscribe_request_dict = webhooks_subscribe_request_instance.to_dict()
# create an instance of WebhooksSubscribeRequest from a dict
webhooks_subscribe_request_from_dict = WebhooksSubscribeRequest.from_dict(webhooks_subscribe_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


