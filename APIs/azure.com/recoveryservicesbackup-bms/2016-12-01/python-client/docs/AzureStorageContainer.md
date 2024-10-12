# AzureStorageContainer

Azure Storage Account workload-specific container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protected_item_count** | **int** | Number of items backed up in this container. | [optional] 
**resource_group** | **str** | Resource group name of Recovery Services Vault. | [optional] 
**source_resource_id** | **str** | Fully qualified ARM url. | [optional] 
**storage_account_version** | **str** | Storage account version. | [optional] 

## Example

```python
from openapi_client.models.azure_storage_container import AzureStorageContainer

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageContainer from a JSON string
azure_storage_container_instance = AzureStorageContainer.from_json(json)
# print the JSON string representation of the object
print(AzureStorageContainer.to_json())

# convert the object into a dict
azure_storage_container_dict = azure_storage_container_instance.to_dict()
# create an instance of AzureStorageContainer from a dict
azure_storage_container_from_dict = AzureStorageContainer.from_dict(azure_storage_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


