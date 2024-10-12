# OrderLineItemShippingDetailsMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The carrier for the shipping. Optional. See &#x60;shipments[].carrier&#x60; for a list of acceptable values. | [optional] 
**max_days_in_transit** | **int** | Required. Maximum transit time. | [optional] 
**method_name** | **str** | Required. The name of the shipping method. | [optional] 
**min_days_in_transit** | **int** | Required. Minimum transit time. | [optional] 

## Example

```python
from openapi_client.models.order_line_item_shipping_details_method import OrderLineItemShippingDetailsMethod

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemShippingDetailsMethod from a JSON string
order_line_item_shipping_details_method_instance = OrderLineItemShippingDetailsMethod.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemShippingDetailsMethod.to_json())

# convert the object into a dict
order_line_item_shipping_details_method_dict = order_line_item_shipping_details_method_instance.to_dict()
# create an instance of OrderLineItemShippingDetailsMethod from a dict
order_line_item_shipping_details_method_from_dict = OrderLineItemShippingDetailsMethod.from_dict(order_line_item_shipping_details_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


