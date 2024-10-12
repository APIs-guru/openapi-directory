# MutationGroup

A group of mutations to be committed together. Related mutations should be placed in a group. For example, two mutations inserting rows with the same primary key prefix in both parent and child tables are related.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mutations** | [**List[Mutation]**](Mutation.md) | Required. The mutations in this group. | [optional] 

## Example

```python
from openapi_client.models.mutation_group import MutationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of MutationGroup from a JSON string
mutation_group_instance = MutationGroup.from_json(json)
# print the JSON string representation of the object
print(MutationGroup.to_json())

# convert the object into a dict
mutation_group_dict = mutation_group_instance.to_dict()
# create an instance of MutationGroup from a dict
mutation_group_from_dict = MutationGroup.from_dict(mutation_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


