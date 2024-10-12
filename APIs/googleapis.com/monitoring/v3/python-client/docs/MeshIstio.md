# MeshIstio

Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mesh_uid** | **str** | Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics. | [optional] 
**service_name** | **str** | The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. | [optional] 
**service_namespace** | **str** | The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. | [optional] 

## Example

```python
from openapi_client.models.mesh_istio import MeshIstio

# TODO update the JSON string below
json = "{}"
# create an instance of MeshIstio from a JSON string
mesh_istio_instance = MeshIstio.from_json(json)
# print the JSON string representation of the object
print(MeshIstio.to_json())

# convert the object into a dict
mesh_istio_dict = mesh_istio_instance.to_dict()
# create an instance of MeshIstio from a dict
mesh_istio_from_dict = MeshIstio.from_dict(mesh_istio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


