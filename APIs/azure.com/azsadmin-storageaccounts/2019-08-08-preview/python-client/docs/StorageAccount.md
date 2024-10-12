# StorageAccount

Properties of the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**StorageAccountKind**](StorageAccountKind.md) |  | [optional] 
**properties** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource Type. | [optional] [readonly] 

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


