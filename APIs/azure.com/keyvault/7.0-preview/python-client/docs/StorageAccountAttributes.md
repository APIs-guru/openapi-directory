# StorageAccountAttributes

The storage account management attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | the enabled state of the object. | [optional] 
**recovery_level** | **str** | Reflects the deletion recovery level currently in effect for storage accounts in the current vault. If it contains &#39;Purgeable&#39; the storage account can be permanently deleted by a privileged user; otherwise, only the system can purge the storage account, at the end of the retention interval. | [optional] [readonly] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_attributes import StorageAccountAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountAttributes from a JSON string
storage_account_attributes_instance = StorageAccountAttributes.from_json(json)
# print the JSON string representation of the object
print(StorageAccountAttributes.to_json())

# convert the object into a dict
storage_account_attributes_dict = storage_account_attributes_instance.to_dict()
# create an instance of StorageAccountAttributes from a dict
storage_account_attributes_from_dict = StorageAccountAttributes.from_dict(storage_account_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


