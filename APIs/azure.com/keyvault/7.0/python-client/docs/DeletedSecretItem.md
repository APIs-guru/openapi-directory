# DeletedSecretItem

The deleted secret item containing metadata about the deleted secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the secret was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted secret. | [optional] 
**scheduled_purge_date** | **int** | The time when the secret is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | Type of the secret value such as a password. | [optional] 
**id** | **str** | Secret identifier. | [optional] 
**managed** | **bool** | True if the secret&#39;s lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.deleted_secret_item import DeletedSecretItem

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSecretItem from a JSON string
deleted_secret_item_instance = DeletedSecretItem.from_json(json)
# print the JSON string representation of the object
print(DeletedSecretItem.to_json())

# convert the object into a dict
deleted_secret_item_dict = deleted_secret_item_instance.to_dict()
# create an instance of DeletedSecretItem from a dict
deleted_secret_item_from_dict = DeletedSecretItem.from_dict(deleted_secret_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


