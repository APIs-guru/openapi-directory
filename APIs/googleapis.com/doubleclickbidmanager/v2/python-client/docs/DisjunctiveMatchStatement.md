# DisjunctiveMatchStatement

DisjunctiveMatchStatement that OR's all contained filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_filters** | [**List[EventFilter]**](EventFilter.md) | Filters. There is a limit of 100 filters that can be set per disjunctive match statement. | [optional] 

## Example

```python
from openapi_client.models.disjunctive_match_statement import DisjunctiveMatchStatement

# TODO update the JSON string below
json = "{}"
# create an instance of DisjunctiveMatchStatement from a JSON string
disjunctive_match_statement_instance = DisjunctiveMatchStatement.from_json(json)
# print the JSON string representation of the object
print(DisjunctiveMatchStatement.to_json())

# convert the object into a dict
disjunctive_match_statement_dict = disjunctive_match_statement_instance.to_dict()
# create an instance of DisjunctiveMatchStatement from a dict
disjunctive_match_statement_from_dict = DisjunctiveMatchStatement.from_dict(disjunctive_match_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


