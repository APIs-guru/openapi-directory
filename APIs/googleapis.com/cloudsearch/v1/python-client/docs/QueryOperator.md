# QueryOperator

The definition of a operator that can be used in a Search/Suggest request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the operator | [optional] 
**enum_values** | **List[str]** | Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator. | [optional] 
**greater_than_operator_name** | **str** | Indicates the operator name that can be used to isolate the property using the greater-than operator. | [optional] 
**is_facetable** | **bool** | Can this operator be used to get facets. | [optional] 
**is_repeatable** | **bool** | Indicates if multiple values can be set for this property. | [optional] 
**is_returnable** | **bool** | Will the property associated with this facet be returned as part of search results. | [optional] 
**is_sortable** | **bool** | Can this operator be used to sort results. | [optional] 
**is_suggestable** | **bool** | Can get suggestions for this field. | [optional] 
**less_than_operator_name** | **str** | Indicates the operator name that can be used to isolate the property using the less-than operator. | [optional] 
**object_type** | **str** | The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators. | [optional] 
**operator_name** | **str** | The name of the operator. | [optional] 
**type** | **str** | The type of the operator. | [optional] 

## Example

```python
from openapi_client.models.query_operator import QueryOperator

# TODO update the JSON string below
json = "{}"
# create an instance of QueryOperator from a JSON string
query_operator_instance = QueryOperator.from_json(json)
# print the JSON string representation of the object
print(QueryOperator.to_json())

# convert the object into a dict
query_operator_dict = query_operator_instance.to_dict()
# create an instance of QueryOperator from a dict
query_operator_from_dict = QueryOperator.from_dict(query_operator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


