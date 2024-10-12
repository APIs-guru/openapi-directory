# FilterClause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**SingleValueNode**](SingleValueNode.md) |  | [optional] 
**item_type** | [**IEdmTypeReference**](IEdmTypeReference.md) |  | [optional] 
**range_variable** | [**RangeVariable**](RangeVariable.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_clause import FilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of FilterClause from a JSON string
filter_clause_instance = FilterClause.from_json(json)
# print the JSON string representation of the object
print(FilterClause.to_json())

# convert the object into a dict
filter_clause_dict = filter_clause_instance.to_dict()
# create an instance of FilterClause from a dict
filter_clause_from_dict = FilterClause.from_dict(filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


