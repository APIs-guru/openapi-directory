# GatewayServiceMesh

Information about the Kubernetes Gateway API service mesh configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **str** | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. | [optional] 
**http_route** | **str** | Required. Name of the Gateway API HTTPRoute. | [optional] 
**route_update_wait_time** | **str** | Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time. | [optional] 
**service** | **str** | Required. Name of the Kubernetes Service. | [optional] 
**stable_cutback_duration** | **str** | Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time. | [optional] 

## Example

```python
from openapi_client.models.gateway_service_mesh import GatewayServiceMesh

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayServiceMesh from a JSON string
gateway_service_mesh_instance = GatewayServiceMesh.from_json(json)
# print the JSON string representation of the object
print(GatewayServiceMesh.to_json())

# convert the object into a dict
gateway_service_mesh_dict = gateway_service_mesh_instance.to_dict()
# create an instance of GatewayServiceMesh from a dict
gateway_service_mesh_from_dict = GatewayServiceMesh.from_dict(gateway_service_mesh_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


