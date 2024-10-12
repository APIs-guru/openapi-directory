# DeployedApplicationHealth

Information about the health of an application deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**deployed_service_package_health_states** | [**List[DeployedServicePackageHealthState]**](DeployedServicePackageHealthState.md) | List of health states for a service package deployed on a Service Fabric node. | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 

## Example

```python
from openapi_client.models.deployed_application_health import DeployedApplicationHealth

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationHealth from a JSON string
deployed_application_health_instance = DeployedApplicationHealth.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationHealth.to_json())

# convert the object into a dict
deployed_application_health_dict = deployed_application_health_instance.to_dict()
# create an instance of DeployedApplicationHealth from a dict
deployed_application_health_from_dict = DeployedApplicationHealth.from_dict(deployed_application_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


