# ServiceTypeHealthPolicy

Represents the health policy used to evaluate the health of services belonging to a service type. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** | The maximum allowed percentage of unhealthy partitions per service. Allowed values are Byte values from zero to 100  The percentage represents the maximum tolerated percentage of partitions that can be unhealthy before the service is considered in error. If the percentage is respected but there is at least one unhealthy partition, the health is evaluated as Warning. The percentage is calculated by dividing the number of unhealthy partitions over the total number of partitions in the service. The computation rounds up to tolerate one failure on small numbers of partitions. Default percentage is zero.  | [optional] 
**max_percent_unhealthy_replicas_per_partition** | **int** | The maximum allowed percentage of unhealthy replicas per partition. Allowed values are Byte values from zero to 100.  The percentage represents the maximum tolerated percentage of replicas that can be unhealthy before the partition is considered in error. If the percentage is respected but there is at least one unhealthy replica, the health is evaluated as Warning. The percentage is calculated by dividing the number of unhealthy replicas over the total number of replicas in the partition. The computation rounds up to tolerate one failure on small numbers of replicas. Default percentage is zero.  | [optional] 
**max_percent_unhealthy_services** | **int** | The maximum maximum allowed percentage of unhealthy services. Allowed values are Byte values from zero to 100.  The percentage represents the maximum tolerated percentage of services that can be unhealthy before the application is considered in error. If the percentage is respected but there is at least one unhealthy service, the health is evaluated as Warning. This is calculated by dividing the number of unhealthy services of the specific service type over the total number of services of the specific service type. The computation rounds up to tolerate one failure on small numbers of services. Default percentage is zero.  | [optional] 

## Example

```python
from openapi_client.models.service_type_health_policy import ServiceTypeHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeHealthPolicy from a JSON string
service_type_health_policy_instance = ServiceTypeHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeHealthPolicy.to_json())

# convert the object into a dict
service_type_health_policy_dict = service_type_health_policy_instance.to_dict()
# create an instance of ServiceTypeHealthPolicy from a dict
service_type_health_policy_from_dict = ServiceTypeHealthPolicy.from_dict(service_type_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


