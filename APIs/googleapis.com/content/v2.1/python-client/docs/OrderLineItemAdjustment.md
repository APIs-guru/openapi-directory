# OrderLineItemAdjustment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_adjustment** | [**Price**](Price.md) |  | [optional] 
**tax_adjustment** | [**Price**](Price.md) |  | [optional] 
**type** | **str** | Type of this adjustment. Acceptable values are: - \&quot;&#x60;promotion&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_line_item_adjustment import OrderLineItemAdjustment

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemAdjustment from a JSON string
order_line_item_adjustment_instance = OrderLineItemAdjustment.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemAdjustment.to_json())

# convert the object into a dict
order_line_item_adjustment_dict = order_line_item_adjustment_instance.to_dict()
# create an instance of OrderLineItemAdjustment from a dict
order_line_item_adjustment_from_dict = OrderLineItemAdjustment.from_dict(order_line_item_adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


