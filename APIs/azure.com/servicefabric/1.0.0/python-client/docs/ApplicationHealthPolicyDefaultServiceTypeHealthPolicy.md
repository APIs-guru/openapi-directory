# ApplicationHealthPolicyDefaultServiceTypeHealthPolicy

The policy of the default service type health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** |  | [optional] 
**max_percent_unhealthy_replicas_per_partition** | **int** |  | [optional] 
**max_percent_unhealthy_services** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.application_health_policy_default_service_type_health_policy import ApplicationHealthPolicyDefaultServiceTypeHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthPolicyDefaultServiceTypeHealthPolicy from a JSON string
application_health_policy_default_service_type_health_policy_instance = ApplicationHealthPolicyDefaultServiceTypeHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthPolicyDefaultServiceTypeHealthPolicy.to_json())

# convert the object into a dict
application_health_policy_default_service_type_health_policy_dict = application_health_policy_default_service_type_health_policy_instance.to_dict()
# create an instance of ApplicationHealthPolicyDefaultServiceTypeHealthPolicy from a dict
application_health_policy_default_service_type_health_policy_from_dict = ApplicationHealthPolicyDefaultServiceTypeHealthPolicy.from_dict(application_health_policy_default_service_type_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


