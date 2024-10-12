# ServiceMeshMembershipSpec

**Service Mesh**: Spec for a single Membership for the servicemesh feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane** | **str** | Deprecated: use &#x60;management&#x60; instead Enables automatic control plane management. | [optional] 
**default_channel** | **str** | Determines which release channel to use for default injection and service mesh APIs. | [optional] 
**management** | **str** | Enables automatic Service Mesh management. | [optional] 

## Example

```python
from openapi_client.models.service_mesh_membership_spec import ServiceMeshMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshMembershipSpec from a JSON string
service_mesh_membership_spec_instance = ServiceMeshMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshMembershipSpec.to_json())

# convert the object into a dict
service_mesh_membership_spec_dict = service_mesh_membership_spec_instance.to_dict()
# create an instance of ServiceMeshMembershipSpec from a dict
service_mesh_membership_spec_from_dict = ServiceMeshMembershipSpec.from_dict(service_mesh_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


