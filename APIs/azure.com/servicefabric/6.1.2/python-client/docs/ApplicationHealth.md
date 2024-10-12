# ApplicationHealth

Represents the health of the application. Contains the application aggregated health state and the service and deployed application health states.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) | The list of health events reported on the entity. | [optional] 
**health_statistics** | [**HealthStatistics**](HealthStatistics.md) |  | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 
**deployed_application_health_states** | [**List[DeployedApplicationHealthState]**](DeployedApplicationHealthState.md) | Deployed application health states as found in the health store. | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**service_health_states** | [**List[ServiceHealthState]**](ServiceHealthState.md) | Service health states as found in the health store. | [optional] 

## Example

```python
from openapi_client.models.application_health import ApplicationHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealth from a JSON string
application_health_instance = ApplicationHealth.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealth.to_json())

# convert the object into a dict
application_health_dict = application_health_instance.to_dict()
# create an instance of ApplicationHealth from a dict
application_health_from_dict = ApplicationHealth.from_dict(application_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


