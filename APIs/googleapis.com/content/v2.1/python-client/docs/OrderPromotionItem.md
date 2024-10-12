# OrderPromotionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The line item ID of a product. Do not provide for &#x60;orders.createtestorder&#x60;. | [optional] 
**offer_id** | **str** | Required. Offer ID of a product. Only for &#x60;orders.createtestorder&#x60;. | [optional] 
**product_id** | **str** | &#x60;orders.createtestorder&#x60;. | [optional] 
**quantity** | **int** | The quantity of the associated product. Do not provide for &#x60;orders.createtestorder&#x60;. | [optional] 

## Example

```python
from openapi_client.models.order_promotion_item import OrderPromotionItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPromotionItem from a JSON string
order_promotion_item_instance = OrderPromotionItem.from_json(json)
# print the JSON string representation of the object
print(OrderPromotionItem.to_json())

# convert the object into a dict
order_promotion_item_dict = order_promotion_item_instance.to_dict()
# create an instance of OrderPromotionItem from a dict
order_promotion_item_from_dict = OrderPromotionItem.from_dict(order_promotion_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


