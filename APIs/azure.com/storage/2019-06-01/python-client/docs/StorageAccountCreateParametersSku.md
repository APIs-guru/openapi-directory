# StorageAccountCreateParametersSku

The SKU of the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType. | 
**tier** | **str** | The SKU tier. This is based on the SKU name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_create_parameters_sku import StorageAccountCreateParametersSku

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCreateParametersSku from a JSON string
storage_account_create_parameters_sku_instance = StorageAccountCreateParametersSku.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCreateParametersSku.to_json())

# convert the object into a dict
storage_account_create_parameters_sku_dict = storage_account_create_parameters_sku_instance.to_dict()
# create an instance of StorageAccountCreateParametersSku from a dict
storage_account_create_parameters_sku_from_dict = StorageAccountCreateParametersSku.from_dict(storage_account_create_parameters_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


