# OrderLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustments** | [**List[OrderLineItemAdjustment]**](OrderLineItemAdjustment.md) | Price and tax adjustments applied on the line item. | [optional] 
**annotations** | [**List[OrderMerchantProvidedAnnotation]**](OrderMerchantProvidedAnnotation.md) | Annotations that are attached to the line item. | [optional] 
**cancellations** | [**List[OrderCancellation]**](OrderCancellation.md) | Cancellations of the line item. | [optional] 
**id** | **str** | The ID of the line item. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**product** | [**OrderLineItemProduct**](OrderLineItemProduct.md) |  | [optional] 
**quantity_canceled** | **int** | Number of items canceled. | [optional] 
**quantity_delivered** | **int** | Number of items delivered. | [optional] 
**quantity_ordered** | **int** | Number of items ordered. | [optional] 
**quantity_pending** | **int** | Number of items pending. | [optional] 
**quantity_ready_for_pickup** | **int** | Number of items ready for pickup. | [optional] 
**quantity_returned** | **int** | Number of items returned. | [optional] 
**quantity_shipped** | **int** | Number of items shipped. | [optional] 
**quantity_undeliverable** | **int** | Number of items undeliverable. | [optional] 
**return_info** | [**OrderLineItemReturnInfo**](OrderLineItemReturnInfo.md) |  | [optional] 
**returns** | [**List[OrderReturn]**](OrderReturn.md) | Returns of the line item. | [optional] 
**shipping_details** | [**OrderLineItemShippingDetails**](OrderLineItemShippingDetails.md) |  | [optional] 
**tax** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_line_item import OrderLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItem from a JSON string
order_line_item_instance = OrderLineItem.from_json(json)
# print the JSON string representation of the object
print(OrderLineItem.to_json())

# convert the object into a dict
order_line_item_dict = order_line_item_instance.to_dict()
# create an instance of OrderLineItem from a dict
order_line_item_from_dict = OrderLineItem.from_dict(order_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


