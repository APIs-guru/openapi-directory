# ApplicationHealthDeployedApplicationHealthStatesInner

The states of the deployed application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_name** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_health_deployed_application_health_states_inner import ApplicationHealthDeployedApplicationHealthStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthDeployedApplicationHealthStatesInner from a JSON string
application_health_deployed_application_health_states_inner_instance = ApplicationHealthDeployedApplicationHealthStatesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthDeployedApplicationHealthStatesInner.to_json())

# convert the object into a dict
application_health_deployed_application_health_states_inner_dict = application_health_deployed_application_health_states_inner_instance.to_dict()
# create an instance of ApplicationHealthDeployedApplicationHealthStatesInner from a dict
application_health_deployed_application_health_states_inner_from_dict = ApplicationHealthDeployedApplicationHealthStatesInner.from_dict(application_health_deployed_application_health_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


