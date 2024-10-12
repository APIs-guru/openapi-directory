# ApplicationHealthPolicyMap

The application health policy of the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consider_warning_as_error** | **bool** | The boolean of the consider warning as error | [optional] 
**default_service_type_health_policy** | **int** | The policy of the default service type health | [optional] 
**max_percent_unhealthy_deployed_applications** | **int** | The max percent of the unhealthy deployed applications | [optional] 
**max_percent_unhealthy_partitions_per_service** | **int** | The max percent unhealthy partitions per service | [optional] 
**max_percent_unhealthy_replicas_per_partition** | **int** | The max percent unhealthy replicas per partition | [optional] 
**max_percent_unhealthy_services** | **int** | The policy of the default service type health | [optional] 

## Example

```python
from openapi_client.models.application_health_policy_map import ApplicationHealthPolicyMap

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthPolicyMap from a JSON string
application_health_policy_map_instance = ApplicationHealthPolicyMap.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthPolicyMap.to_json())

# convert the object into a dict
application_health_policy_map_dict = application_health_policy_map_instance.to_dict()
# create an instance of ApplicationHealthPolicyMap from a dict
application_health_policy_map_from_dict = ApplicationHealthPolicyMap.from_dict(application_health_policy_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


