# UpdateReplicationProtectedItemInputProperties

Update protected item input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_rdp_on_target_option** | **str** | The selected option to enable RDP\\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum. | [optional] 
**license_type** | **str** | License type. | [optional] 
**provider_specific_details** | [**UpdateReplicationProtectedItemProviderInput**](UpdateReplicationProtectedItemProviderInput.md) |  | [optional] 
**recovery_availability_set_id** | **str** | The target availability set id. | [optional] 
**recovery_azure_vm_name** | **str** | Target azure VM name given by the user. | [optional] 
**recovery_azure_vm_size** | **str** | Target Azure Vm size. | [optional] 
**selected_recovery_azure_network_id** | **str** | Target Azure Network Id. | [optional] 
**selected_source_nic_id** | **str** | The selected source nic Id which will be used as the primary nic during failover. | [optional] 
**vm_nics** | [**List[VMNicInputDetails]**](VMNicInputDetails.md) | The list of vm nic details. | [optional] 

## Example

```python
from openapi_client.models.update_replication_protected_item_input_properties import UpdateReplicationProtectedItemInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReplicationProtectedItemInputProperties from a JSON string
update_replication_protected_item_input_properties_instance = UpdateReplicationProtectedItemInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateReplicationProtectedItemInputProperties.to_json())

# convert the object into a dict
update_replication_protected_item_input_properties_dict = update_replication_protected_item_input_properties_instance.to_dict()
# create an instance of UpdateReplicationProtectedItemInputProperties from a dict
update_replication_protected_item_input_properties_from_dict = UpdateReplicationProtectedItemInputProperties.from_dict(update_replication_protected_item_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


