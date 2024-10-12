# WebhookActivityEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**WebhookActivityEntryAttributes**](WebhookActivityEntryAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_activity_entry import WebhookActivityEntry

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookActivityEntry from a JSON string
webhook_activity_entry_instance = WebhookActivityEntry.from_json(json)
# print the JSON string representation of the object
print(WebhookActivityEntry.to_json())

# convert the object into a dict
webhook_activity_entry_dict = webhook_activity_entry_instance.to_dict()
# create an instance of WebhookActivityEntry from a dict
webhook_activity_entry_from_dict = WebhookActivityEntry.from_dict(webhook_activity_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


