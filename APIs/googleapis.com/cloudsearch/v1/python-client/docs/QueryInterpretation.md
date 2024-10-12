# QueryInterpretation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interpretation_type** | **str** |  | [optional] 
**interpreted_query** | **str** | The interpretation of the query used in search. For example, queries with natural language intent like \&quot;email from john\&quot; will be interpreted as \&quot;from:john source:mail\&quot;. This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY. | [optional] 
**reason** | **str** | The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE. | [optional] 

## Example

```python
from openapi_client.models.query_interpretation import QueryInterpretation

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInterpretation from a JSON string
query_interpretation_instance = QueryInterpretation.from_json(json)
# print the JSON string representation of the object
print(QueryInterpretation.to_json())

# convert the object into a dict
query_interpretation_dict = query_interpretation_instance.to_dict()
# create an instance of QueryInterpretation from a dict
query_interpretation_from_dict = QueryInterpretation.from_dict(query_interpretation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


