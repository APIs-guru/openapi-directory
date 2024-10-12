# ApplicationHealthState

Represents the health state of an application, which contains the application identifier and the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.application_health_state import ApplicationHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthState from a JSON string
application_health_state_instance = ApplicationHealthState.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthState.to_json())

# convert the object into a dict
application_health_state_dict = application_health_state_instance.to_dict()
# create an instance of ApplicationHealthState from a dict
application_health_state_from_dict = ApplicationHealthState.from_dict(application_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


