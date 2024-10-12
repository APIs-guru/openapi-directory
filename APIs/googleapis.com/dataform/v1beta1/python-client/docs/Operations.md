# Operations

Represents a list of arbitrary database operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_targets** | [**List[Target]**](Target.md) | A list of actions that this action depends on. | [optional] 
**disabled** | **bool** | Whether this action is disabled (i.e. should not be run). | [optional] 
**has_output** | **bool** | Whether these operations produce an output relation. | [optional] 
**queries** | **List[str]** | A list of arbitrary SQL statements that will be executed without alteration. | [optional] 
**relation_descriptor** | [**RelationDescriptor**](RelationDescriptor.md) |  | [optional] 
**tags** | **List[str]** | Arbitrary, user-defined tags on this action. | [optional] 

## Example

```python
from openapi_client.models.operations import Operations

# TODO update the JSON string below
json = "{}"
# create an instance of Operations from a JSON string
operations_instance = Operations.from_json(json)
# print the JSON string representation of the object
print(Operations.to_json())

# convert the object into a dict
operations_dict = operations_instance.to_dict()
# create an instance of Operations from a dict
operations_from_dict = Operations.from_dict(operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


