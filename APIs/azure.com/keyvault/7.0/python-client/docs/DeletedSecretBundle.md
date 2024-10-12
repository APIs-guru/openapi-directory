# DeletedSecretBundle

A Deleted Secret consisting of its previous id, attributes and its tags, as well as information on when it will be purged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the secret was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted secret. | [optional] 
**scheduled_purge_date** | **int** | The time when the secret is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**id** | **str** | The secret id. | [optional] 
**kid** | **str** | If this is a secret backing a KV certificate, then this field specifies the corresponding key backing the KV certificate. | [optional] [readonly] 
**managed** | **bool** | True if the secret&#39;s lifetime is managed by key vault. If this is a secret backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**value** | **str** | The secret value. | [optional] 

## Example

```python
from openapi_client.models.deleted_secret_bundle import DeletedSecretBundle

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSecretBundle from a JSON string
deleted_secret_bundle_instance = DeletedSecretBundle.from_json(json)
# print the JSON string representation of the object
print(DeletedSecretBundle.to_json())

# convert the object into a dict
deleted_secret_bundle_dict = deleted_secret_bundle_instance.to_dict()
# create an instance of DeletedSecretBundle from a dict
deleted_secret_bundle_from_dict = DeletedSecretBundle.from_dict(deleted_secret_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


