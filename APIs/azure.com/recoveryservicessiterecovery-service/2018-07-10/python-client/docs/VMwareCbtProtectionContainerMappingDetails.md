# VMwareCbtProtectionContainerMappingDetails

VMwareCbt provider specific container mapping details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_id** | **str** | The target key vault ARM Id. | [optional] [readonly] 
**key_vault_uri** | **str** | The target key vault URI. | [optional] [readonly] 
**service_bus_connection_string_secret_name** | **str** | The secret name of the service bus connection string. | [optional] [readonly] 
**storage_account_id** | **str** | The storage account ARM Id. | [optional] [readonly] 
**storage_account_sas_secret_name** | **str** | The secret name of the storage account. | [optional] [readonly] 
**target_location** | **str** | The target location. | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_cbt_protection_container_mapping_details import VMwareCbtProtectionContainerMappingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtProtectionContainerMappingDetails from a JSON string
v_mware_cbt_protection_container_mapping_details_instance = VMwareCbtProtectionContainerMappingDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtProtectionContainerMappingDetails.to_json())

# convert the object into a dict
v_mware_cbt_protection_container_mapping_details_dict = v_mware_cbt_protection_container_mapping_details_instance.to_dict()
# create an instance of VMwareCbtProtectionContainerMappingDetails from a dict
v_mware_cbt_protection_container_mapping_details_from_dict = VMwareCbtProtectionContainerMappingDetails.from_dict(v_mware_cbt_protection_container_mapping_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


