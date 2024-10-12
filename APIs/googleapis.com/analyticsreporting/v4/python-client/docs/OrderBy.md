# OrderBy

Specifies the sorting options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | The field which to sort by. The default sort order is ascending. Example: &#x60;ga:browser&#x60;. Note, that you can only specify one field for sort here. For example, &#x60;ga:browser, ga:city&#x60; is not valid. | [optional] 
**order_type** | **str** | The order type. The default orderType is &#x60;VALUE&#x60;. | [optional] 
**sort_order** | **str** | The sorting order for the field. | [optional] 

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


