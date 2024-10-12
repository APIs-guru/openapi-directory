# AzureIaaSVMProtectedItemExtendedInfo

Additional information on Azure IaaS VM specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldest_recovery_point** | **datetime** | The oldest backup copy available for this backup item. | [optional] 
**policy_inconsistent** | **bool** | Specifies if backup policy associated with the backup item is inconsistent. | [optional] 
**recovery_point_count** | **int** | Number of backup copies available for this backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_protected_item_extended_info import AzureIaaSVMProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMProtectedItemExtendedInfo from a JSON string
azure_iaa_svm_protected_item_extended_info_instance = AzureIaaSVMProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMProtectedItemExtendedInfo.to_json())

# convert the object into a dict
azure_iaa_svm_protected_item_extended_info_dict = azure_iaa_svm_protected_item_extended_info_instance.to_dict()
# create an instance of AzureIaaSVMProtectedItemExtendedInfo from a dict
azure_iaa_svm_protected_item_extended_info_from_dict = AzureIaaSVMProtectedItemExtendedInfo.from_dict(azure_iaa_svm_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


