# StorageAccount

The storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Gets the Kind. | [optional] [readonly] 
**properties** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags assigned to a resource; can be used for viewing and grouping a resource (across resource groups). | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

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


