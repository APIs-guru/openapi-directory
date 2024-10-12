# QueryGrouping

The group by expression to be used in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the column to group. | 
**type** | [**QueryColumnType**](QueryColumnType.md) |  | 

## Example

```python
from openapi_client.models.query_grouping import QueryGrouping

# TODO update the JSON string below
json = "{}"
# create an instance of QueryGrouping from a JSON string
query_grouping_instance = QueryGrouping.from_json(json)
# print the JSON string representation of the object
print(QueryGrouping.to_json())

# convert the object into a dict
query_grouping_dict = query_grouping_instance.to_dict()
# create an instance of QueryGrouping from a dict
query_grouping_from_dict = QueryGrouping.from_dict(query_grouping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


