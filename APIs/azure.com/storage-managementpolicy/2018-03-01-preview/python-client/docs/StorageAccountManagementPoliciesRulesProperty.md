# StorageAccountManagementPoliciesRulesProperty

The Storage Account Data Policies properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified_time** | **datetime** | Returns the date and time the ManagementPolicies was last modified. | [optional] [readonly] 
**policy** | **object** | The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. | [optional] 

## Example

```python
from openapi_client.models.storage_account_management_policies_rules_property import StorageAccountManagementPoliciesRulesProperty

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountManagementPoliciesRulesProperty from a JSON string
storage_account_management_policies_rules_property_instance = StorageAccountManagementPoliciesRulesProperty.from_json(json)
# print the JSON string representation of the object
print(StorageAccountManagementPoliciesRulesProperty.to_json())

# convert the object into a dict
storage_account_management_policies_rules_property_dict = storage_account_management_policies_rules_property_instance.to_dict()
# create an instance of StorageAccountManagementPoliciesRulesProperty from a dict
storage_account_management_policies_rules_property_from_dict = StorageAccountManagementPoliciesRulesProperty.from_dict(storage_account_management_policies_rules_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


