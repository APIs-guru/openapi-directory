# MutationResult

The result of applying a mutation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_detected** | **bool** | Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation. | [optional] 
**create_time** | **str** | The create time of the entity. This field will not be set after a &#39;delete&#39;. | [optional] 
**key** | [**Key**](Key.md) |  | [optional] 
**update_time** | **str** | The update time of the entity on the server after processing the mutation. If the mutation doesn&#39;t change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a &#39;delete&#39;. | [optional] 
**version** | **str** | The version of the entity on the server after processing the mutation. If the mutation doesn&#39;t change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity. | [optional] 

## Example

```python
from openapi_client.models.mutation_result import MutationResult

# TODO update the JSON string below
json = "{}"
# create an instance of MutationResult from a JSON string
mutation_result_instance = MutationResult.from_json(json)
# print the JSON string representation of the object
print(MutationResult.to_json())

# convert the object into a dict
mutation_result_dict = mutation_result_instance.to_dict()
# create an instance of MutationResult from a dict
mutation_result_from_dict = MutationResult.from_dict(mutation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


