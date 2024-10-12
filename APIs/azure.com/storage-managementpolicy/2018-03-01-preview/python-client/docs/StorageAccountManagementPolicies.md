# StorageAccountManagementPolicies

The Get Storage Account ManagementPolicies operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountManagementPoliciesRulesProperty**](StorageAccountManagementPoliciesRulesProperty.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_management_policies import StorageAccountManagementPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountManagementPolicies from a JSON string
storage_account_management_policies_instance = StorageAccountManagementPolicies.from_json(json)
# print the JSON string representation of the object
print(StorageAccountManagementPolicies.to_json())

# convert the object into a dict
storage_account_management_policies_dict = storage_account_management_policies_instance.to_dict()
# create an instance of StorageAccountManagementPolicies from a dict
storage_account_management_policies_from_dict = StorageAccountManagementPolicies.from_dict(storage_account_management_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


