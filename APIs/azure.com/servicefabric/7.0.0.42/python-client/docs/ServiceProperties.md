# ServiceProperties

Describes properties of a service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scaling_policies** | [**List[AutoScalingPolicy]**](AutoScalingPolicy.md) | Auto scaling policies | [optional] 
**description** | **str** | User readable description of the service. | [optional] 
**dns_name** | **str** | Dns name of the service. | [optional] 
**execution_policy** | [**ExecutionPolicy**](ExecutionPolicy.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**identity_refs** | [**List[ServiceIdentity]**](ServiceIdentity.md) | The service identity list. | [optional] 
**replica_count** | **int** | The number of replicas of the service to create. Defaults to 1 if not specified. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**status_details** | **str** | Gives additional information about the current status of the service. | [optional] [readonly] 
**unhealthy_evaluation** | **str** | When the service&#39;s health state is not &#39;Ok&#39;, this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_properties import ServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProperties from a JSON string
service_properties_instance = ServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceProperties.to_json())

# convert the object into a dict
service_properties_dict = service_properties_instance.to_dict()
# create an instance of ServiceProperties from a dict
service_properties_from_dict = ServiceProperties.from_dict(service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


