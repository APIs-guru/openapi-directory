# QueryFilter

The filter expression to be used in the export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_and** | [**List[QueryFilter]**](QueryFilter.md) | The logical \&quot;AND\&quot; expression. Must have at least 2 items. | [optional] 
**dimension** | [**QueryComparisonExpression**](QueryComparisonExpression.md) |  | [optional] 
**var_not** | [**QueryFilter**](QueryFilter.md) |  | [optional] 
**var_or** | [**List[QueryFilter]**](QueryFilter.md) | The logical \&quot;OR\&quot; expression. Must have at least 2 items. | [optional] 
**tag** | [**QueryComparisonExpression**](QueryComparisonExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_filter import QueryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of QueryFilter from a JSON string
query_filter_instance = QueryFilter.from_json(json)
# print the JSON string representation of the object
print(QueryFilter.to_json())

# convert the object into a dict
query_filter_dict = query_filter_instance.to_dict()
# create an instance of QueryFilter from a dict
query_filter_from_dict = QueryFilter.from_dict(query_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


