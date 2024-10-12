# OrderRefundAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | Specifies an order creation date in format Y-m-d H:i:s | [optional] 
**fee_price** | **float** | Specifies refund&#39;s fee price | [optional] 
**is_online** | **bool** | Indicates whether refund type is online | [optional] [default to False]
**item_restock** | **bool** | Boolean, whether or not to add the line items back to the store inventory. | [optional] [default to False]
**items** | [**List[OrderRefundAddItemsInner]**](OrderRefundAddItemsInner.md) | Defines items in the order that will be refunded | [optional] 
**message** | **str** | Refund reason, or some else message which assigned to refund. | [optional] 
**order_id** | **str** | Defines the order for which the refund will be created. | [optional] 
**send_notifications** | **bool** | Send notifications to customer after refund was created | [optional] [default to False]
**shipping_price** | **float** | Defines refund shipping amount. | [optional] 
**total_price** | **float** | Defines order refund amount. | [optional] 

## Example

```python
from openapi_client.models.order_refund_add import OrderRefundAdd

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefundAdd from a JSON string
order_refund_add_instance = OrderRefundAdd.from_json(json)
# print the JSON string representation of the object
print(OrderRefundAdd.to_json())

# convert the object into a dict
order_refund_add_dict = order_refund_add_instance.to_dict()
# create an instance of OrderRefundAdd from a dict
order_refund_add_from_dict = OrderRefundAdd.from_dict(order_refund_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


