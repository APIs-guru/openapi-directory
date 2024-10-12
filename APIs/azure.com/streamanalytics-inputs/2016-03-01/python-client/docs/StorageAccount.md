# StorageAccount

The properties that are associated with an Azure Storage account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 
**account_name** | **str** | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 

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


