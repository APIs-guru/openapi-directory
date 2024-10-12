# ListPopulationClause

A group clause made up of list population terms representing constraints joined by ORs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | [**List[ListPopulationTerm]**](ListPopulationTerm.md) | Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs. | [optional] 

## Example

```python
from openapi_client.models.list_population_clause import ListPopulationClause

# TODO update the JSON string below
json = "{}"
# create an instance of ListPopulationClause from a JSON string
list_population_clause_instance = ListPopulationClause.from_json(json)
# print the JSON string representation of the object
print(ListPopulationClause.to_json())

# convert the object into a dict
list_population_clause_dict = list_population_clause_instance.to_dict()
# create an instance of ListPopulationClause from a dict
list_population_clause_from_dict = ListPopulationClause.from_dict(list_population_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


