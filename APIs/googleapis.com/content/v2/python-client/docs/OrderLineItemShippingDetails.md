# OrderLineItemShippingDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliver_by_date** | **str** | Required. The delivery by date, in ISO 8601 format. | [optional] 
**method** | [**OrderLineItemShippingDetailsMethod**](OrderLineItemShippingDetailsMethod.md) |  | [optional] 
**ship_by_date** | **str** | Required. The ship by date, in ISO 8601 format. | [optional] 
**type** | **str** | Type of shipment. Indicates whether &#x60;deliveryDetails&#x60; or &#x60;pickupDetails&#x60; is applicable for this shipment. Acceptable values are: - \&quot;&#x60;delivery&#x60;\&quot; - \&quot;&#x60;pickup&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_line_item_shipping_details import OrderLineItemShippingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemShippingDetails from a JSON string
order_line_item_shipping_details_instance = OrderLineItemShippingDetails.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemShippingDetails.to_json())

# convert the object into a dict
order_line_item_shipping_details_dict = order_line_item_shipping_details_instance.to_dict()
# create an instance of OrderLineItemShippingDetails from a dict
order_line_item_shipping_details_from_dict = OrderLineItemShippingDetails.from_dict(order_line_item_shipping_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


