# EntityHealthState

A base type for the health state of various entities in the cluster. It contains the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_health_state import EntityHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHealthState from a JSON string
entity_health_state_instance = EntityHealthState.from_json(json)
# print the JSON string representation of the object
print(EntityHealthState.to_json())

# convert the object into a dict
entity_health_state_dict = entity_health_state_instance.to_dict()
# create an instance of EntityHealthState from a dict
entity_health_state_from_dict = EntityHealthState.from_dict(entity_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


