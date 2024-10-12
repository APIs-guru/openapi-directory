# PolicyStatesQueryResults

Query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | OData context string; used by OData clients to resolve type information based on metadata. | [optional] 
**odata_count** | **int** | OData entity count; represents the number of policy state records returned. | [optional] 
**value** | [**List[PolicyState]**](PolicyState.md) | Query results. | [optional] 

## Example

```python
from openapi_client.models.policy_states_query_results import PolicyStatesQueryResults

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyStatesQueryResults from a JSON string
policy_states_query_results_instance = PolicyStatesQueryResults.from_json(json)
# print the JSON string representation of the object
print(PolicyStatesQueryResults.to_json())

# convert the object into a dict
policy_states_query_results_dict = policy_states_query_results_instance.to_dict()
# create an instance of PolicyStatesQueryResults from a dict
policy_states_query_results_from_dict = PolicyStatesQueryResults.from_dict(policy_states_query_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


