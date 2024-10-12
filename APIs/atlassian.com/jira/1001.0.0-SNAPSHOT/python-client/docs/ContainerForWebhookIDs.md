# ContainerForWebhookIDs

Container for a list of webhook IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_ids** | **List[int]** | A list of webhook IDs. | 

## Example

```python
from openapi_client.models.container_for_webhook_ids import ContainerForWebhookIDs

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerForWebhookIDs from a JSON string
container_for_webhook_ids_instance = ContainerForWebhookIDs.from_json(json)
# print the JSON string representation of the object
print(ContainerForWebhookIDs.to_json())

# convert the object into a dict
container_for_webhook_ids_dict = container_for_webhook_ids_instance.to_dict()
# create an instance of ContainerForWebhookIDs from a dict
container_for_webhook_ids_from_dict = ContainerForWebhookIDs.from_dict(container_for_webhook_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


