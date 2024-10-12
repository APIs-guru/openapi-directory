# StorageSkuListResult

The response from the List Storage SKUs operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Sku]**](Sku.md) | Get the list result of storage SKUs and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_sku_list_result import StorageSkuListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSkuListResult from a JSON string
storage_sku_list_result_instance = StorageSkuListResult.from_json(json)
# print the JSON string representation of the object
print(StorageSkuListResult.to_json())

# convert the object into a dict
storage_sku_list_result_dict = storage_sku_list_result_instance.to_dict()
# create an instance of StorageSkuListResult from a dict
storage_sku_list_result_from_dict = StorageSkuListResult.from_dict(storage_sku_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


