# AzureSqlProtectedItem

This is an Azure SQL workload-specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureSqlProtectedItemExtendedInfo**](AzureSqlProtectedItemExtendedInfo.md) |  | [optional] 
**protected_item_data_id** | **str** | The internal ID of a backup item. The internal ID is used by the Azure SQL Backup engine to contact Recovery Services. | [optional] 
**protection_state** | **str** | The backup state of the backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_sql_protected_item import AzureSqlProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSqlProtectedItem from a JSON string
azure_sql_protected_item_instance = AzureSqlProtectedItem.from_json(json)
# print the JSON string representation of the object
print(AzureSqlProtectedItem.to_json())

# convert the object into a dict
azure_sql_protected_item_dict = azure_sql_protected_item_instance.to_dict()
# create an instance of AzureSqlProtectedItem from a dict
azure_sql_protected_item_from_dict = AzureSqlProtectedItem.from_dict(azure_sql_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


