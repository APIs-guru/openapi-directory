# ArmApplicationHealthPolicy

Defines a health policy used to evaluate the health of an application or one of its children entities. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consider_warning_as_error** | **bool** | Indicates whether warnings are treated with the same severity as errors. | [optional] [default to False]
**default_service_type_health_policy** | [**ArmServiceTypeHealthPolicy**](ArmServiceTypeHealthPolicy.md) |  | [optional] 
**max_percent_unhealthy_deployed_applications** | **int** | The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100. The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error. This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster. The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.  | [optional] 
**service_type_health_policy_map** | [**Dict[str, ArmServiceTypeHealthPolicy]**](ArmServiceTypeHealthPolicy.md) | Defines a ServiceTypeHealthPolicy per service type name.  The entries in the map replace the default service type health policy for each specified service type. For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently. With policy per service type, there&#39;s more granular control of the health of the service.  If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.  | [optional] 

## Example

```python
from openapi_client.models.arm_application_health_policy import ArmApplicationHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ArmApplicationHealthPolicy from a JSON string
arm_application_health_policy_instance = ArmApplicationHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ArmApplicationHealthPolicy.to_json())

# convert the object into a dict
arm_application_health_policy_dict = arm_application_health_policy_instance.to_dict()
# create an instance of ArmApplicationHealthPolicy from a dict
arm_application_health_policy_from_dict = ArmApplicationHealthPolicy.from_dict(arm_application_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


