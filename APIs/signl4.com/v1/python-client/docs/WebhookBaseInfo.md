# WebhookBaseInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_address** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_base_info import WebhookBaseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookBaseInfo from a JSON string
webhook_base_info_instance = WebhookBaseInfo.from_json(json)
# print the JSON string representation of the object
print(WebhookBaseInfo.to_json())

# convert the object into a dict
webhook_base_info_dict = webhook_base_info_instance.to_dict()
# create an instance of WebhookBaseInfo from a dict
webhook_base_info_from_dict = WebhookBaseInfo.from_dict(webhook_base_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


