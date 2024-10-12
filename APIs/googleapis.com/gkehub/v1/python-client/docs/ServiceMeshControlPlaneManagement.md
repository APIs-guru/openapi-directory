# ServiceMeshControlPlaneManagement

Status of control plane management.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[ServiceMeshStatusDetails]**](ServiceMeshStatusDetails.md) | Explanation of state. | [optional] 
**state** | **str** | LifecycleState of control plane management. | [optional] 

## Example

```python
from openapi_client.models.service_mesh_control_plane_management import ServiceMeshControlPlaneManagement

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshControlPlaneManagement from a JSON string
service_mesh_control_plane_management_instance = ServiceMeshControlPlaneManagement.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshControlPlaneManagement.to_json())

# convert the object into a dict
service_mesh_control_plane_management_dict = service_mesh_control_plane_management_instance.to_dict()
# create an instance of ServiceMeshControlPlaneManagement from a dict
service_mesh_control_plane_management_from_dict = ServiceMeshControlPlaneManagement.from_dict(service_mesh_control_plane_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


