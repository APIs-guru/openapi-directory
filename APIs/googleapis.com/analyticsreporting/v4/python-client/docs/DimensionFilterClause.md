# DimensionFilterClause

A group of dimension filters. Set the operator value to specify how the filters are logically combined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[DimensionFilter]**](DimensionFilter.md) | The repeated set of filters. They are logically combined based on the operator specified. | [optional] 
**operator** | **str** | The operator for combining multiple dimension filters. If unspecified, it is treated as an &#x60;OR&#x60;. | [optional] 

## Example

```python
from openapi_client.models.dimension_filter_clause import DimensionFilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionFilterClause from a JSON string
dimension_filter_clause_instance = DimensionFilterClause.from_json(json)
# print the JSON string representation of the object
print(DimensionFilterClause.to_json())

# convert the object into a dict
dimension_filter_clause_dict = dimension_filter_clause_instance.to_dict()
# create an instance of DimensionFilterClause from a dict
dimension_filter_clause_from_dict = DimensionFilterClause.from_dict(dimension_filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


