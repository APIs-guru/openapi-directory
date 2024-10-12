# OrderBy

Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **bool** | If true, sorts by descending order. | [optional] 
**dimension** | [**DimensionOrderBy**](DimensionOrderBy.md) |  | [optional] 
**metric** | [**MetricOrderBy**](MetricOrderBy.md) |  | [optional] 
**pivot** | [**PivotOrderBy**](PivotOrderBy.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_by import OrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of OrderBy from a JSON string
order_by_instance = OrderBy.from_json(json)
# print the JSON string representation of the object
print(OrderBy.to_json())

# convert the object into a dict
order_by_dict = order_by_instance.to_dict()
# create an instance of OrderBy from a dict
order_by_from_dict = OrderBy.from_dict(order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


