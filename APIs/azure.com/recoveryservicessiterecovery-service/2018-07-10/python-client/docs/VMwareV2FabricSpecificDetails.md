# VMwareV2FabricSpecificDetails

VMwareV2 fabric specific details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_solution_id** | **str** | The Migration solution ARM Id. | [optional] [readonly] 
**service_endpoint** | **str** | The service endpoint. | [optional] [readonly] 
**service_resource_id** | **str** | The service resource Id. | [optional] [readonly] 
**vmware_site_id** | **str** | The ARM Id of the VMware site. | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_v2_fabric_specific_details import VMwareV2FabricSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareV2FabricSpecificDetails from a JSON string
v_mware_v2_fabric_specific_details_instance = VMwareV2FabricSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareV2FabricSpecificDetails.to_json())

# convert the object into a dict
v_mware_v2_fabric_specific_details_dict = v_mware_v2_fabric_specific_details_instance.to_dict()
# create an instance of VMwareV2FabricSpecificDetails from a dict
v_mware_v2_fabric_specific_details_from_dict = VMwareV2FabricSpecificDetails.from_dict(v_mware_v2_fabric_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


