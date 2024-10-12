# TestOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**TestOrderCustomer**](TestOrderCustomer.md) |  | [optional] 
**enable_orderinvoices** | **bool** | Whether the orderinvoices service should support this order. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#testOrder&#x60;\&quot; | [optional] 
**line_items** | [**List[TestOrderLineItem]**](TestOrderLineItem.md) | Required. Line items that are ordered. At least one line item must be provided. | [optional] 
**notification_mode** | **str** | Restricted. Do not use. | [optional] 
**payment_method** | [**TestOrderPaymentMethod**](TestOrderPaymentMethod.md) |  | [optional] 
**predefined_delivery_address** | **str** | Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - \&quot;&#x60;dwight&#x60;\&quot; - \&quot;&#x60;jim&#x60;\&quot; - \&quot;&#x60;pam&#x60;\&quot;  | [optional] 
**predefined_pickup_details** | **str** | Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type &#x60;pickup&#x60;. Acceptable values are: - \&quot;&#x60;dwight&#x60;\&quot; - \&quot;&#x60;jim&#x60;\&quot; - \&quot;&#x60;pam&#x60;\&quot;  | [optional] 
**promotions** | [**List[OrderLegacyPromotion]**](OrderLegacyPromotion.md) | Deprecated. Ignored if provided. | [optional] 
**shipping_cost** | [**Price**](Price.md) |  | [optional] 
**shipping_cost_tax** | [**Price**](Price.md) |  | [optional] 
**shipping_option** | **str** | Required. The requested shipping option. Acceptable values are: - \&quot;&#x60;economy&#x60;\&quot; - \&quot;&#x60;expedited&#x60;\&quot; - \&quot;&#x60;oneDay&#x60;\&quot; - \&quot;&#x60;sameDay&#x60;\&quot; - \&quot;&#x60;standard&#x60;\&quot; - \&quot;&#x60;twoDay&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.test_order import TestOrder

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrder from a JSON string
test_order_instance = TestOrder.from_json(json)
# print the JSON string representation of the object
print(TestOrder.to_json())

# convert the object into a dict
test_order_dict = test_order_instance.to_dict()
# create an instance of TestOrder from a dict
test_order_from_dict = TestOrder.from_dict(test_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


