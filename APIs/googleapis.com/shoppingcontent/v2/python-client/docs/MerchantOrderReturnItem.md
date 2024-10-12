# MerchantOrderReturnItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_return_reason** | [**CustomerReturnReason**](CustomerReturnReason.md) |  | [optional] 
**item_id** | **str** | Product level item ID. If the returned items are of the same product, they will have the same ID. | [optional] 
**merchant_return_reason** | [**RefundReason**](RefundReason.md) |  | [optional] 
**product** | [**OrderLineItemProduct**](OrderLineItemProduct.md) |  | [optional] 
**return_shipment_ids** | **List[str]** | IDs of the return shipments that this return item belongs to. | [optional] 
**state** | **str** | State of the item. Acceptable values are: - \&quot;&#x60;canceled&#x60;\&quot; - \&quot;&#x60;new&#x60;\&quot; - \&quot;&#x60;received&#x60;\&quot; - \&quot;&#x60;refunded&#x60;\&quot; - \&quot;&#x60;rejected&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.merchant_order_return_item import MerchantOrderReturnItem

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantOrderReturnItem from a JSON string
merchant_order_return_item_instance = MerchantOrderReturnItem.from_json(json)
# print the JSON string representation of the object
print(MerchantOrderReturnItem.to_json())

# convert the object into a dict
merchant_order_return_item_dict = merchant_order_return_item_instance.to_dict()
# create an instance of MerchantOrderReturnItem from a dict
merchant_order_return_item_from_dict = MerchantOrderReturnItem.from_dict(merchant_order_return_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


