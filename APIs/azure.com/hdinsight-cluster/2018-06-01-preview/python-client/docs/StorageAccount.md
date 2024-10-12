# StorageAccount

The storage Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The container in the storage account, only to be specified for WASB storage accounts. | [optional] 
**file_system** | **str** | The filesystem, only to be specified for Azure Data Lake Storage Gen 2. | [optional] 
**is_default** | **bool** | Whether or not the storage account is the default storage account. | [optional] 
**key** | **str** | The storage account access key. | [optional] 
**msi_resource_id** | **str** | The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2. | [optional] 
**name** | **str** | The name of the storage account. | [optional] 
**resource_id** | **str** | The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2. | [optional] 

## Example

```python
from openapi_client.models.storage_account import StorageAccount

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccount from a JSON string
storage_account_instance = StorageAccount.from_json(json)
# print the JSON string representation of the object
print(StorageAccount.to_json())

# convert the object into a dict
storage_account_dict = storage_account_instance.to_dict()
# create an instance of StorageAccount from a dict
storage_account_from_dict = StorageAccount.from_dict(storage_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


