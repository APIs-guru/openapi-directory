# ServiceMeshDataPlaneManagement

Status of data plane management. Only reported per-member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[ServiceMeshStatusDetails]**](ServiceMeshStatusDetails.md) | Explanation of the status. | [optional] 
**state** | **str** | Lifecycle status of data plane management. | [optional] 

## Example

```python
from openapi_client.models.service_mesh_data_plane_management import ServiceMeshDataPlaneManagement

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshDataPlaneManagement from a JSON string
service_mesh_data_plane_management_instance = ServiceMeshDataPlaneManagement.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshDataPlaneManagement.to_json())

# convert the object into a dict
service_mesh_data_plane_management_dict = service_mesh_data_plane_management_instance.to_dict()
# create an instance of ServiceMeshDataPlaneManagement from a dict
service_mesh_data_plane_management_from_dict = ServiceMeshDataPlaneManagement.from_dict(service_mesh_data_plane_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


