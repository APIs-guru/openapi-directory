# Mutation

A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**Delete**](Delete.md) |  | [optional] 
**insert** | [**Write**](Write.md) |  | [optional] 
**insert_or_update** | [**Write**](Write.md) |  | [optional] 
**replace** | [**Write**](Write.md) |  | [optional] 
**update** | [**Write**](Write.md) |  | [optional] 

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


