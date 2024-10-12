# ArmServiceTypeHealthPolicy

Represents the health policy used to evaluate the health of services belonging to a service type. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** | The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.  | [optional] 
**max_percent_unhealthy_replicas_per_partition** | **int** | The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.  | [optional] 
**max_percent_unhealthy_services** | **int** | The maximum percentage of services allowed to be unhealthy before your application is considered in error.  | [optional] 

## Example

```python
from openapi_client.models.arm_service_type_health_policy import ArmServiceTypeHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ArmServiceTypeHealthPolicy from a JSON string
arm_service_type_health_policy_instance = ArmServiceTypeHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ArmServiceTypeHealthPolicy.to_json())

# convert the object into a dict
arm_service_type_health_policy_dict = arm_service_type_health_policy_instance.to_dict()
# create an instance of ArmServiceTypeHealthPolicy from a dict
arm_service_type_health_policy_from_dict = ArmServiceTypeHealthPolicy.from_dict(arm_service_type_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


