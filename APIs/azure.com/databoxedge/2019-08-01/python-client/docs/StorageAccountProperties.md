# StorageAccountProperties

The storage account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_endpoint** | **str** | BlobEndpoint of Storage Account | [optional] [readonly] 
**container_count** | **int** | The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud. | [optional] [readonly] 
**data_policy** | **str** | Data policy of the storage Account. | [optional] 
**description** | **str** | Description for the storage Account. | [optional] 
**storage_account_credential_id** | **str** | Storage Account Credential Id | [optional] 
**storage_account_status** | **str** | Current status of the storage account | [optional] 

## Example

```python
from openapi_client.models.storage_account_properties import StorageAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountProperties from a JSON string
storage_account_properties_instance = StorageAccountProperties.from_json(json)
# print the JSON string representation of the object
print(StorageAccountProperties.to_json())

# convert the object into a dict
storage_account_properties_dict = storage_account_properties_instance.to_dict()
# create an instance of StorageAccountProperties from a dict
storage_account_properties_from_dict = StorageAccountProperties.from_dict(storage_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


