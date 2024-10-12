# ServiceReplicaDescription

This type describes a replica of a service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_packages** | [**List[ContainerCodePackageProperties]**](ContainerCodePackageProperties.md) | Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).  | 
**diagnostics** | [**DiagnosticsRef**](DiagnosticsRef.md) |  | [optional] 
**network_refs** | [**List[NetworkRef]**](NetworkRef.md) | The names of the private networks that this service needs to be part of. | [optional] 
**os_type** | **str** | The Operating system type required by the code in service.  | 
**replica_name** | **str** | Name of the replica. | [optional] 

## Example

```python
from openapi_client.models.service_replica_description import ServiceReplicaDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceReplicaDescription from a JSON string
service_replica_description_instance = ServiceReplicaDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceReplicaDescription.to_json())

# convert the object into a dict
service_replica_description_dict = service_replica_description_instance.to_dict()
# create an instance of ServiceReplicaDescription from a dict
service_replica_description_from_dict = ServiceReplicaDescription.from_dict(service_replica_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


