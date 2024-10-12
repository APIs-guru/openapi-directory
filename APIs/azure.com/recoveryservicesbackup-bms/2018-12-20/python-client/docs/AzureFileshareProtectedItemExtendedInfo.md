# AzureFileshareProtectedItemExtendedInfo

Additional information about Azure File Share backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldest_recovery_point** | **datetime** | The oldest backup copy available for this item in the service. | [optional] 
**policy_state** | **str** | Indicates consistency of policy object and policy applied to this backup item. | [optional] 
**recovery_point_count** | **int** | Number of available backup copies associated with this backup item. | [optional] 
**resource_state** | **str** | Indicates the state of this resource. Possible values are from enum ResourceState {Invalid, Active, SoftDeleted, Deleted} | [optional] [readonly] 
**resource_state_sync_time** | **datetime** | The resource state sync time for this backup item. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_fileshare_protected_item_extended_info import AzureFileshareProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileshareProtectedItemExtendedInfo from a JSON string
azure_fileshare_protected_item_extended_info_instance = AzureFileshareProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureFileshareProtectedItemExtendedInfo.to_json())

# convert the object into a dict
azure_fileshare_protected_item_extended_info_dict = azure_fileshare_protected_item_extended_info_instance.to_dict()
# create an instance of AzureFileshareProtectedItemExtendedInfo from a dict
azure_fileshare_protected_item_extended_info_from_dict = AzureFileshareProtectedItemExtendedInfo.from_dict(azure_fileshare_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


