# Webhook


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
from openapi_client.models.webhook import Webhook

# TODO update the JSON string below
json = "{}"
# create an instance of Webhook from a JSON string
webhook_instance = Webhook.from_json(json)
# print the JSON string representation of the object
print(Webhook.to_json())

# convert the object into a dict
webhook_dict = webhook_instance.to_dict()
# create an instance of Webhook from a dict
webhook_from_dict = Webhook.from_dict(webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


