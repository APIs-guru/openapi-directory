# WebhookRelationshipsOwnerAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Account ID | [optional] 
**type** | **str** | Type of thing it is \&quot;account\&quot; | [optional] 

## Example

```python
from openapi_client.models.webhook_relationships_owner_account_data import WebhookRelationshipsOwnerAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookRelationshipsOwnerAccountData from a JSON string
webhook_relationships_owner_account_data_instance = WebhookRelationshipsOwnerAccountData.from_json(json)
# print the JSON string representation of the object
print(WebhookRelationshipsOwnerAccountData.to_json())

# convert the object into a dict
webhook_relationships_owner_account_data_dict = webhook_relationships_owner_account_data_instance.to_dict()
# create an instance of WebhookRelationshipsOwnerAccountData from a dict
webhook_relationships_owner_account_data_from_dict = WebhookRelationshipsOwnerAccountData.from_dict(webhook_relationships_owner_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


