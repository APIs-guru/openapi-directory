# StorageAccountItem

The storage account item containing storage account metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**id** | **str** | Storage identifier. | [optional] [readonly] 
**resource_id** | **str** | Storage account resource Id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_item import StorageAccountItem

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountItem from a JSON string
storage_account_item_instance = StorageAccountItem.from_json(json)
# print the JSON string representation of the object
print(StorageAccountItem.to_json())

# convert the object into a dict
storage_account_item_dict = storage_account_item_instance.to_dict()
# create an instance of StorageAccountItem from a dict
storage_account_item_from_dict = StorageAccountItem.from_dict(storage_account_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


