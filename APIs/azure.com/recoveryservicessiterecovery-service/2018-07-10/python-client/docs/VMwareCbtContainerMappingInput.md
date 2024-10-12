# VMwareCbtContainerMappingInput

VMwareCbt container mapping input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_id** | **str** | The target key vault ARM Id. | 
**key_vault_uri** | **str** | The target key vault URL. | 
**service_bus_connection_string_secret_name** | **str** | The secret name of the service bus connection string. | 
**storage_account_id** | **str** | The storage account ARM Id. | 
**storage_account_sas_secret_name** | **str** | The secret name of the storage account. | 
**target_location** | **str** | The target location. | 

## Example

```python
from openapi_client.models.v_mware_cbt_container_mapping_input import VMwareCbtContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtContainerMappingInput from a JSON string
v_mware_cbt_container_mapping_input_instance = VMwareCbtContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtContainerMappingInput.to_json())

# convert the object into a dict
v_mware_cbt_container_mapping_input_dict = v_mware_cbt_container_mapping_input_instance.to_dict()
# create an instance of VMwareCbtContainerMappingInput from a dict
v_mware_cbt_container_mapping_input_from_dict = VMwareCbtContainerMappingInput.from_dict(v_mware_cbt_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


