# ApplicationHealthServiceHealthStatesInner

The states of the service health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**service_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_health_service_health_states_inner import ApplicationHealthServiceHealthStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthServiceHealthStatesInner from a JSON string
application_health_service_health_states_inner_instance = ApplicationHealthServiceHealthStatesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthServiceHealthStatesInner.to_json())

# convert the object into a dict
application_health_service_health_states_inner_dict = application_health_service_health_states_inner_instance.to_dict()
# create an instance of ApplicationHealthServiceHealthStatesInner from a dict
application_health_service_health_states_inner_from_dict = ApplicationHealthServiceHealthStatesInner.from_dict(application_health_service_health_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


