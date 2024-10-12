# PolicyEventsQueryResultsTable

Query results table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **Dict[str, object]** | List of columns included in query results. | [optional] 
**metadata** | [**PolicyEventsQueryResultsTableMetadata**](PolicyEventsQueryResultsTableMetadata.md) |  | [optional] 
**rows** | **List[List[object]]** | Query result rows, each representing a policy event record. | [optional] 

## Example

```python
from openapi_client.models.policy_events_query_results_table import PolicyEventsQueryResultsTable

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEventsQueryResultsTable from a JSON string
policy_events_query_results_table_instance = PolicyEventsQueryResultsTable.from_json(json)
# print the JSON string representation of the object
print(PolicyEventsQueryResultsTable.to_json())

# convert the object into a dict
policy_events_query_results_table_dict = policy_events_query_results_table_instance.to_dict()
# create an instance of PolicyEventsQueryResultsTable from a dict
policy_events_query_results_table_from_dict = PolicyEventsQueryResultsTable.from_dict(policy_events_query_results_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


