# WebhookInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**external_address** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_info import WebhookInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookInfo from a JSON string
webhook_info_instance = WebhookInfo.from_json(json)
# print the JSON string representation of the object
print(WebhookInfo.to_json())

# convert the object into a dict
webhook_info_dict = webhook_info_instance.to_dict()
# create an instance of WebhookInfo from a dict
webhook_info_from_dict = WebhookInfo.from_dict(webhook_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


