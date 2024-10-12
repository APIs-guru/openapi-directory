# WebhooksDescription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | a string with a length from 0 to 16384 | [optional] 

## Example

```python
from openapi_client.models.webhooks_description import WebhooksDescription

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksDescription from a JSON string
webhooks_description_instance = WebhooksDescription.from_json(json)
# print the JSON string representation of the object
print(WebhooksDescription.to_json())

# convert the object into a dict
webhooks_description_dict = webhooks_description_instance.to_dict()
# create an instance of WebhooksDescription from a dict
webhooks_description_from_dict = WebhooksDescription.from_dict(webhooks_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


