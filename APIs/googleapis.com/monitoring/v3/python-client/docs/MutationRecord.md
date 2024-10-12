# MutationRecord

Describes a change made to a configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mutate_time** | **str** | When the change occurred. | [optional] 
**mutated_by** | **str** | The email address of the user making the change. | [optional] 

## Example

```python
from openapi_client.models.mutation_record import MutationRecord

# TODO update the JSON string below
json = "{}"
# create an instance of MutationRecord from a JSON string
mutation_record_instance = MutationRecord.from_json(json)
# print the JSON string representation of the object
print(MutationRecord.to_json())

# convert the object into a dict
mutation_record_dict = mutation_record_instance.to_dict()
# create an instance of MutationRecord from a dict
mutation_record_from_dict = MutationRecord.from_dict(mutation_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


