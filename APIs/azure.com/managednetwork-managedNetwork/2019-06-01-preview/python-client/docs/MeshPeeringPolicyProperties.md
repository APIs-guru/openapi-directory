# MeshPeeringPolicyProperties

Properties of a Mesh Peering Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mesh** | [**List[ResourceId]**](ResourceId.md) | Gets or sets the mesh group IDs | [optional] 
**hub** | [**ResourceId**](ResourceId.md) |  | [optional] 
**spokes** | [**List[ResourceId]**](ResourceId.md) | Gets or sets the spokes group IDs | [optional] 
**type** | **str** | Gets or sets the connectivity type of a network structure policy | 
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the ManagedNetwork resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mesh_peering_policy_properties import MeshPeeringPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MeshPeeringPolicyProperties from a JSON string
mesh_peering_policy_properties_instance = MeshPeeringPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(MeshPeeringPolicyProperties.to_json())

# convert the object into a dict
mesh_peering_policy_properties_dict = mesh_peering_policy_properties_instance.to_dict()
# create an instance of MeshPeeringPolicyProperties from a dict
mesh_peering_policy_properties_from_dict = MeshPeeringPolicyProperties.from_dict(mesh_peering_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


