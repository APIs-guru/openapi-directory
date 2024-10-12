# EntityKindHealthStateCount

Represents health state count for entities of the specified entity kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_kind** | [**EntityKind**](EntityKind.md) |  | [optional] 
**health_state_count** | [**HealthStateCount**](HealthStateCount.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_kind_health_state_count import EntityKindHealthStateCount

# TODO update the JSON string below
json = "{}"
# create an instance of EntityKindHealthStateCount from a JSON string
entity_kind_health_state_count_instance = EntityKindHealthStateCount.from_json(json)
# print the JSON string representation of the object
print(EntityKindHealthStateCount.to_json())

# convert the object into a dict
entity_kind_health_state_count_dict = entity_kind_health_state_count_instance.to_dict()
# create an instance of EntityKindHealthStateCount from a dict
entity_kind_health_state_count_from_dict = EntityKindHealthStateCount.from_dict(entity_kind_health_state_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


