# ServiceResourceReplicaDescription

Describes a replica of a service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_packages** | [**List[ContainerCodePackageProperties]**](ContainerCodePackageProperties.md) | Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.). | 
**diagnostics** | [**DiagnosticsRef**](DiagnosticsRef.md) |  | [optional] 
**network_refs** | [**List[NetworkRef]**](NetworkRef.md) | The names of the private networks that this service needs to be part of. | [optional] 
**os_type** | **str** | The Operating system type required by the code in service. | 
**replica_name** | **str** | Name of the replica. | 

## Example

```python
from openapi_client.models.service_resource_replica_description import ServiceResourceReplicaDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceReplicaDescription from a JSON string
service_resource_replica_description_instance = ServiceResourceReplicaDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceReplicaDescription.to_json())

# convert the object into a dict
service_resource_replica_description_dict = service_resource_replica_description_instance.to_dict()
# create an instance of ServiceResourceReplicaDescription from a dict
service_resource_replica_description_from_dict = ServiceResourceReplicaDescription.from_dict(service_resource_replica_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


