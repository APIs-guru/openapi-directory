# ServiceResourceProperties

This type describes properties of a service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_packages** | [**List[ContainerCodePackageProperties]**](ContainerCodePackageProperties.md) | Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.). | 
**diagnostics** | [**DiagnosticsRef**](DiagnosticsRef.md) |  | [optional] 
**network_refs** | [**List[NetworkRef]**](NetworkRef.md) | The names of the private networks that this service needs to be part of. | [optional] 
**os_type** | [**OperatingSystemType**](OperatingSystemType.md) |  | 
**auto_scaling_policies** | [**List[AutoScalingPolicy]**](AutoScalingPolicy.md) | Auto scaling policies | [optional] 
**description** | **str** | User readable description of the service. | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**replica_count** | **int** | The number of replicas of the service to create. Defaults to 1 if not specified. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the service. | [optional] [readonly] 
**unhealthy_evaluation** | **str** | When the service&#39;s health state is not &#39;Ok&#39;, this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_resource_properties import ServiceResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceProperties from a JSON string
service_resource_properties_instance = ServiceResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceProperties.to_json())

# convert the object into a dict
service_resource_properties_dict = service_resource_properties_instance.to_dict()
# create an instance of ServiceResourceProperties from a dict
service_resource_properties_from_dict = ServiceResourceProperties.from_dict(service_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


