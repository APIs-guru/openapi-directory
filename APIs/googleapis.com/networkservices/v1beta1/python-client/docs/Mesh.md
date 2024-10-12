# Mesh

Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**envoy_headers** | **str** | Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. | [optional] 
**interception_port** | **int** | Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port &#39;15001&#39; is used as the interception port. This is applicable only for sidecar proxy deployments. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the Mesh resource. | [optional] 
**name** | **str** | Required. Name of the Mesh resource. It matches pattern &#x60;projects/*/locations/global/meshes/&#x60;. | [optional] 
**self_link** | **str** | Output only. Server-defined URL of this resource | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mesh import Mesh

# TODO update the JSON string below
json = "{}"
# create an instance of Mesh from a JSON string
mesh_instance = Mesh.from_json(json)
# print the JSON string representation of the object
print(Mesh.to_json())

# convert the object into a dict
mesh_dict = mesh_instance.to_dict()
# create an instance of Mesh from a dict
mesh_from_dict = Mesh.from_dict(mesh_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


