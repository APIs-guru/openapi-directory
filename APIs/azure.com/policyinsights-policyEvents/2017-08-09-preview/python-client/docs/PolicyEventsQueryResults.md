# PolicyEventsQueryResults

Query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PolicyEventsQueryResultsTable]**](PolicyEventsQueryResultsTable.md) | Query results. | [optional] 

## Example

```python
from openapi_client.models.policy_events_query_results import PolicyEventsQueryResults

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEventsQueryResults from a JSON string
policy_events_query_results_instance = PolicyEventsQueryResults.from_json(json)
# print the JSON string representation of the object
print(PolicyEventsQueryResults.to_json())

# convert the object into a dict
policy_events_query_results_dict = policy_events_query_results_instance.to_dict()
# create an instance of PolicyEventsQueryResults from a dict
policy_events_query_results_from_dict = PolicyEventsQueryResults.from_dict(policy_events_query_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


