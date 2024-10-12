# OrdersUpdateLineItemShippingDetailsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliver_by_date** | **str** | Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can&#39;t be a date in the past. | [optional] 
**line_item_id** | **str** | The ID of the line item to set metadata. Either lineItemId or productId is required. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**product_id** | **str** | The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 
**ship_by_date** | **str** | Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can&#39;t be a date in the past. | [optional] 

## Example

```python
from openapi_client.models.orders_update_line_item_shipping_details_request import OrdersUpdateLineItemShippingDetailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersUpdateLineItemShippingDetailsRequest from a JSON string
orders_update_line_item_shipping_details_request_instance = OrdersUpdateLineItemShippingDetailsRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersUpdateLineItemShippingDetailsRequest.to_json())

# convert the object into a dict
orders_update_line_item_shipping_details_request_dict = orders_update_line_item_shipping_details_request_instance.to_dict()
# create an instance of OrdersUpdateLineItemShippingDetailsRequest from a dict
orders_update_line_item_shipping_details_request_from_dict = OrdersUpdateLineItemShippingDetailsRequest.from_dict(orders_update_line_item_shipping_details_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


