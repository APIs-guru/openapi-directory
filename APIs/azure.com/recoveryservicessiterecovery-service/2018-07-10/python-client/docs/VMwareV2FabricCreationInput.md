# VMwareV2FabricCreationInput

VMwareV2 fabric provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_solution_id** | **str** | The ARM Id of the migration solution. | 
**vmware_site_id** | **str** | The ARM Id of the VMware site. | 

## Example

```python
from openapi_client.models.v_mware_v2_fabric_creation_input import VMwareV2FabricCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareV2FabricCreationInput from a JSON string
v_mware_v2_fabric_creation_input_instance = VMwareV2FabricCreationInput.from_json(json)
# print the JSON string representation of the object
print(VMwareV2FabricCreationInput.to_json())

# convert the object into a dict
v_mware_v2_fabric_creation_input_dict = v_mware_v2_fabric_creation_input_instance.to_dict()
# create an instance of VMwareV2FabricCreationInput from a dict
v_mware_v2_fabric_creation_input_from_dict = VMwareV2FabricCreationInput.from_dict(v_mware_v2_fabric_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


