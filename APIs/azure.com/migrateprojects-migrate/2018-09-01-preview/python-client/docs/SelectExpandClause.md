# SelectExpandClause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_selected** | **bool** |  | [optional] [readonly] 
**selected_items** | **List[object]** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.select_expand_clause import SelectExpandClause

# TODO update the JSON string below
json = "{}"
# create an instance of SelectExpandClause from a JSON string
select_expand_clause_instance = SelectExpandClause.from_json(json)
# print the JSON string representation of the object
print(SelectExpandClause.to_json())

# convert the object into a dict
select_expand_clause_dict = select_expand_clause_instance.to_dict()
# create an instance of SelectExpandClause from a dict
select_expand_clause_from_dict = SelectExpandClause.from_dict(select_expand_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


