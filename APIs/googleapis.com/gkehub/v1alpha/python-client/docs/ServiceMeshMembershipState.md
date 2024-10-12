# ServiceMeshMembershipState

**Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_messages** | [**List[ServiceMeshAnalysisMessage]**](ServiceMeshAnalysisMessage.md) | Output only. Results of running Service Mesh analyzers. | [optional] [readonly] 
**config_api_version** | **str** | The API version (i.e. Istio CRD version) for configuring service mesh in this cluster. This version is influenced by the &#x60;default_channel&#x60; field. | [optional] 
**control_plane_management** | [**ServiceMeshControlPlaneManagement**](ServiceMeshControlPlaneManagement.md) |  | [optional] 
**data_plane_management** | [**ServiceMeshDataPlaneManagement**](ServiceMeshDataPlaneManagement.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_mesh_membership_state import ServiceMeshMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshMembershipState from a JSON string
service_mesh_membership_state_instance = ServiceMeshMembershipState.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshMembershipState.to_json())

# convert the object into a dict
service_mesh_membership_state_dict = service_mesh_membership_state_instance.to_dict()
# create an instance of ServiceMeshMembershipState from a dict
service_mesh_membership_state_from_dict = ServiceMeshMembershipState.from_dict(service_mesh_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


