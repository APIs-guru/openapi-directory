# PolicyStatesQueryResultsTableMetadata

Metadata about the query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_query** | **str** | Internal query generated. Used for diagnostics purposes. | [optional] 

## Example

```python
from openapi_client.models.policy_states_query_results_table_metadata import PolicyStatesQueryResultsTableMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyStatesQueryResultsTableMetadata from a JSON string
policy_states_query_results_table_metadata_instance = PolicyStatesQueryResultsTableMetadata.from_json(json)
# print the JSON string representation of the object
print(PolicyStatesQueryResultsTableMetadata.to_json())

# convert the object into a dict
policy_states_query_results_table_metadata_dict = policy_states_query_results_table_metadata_instance.to_dict()
# create an instance of PolicyStatesQueryResultsTableMetadata from a dict
policy_states_query_results_table_metadata_from_dict = PolicyStatesQueryResultsTableMetadata.from_dict(policy_states_query_results_table_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


