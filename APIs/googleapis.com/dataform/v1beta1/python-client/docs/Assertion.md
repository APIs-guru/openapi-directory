# Assertion

Represents an assertion upon a SQL query which is required return zero rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_targets** | [**List[Target]**](Target.md) | A list of actions that this action depends on. | [optional] 
**disabled** | **bool** | Whether this action is disabled (i.e. should not be run). | [optional] 
**parent_action** | [**Target**](Target.md) |  | [optional] 
**relation_descriptor** | [**RelationDescriptor**](RelationDescriptor.md) |  | [optional] 
**select_query** | **str** | The SELECT query which must return zero rows in order for this assertion to succeed. | [optional] 
**tags** | **List[str]** | Arbitrary, user-defined tags on this action. | [optional] 

## Example

```python
from openapi_client.models.assertion import Assertion

# TODO update the JSON string below
json = "{}"
# create an instance of Assertion from a JSON string
assertion_instance = Assertion.from_json(json)
# print the JSON string representation of the object
print(Assertion.to_json())

# convert the object into a dict
assertion_dict = assertion_instance.to_dict()
# create an instance of Assertion from a dict
assertion_from_dict = Assertion.from_dict(assertion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


