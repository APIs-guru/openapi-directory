# Mutation

A mutation to apply to an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_version** | **str** | The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts. | [optional] 
**delete** | [**Key**](Key.md) |  | [optional] 
**insert** | [**Entity**](Entity.md) |  | [optional] 
**update** | [**Entity**](Entity.md) |  | [optional] 
**update_time** | **str** | The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts. | [optional] 
**upsert** | [**Entity**](Entity.md) |  | [optional] 

## Example

```python
from openapi_client.models.mutation import Mutation

# TODO update the JSON string below
json = "{}"
# create an instance of Mutation from a JSON string
mutation_instance = Mutation.from_json(json)
# print the JSON string representation of the object
print(Mutation.to_json())

# convert the object into a dict
mutation_dict = mutation_instance.to_dict()
# create an instance of Mutation from a dict
mutation_from_dict = Mutation.from_dict(mutation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


