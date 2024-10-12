# DeployedApplicationHealth

The health of the deployed application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**deployed_service_package_health_states** | [**DeployedServicePackageHealthState**](DeployedServicePackageHealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**name** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**unhealthy_evaluations** | **str** |  | [optional] 

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


