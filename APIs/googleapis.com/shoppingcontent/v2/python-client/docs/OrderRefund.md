# OrderRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **str** | The actor that created the refund. Acceptable values are: - \&quot;&#x60;customer&#x60;\&quot; - \&quot;&#x60;googleBot&#x60;\&quot; - \&quot;&#x60;googleCustomerService&#x60;\&quot; - \&quot;&#x60;googlePayments&#x60;\&quot; - \&quot;&#x60;googleSabre&#x60;\&quot; - \&quot;&#x60;merchant&#x60;\&quot;  | [optional] 
**amount** | [**Price**](Price.md) |  | [optional] 
**creation_date** | **str** | Date on which the item has been created, in ISO 8601 format. | [optional] 
**reason** | **str** | The reason for the refund. Acceptable values are: - \&quot;&#x60;adjustment&#x60;\&quot; - \&quot;&#x60;autoPostInternal&#x60;\&quot; - \&quot;&#x60;autoPostInvalidBillingAddress&#x60;\&quot; - \&quot;&#x60;autoPostNoInventory&#x60;\&quot; - \&quot;&#x60;autoPostPriceError&#x60;\&quot; - \&quot;&#x60;autoPostUndeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;couponAbuse&#x60;\&quot; - \&quot;&#x60;courtesyAdjustment&#x60;\&quot; - \&quot;&#x60;customerCanceled&#x60;\&quot; - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;customerInitiatedMerchantCancel&#x60;\&quot; - \&quot;&#x60;customerSupportRequested&#x60;\&quot; - \&quot;&#x60;deliveredLateByCarrier&#x60;\&quot; - \&quot;&#x60;deliveredTooLate&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;failToPushOrderGoogleError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantFulfillmentError&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchant&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchantOutOfStock&#x60;\&quot; - \&quot;&#x60;feeAdjustment&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;lateShipmentCredit&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;merchantDidNotShipOnTime&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;orderTimeout&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;paymentAbuse&#x60;\&quot; - \&quot;&#x60;paymentDeclined&#x60;\&quot; - \&quot;&#x60;priceAdjustment&#x60;\&quot; - \&quot;&#x60;priceError&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;promoReallocation&#x60;\&quot; - \&quot;&#x60;qualityNotAsExpected&#x60;\&quot; - \&quot;&#x60;returnRefundAbuse&#x60;\&quot; - \&quot;&#x60;shippingCostAdjustment&#x60;\&quot; - \&quot;&#x60;shippingPriceError&#x60;\&quot; - \&quot;&#x60;taxAdjustment&#x60;\&quot; - \&quot;&#x60;taxError&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.order_refund import OrderRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefund from a JSON string
order_refund_instance = OrderRefund.from_json(json)
# print the JSON string representation of the object
print(OrderRefund.to_json())

# convert the object into a dict
order_refund_dict = order_refund_instance.to_dict()
# create an instance of OrderRefund from a dict
order_refund_from_dict = OrderRefund.from_dict(order_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


