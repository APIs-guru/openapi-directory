# ServiceHealthState

Represents the health state of a service, which contains the service identifier and its aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_health_state import ServiceHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthState from a JSON string
service_health_state_instance = ServiceHealthState.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthState.to_json())

# convert the object into a dict
service_health_state_dict = service_health_state_instance.to_dict()
# create an instance of ServiceHealthState from a dict
service_health_state_from_dict = ServiceHealthState.from_dict(service_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


