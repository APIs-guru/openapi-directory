# ListPopulationRule

Remarketing List Population Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_id** | **str** | Floodlight activity ID associated with this rule. This field can be left blank. | [optional] 
**floodlight_activity_name** | **str** | Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. | [optional] 
**list_population_clauses** | [**List[ListPopulationClause]**](ListPopulationClause.md) | Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs. | [optional] 

## Example

```python
from openapi_client.models.list_population_rule import ListPopulationRule

# TODO update the JSON string below
json = "{}"
# create an instance of ListPopulationRule from a JSON string
list_population_rule_instance = ListPopulationRule.from_json(json)
# print the JSON string representation of the object
print(ListPopulationRule.to_json())

# convert the object into a dict
list_population_rule_dict = list_population_rule_instance.to_dict()
# create an instance of ListPopulationRule from a dict
list_population_rule_from_dict = ListPopulationRule.from_dict(list_population_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


