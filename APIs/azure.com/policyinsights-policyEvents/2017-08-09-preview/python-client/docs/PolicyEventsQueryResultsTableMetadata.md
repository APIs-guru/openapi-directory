# PolicyEventsQueryResultsTableMetadata

Metadata about the query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_query** | **str** | Internal query generated. Used for diagnostics purposes. | [optional] 

## Example

```python
from openapi_client.models.policy_events_query_results_table_metadata import PolicyEventsQueryResultsTableMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEventsQueryResultsTableMetadata from a JSON string
policy_events_query_results_table_metadata_instance = PolicyEventsQueryResultsTableMetadata.from_json(json)
# print the JSON string representation of the object
print(PolicyEventsQueryResultsTableMetadata.to_json())

# convert the object into a dict
policy_events_query_results_table_metadata_dict = policy_events_query_results_table_metadata_instance.to_dict()
# create an instance of PolicyEventsQueryResultsTableMetadata from a dict
policy_events_query_results_table_metadata_from_dict = PolicyEventsQueryResultsTableMetadata.from_dict(policy_events_query_results_table_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


