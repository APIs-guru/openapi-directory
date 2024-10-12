# Entity

A Datastore data object. Must not exceed 1 MiB - 4 bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**Key**](Key.md) |  | [optional] 
**properties** | [**Dict[str, Value]**](Value.md) | The entity&#39;s properties. The map&#39;s keys are property names. A property name matching regex &#x60;__.*__&#x60; is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. | [optional] 

## Example

```python
from openapi_client.models.entity import Entity

# TODO update the JSON string below
json = "{}"
# create an instance of Entity from a JSON string
entity_instance = Entity.from_json(json)
# print the JSON string representation of the object
print(Entity.to_json())

# convert the object into a dict
entity_dict = entity_instance.to_dict()
# create an instance of Entity from a dict
entity_from_dict = Entity.from_dict(entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


