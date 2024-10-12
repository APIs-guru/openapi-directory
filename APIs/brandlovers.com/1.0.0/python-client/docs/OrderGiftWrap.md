# OrderGiftWrap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | Defines if giftwrpping is available for this product. | 
**gift_card** | [**GiftCard**](GiftCard.md) |  | [optional] 
**message_support** | **bool** | Defines if giftwrpping is available for this product. | [optional] 
**value** | **int** | Amount charged for gift wrap. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 

## Example

```python
from openapi_client.models.order_gift_wrap import OrderGiftWrap

# TODO update the JSON string below
json = "{}"
# create an instance of OrderGiftWrap from a JSON string
order_gift_wrap_instance = OrderGiftWrap.from_json(json)
# print the JSON string representation of the object
print(OrderGiftWrap.to_json())

# convert the object into a dict
order_gift_wrap_dict = order_gift_wrap_instance.to_dict()
# create an instance of OrderGiftWrap from a dict
order_gift_wrap_from_dict = OrderGiftWrap.from_dict(order_gift_wrap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


