# DeployedServicePackageHealth

Information about the health of a service package for a specific application deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health import DeployedServicePackageHealth

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealth from a JSON string
deployed_service_package_health_instance = DeployedServicePackageHealth.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealth.to_json())

# convert the object into a dict
deployed_service_package_health_dict = deployed_service_package_health_instance.to_dict()
# create an instance of DeployedServicePackageHealth from a dict
deployed_service_package_health_from_dict = DeployedServicePackageHealth.from_dict(deployed_service_package_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


