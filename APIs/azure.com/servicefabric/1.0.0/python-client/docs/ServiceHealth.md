# ServiceHealth

The health of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**name** | **str** |  | [optional] 
**partition_health_states** | [**List[ServiceHealthPartitionHealthStatesInner]**](ServiceHealthPartitionHealthStatesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_health import ServiceHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealth from a JSON string
service_health_instance = ServiceHealth.from_json(json)
# print the JSON string representation of the object
print(ServiceHealth.to_json())

# convert the object into a dict
service_health_dict = service_health_instance.to_dict()
# create an instance of ServiceHealth from a dict
service_health_from_dict = ServiceHealth.from_dict(service_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


