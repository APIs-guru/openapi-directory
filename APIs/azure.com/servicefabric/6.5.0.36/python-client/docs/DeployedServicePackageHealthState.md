# DeployedServicePackageHealthState

Represents the health state of a deployed service package, containing the entity identifier and the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string. | [optional] 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health_state import DeployedServicePackageHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealthState from a JSON string
deployed_service_package_health_state_instance = DeployedServicePackageHealthState.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealthState.to_json())

# convert the object into a dict
deployed_service_package_health_state_dict = deployed_service_package_health_state_instance.to_dict()
# create an instance of DeployedServicePackageHealthState from a dict
deployed_service_package_health_state_from_dict = DeployedServicePackageHealthState.from_dict(deployed_service_package_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


