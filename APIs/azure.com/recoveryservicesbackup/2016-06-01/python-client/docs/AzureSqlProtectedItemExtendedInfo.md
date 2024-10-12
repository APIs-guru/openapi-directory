# AzureSqlProtectedItemExtendedInfo

Additional information for the Azure SQL specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldest_recovery_point** | **datetime** | The oldest backup copy available for this item in the service. | [optional] 
**policy_state** | **str** | The state of the backup policy associated with this backup item. | [optional] 
**recovery_point_count** | **int** | The number of available backup copies for this backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_sql_protected_item_extended_info import AzureSqlProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSqlProtectedItemExtendedInfo from a JSON string
azure_sql_protected_item_extended_info_instance = AzureSqlProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureSqlProtectedItemExtendedInfo.to_json())

# convert the object into a dict
azure_sql_protected_item_extended_info_dict = azure_sql_protected_item_extended_info_instance.to_dict()
# create an instance of AzureSqlProtectedItemExtendedInfo from a dict
azure_sql_protected_item_extended_info_from_dict = AzureSqlProtectedItemExtendedInfo.from_dict(azure_sql_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


