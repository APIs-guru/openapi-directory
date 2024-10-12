# PivotOrderBy

Sorts by a pivot column group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | In the response to order by, order rows by this column. Must be a metric name from the request. | [optional] 
**pivot_selections** | [**List[PivotSelection]**](PivotSelection.md) | Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row&#39;s dimension name and value pair. | [optional] 

## Example

```python
from openapi_client.models.pivot_order_by import PivotOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of PivotOrderBy from a JSON string
pivot_order_by_instance = PivotOrderBy.from_json(json)
# print the JSON string representation of the object
print(PivotOrderBy.to_json())

# convert the object into a dict
pivot_order_by_dict = pivot_order_by_instance.to_dict()
# create an instance of PivotOrderBy from a dict
pivot_order_by_from_dict = PivotOrderBy.from_dict(pivot_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


