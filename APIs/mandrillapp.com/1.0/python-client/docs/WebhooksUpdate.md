# WebhooksUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**events** | **List[str]** |  | [optional] 
**id** | **int** |  | [optional] 
**key** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhooks_update import WebhooksUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksUpdate from a JSON string
webhooks_update_instance = WebhooksUpdate.from_json(json)
# print the JSON string representation of the object
print(WebhooksUpdate.to_json())

# convert the object into a dict
webhooks_update_dict = webhooks_update_instance.to_dict()
# create an instance of WebhooksUpdate from a dict
webhooks_update_from_dict = WebhooksUpdate.from_dict(webhooks_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


