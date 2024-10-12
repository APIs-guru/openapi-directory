# WebhooksListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key** | **str** |  | [optional] 
**batches_sent** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**events** | **List[str]** |  | [optional] 
**events_sent** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**last_error** | **str** |  | [optional] 
**last_sent_at** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhooks_list_response_inner import WebhooksListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksListResponseInner from a JSON string
webhooks_list_response_inner_instance = WebhooksListResponseInner.from_json(json)
# print the JSON string representation of the object
print(WebhooksListResponseInner.to_json())

# convert the object into a dict
webhooks_list_response_inner_dict = webhooks_list_response_inner_instance.to_dict()
# create an instance of WebhooksListResponseInner from a dict
webhooks_list_response_inner_from_dict = WebhooksListResponseInner.from_dict(webhooks_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


