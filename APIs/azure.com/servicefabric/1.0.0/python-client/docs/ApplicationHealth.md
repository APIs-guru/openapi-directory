# ApplicationHealth

The health of the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**deployed_application_health_states** | [**List[ApplicationHealthDeployedApplicationHealthStatesInner]**](ApplicationHealthDeployedApplicationHealthStatesInner.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**name** | **str** |  | [optional] 
**service_health_states** | [**List[ApplicationHealthServiceHealthStatesInner]**](ApplicationHealthServiceHealthStatesInner.md) |  | [optional] 
**unhealthy_evaluations** | **str** |  | [optional] 

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


