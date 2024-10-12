# InMageAzureV2UpdateReplicationProtectedItemInput

InMage Azure V2 input to update replication protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_azure_v1_resource_group_id** | **str** | The recovery Azure resource group Id for classic deployment. | [optional] 
**recovery_azure_v2_resource_group_id** | **str** | The recovery Azure resource group Id for resource manager deployment. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_update_replication_protected_item_input import InMageAzureV2UpdateReplicationProtectedItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2UpdateReplicationProtectedItemInput from a JSON string
in_mage_azure_v2_update_replication_protected_item_input_instance = InMageAzureV2UpdateReplicationProtectedItemInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2UpdateReplicationProtectedItemInput.to_json())

# convert the object into a dict
in_mage_azure_v2_update_replication_protected_item_input_dict = in_mage_azure_v2_update_replication_protected_item_input_instance.to_dict()
# create an instance of InMageAzureV2UpdateReplicationProtectedItemInput from a dict
in_mage_azure_v2_update_replication_protected_item_input_from_dict = InMageAzureV2UpdateReplicationProtectedItemInput.from_dict(in_mage_azure_v2_update_replication_protected_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


