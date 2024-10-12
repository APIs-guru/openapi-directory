# WebhooksAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**events** | **List[str]** |  | [optional] 
**key** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhooks_add import WebhooksAdd

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksAdd from a JSON string
webhooks_add_instance = WebhooksAdd.from_json(json)
# print the JSON string representation of the object
print(WebhooksAdd.to_json())

# convert the object into a dict
webhooks_add_dict = webhooks_add_instance.to_dict()
# create an instance of WebhooksAdd from a dict
webhooks_add_from_dict = WebhooksAdd.from_dict(webhooks_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


