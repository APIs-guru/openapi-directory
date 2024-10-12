# OrderCancellation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **str** | The actor that created the cancellation. Acceptable values are: - \&quot;&#x60;customer&#x60;\&quot; - \&quot;&#x60;googleBot&#x60;\&quot; - \&quot;&#x60;googleCustomerService&#x60;\&quot; - \&quot;&#x60;googlePayments&#x60;\&quot; - \&quot;&#x60;googleSabre&#x60;\&quot; - \&quot;&#x60;merchant&#x60;\&quot;  | [optional] 
**creation_date** | **str** | Date on which the cancellation has been created, in ISO 8601 format. | [optional] 
**quantity** | **int** | The quantity that was canceled. | [optional] 
**reason** | **str** | The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This won&#39;t affect your Shopping ads. Acceptable values are: - \&quot;&#x60;autoPostInternal&#x60;\&quot; - \&quot;&#x60;autoPostInvalidBillingAddress&#x60;\&quot; - \&quot;&#x60;autoPostNoInventory&#x60;\&quot; - \&quot;&#x60;autoPostPriceError&#x60;\&quot; - \&quot;&#x60;autoPostUndeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;couponAbuse&#x60;\&quot; - \&quot;&#x60;customerCanceled&#x60;\&quot; - \&quot;&#x60;customerInitiatedCancel&#x60;\&quot; - \&quot;&#x60;customerSupportRequested&#x60;\&quot; - \&quot;&#x60;failToPushOrderGoogleError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantError&#x60;\&quot; - \&quot;&#x60;failToPushOrderMerchantFulfillmentError&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchant&#x60;\&quot; - \&quot;&#x60;failToPushOrderToMerchantOutOfStock&#x60;\&quot; - \&quot;&#x60;invalidCoupon&#x60;\&quot; - \&quot;&#x60;malformedShippingAddress&#x60;\&quot; - \&quot;&#x60;merchantDidNotShipOnTime&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;orderTimeout&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;paymentAbuse&#x60;\&quot; - \&quot;&#x60;paymentDeclined&#x60;\&quot; - \&quot;&#x60;priceError&#x60;\&quot; - \&quot;&#x60;returnRefundAbuse&#x60;\&quot; - \&quot;&#x60;shippingPriceError&#x60;\&quot; - \&quot;&#x60;taxError&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;unsupportedPoBoxAddress&#x60;\&quot; - \&quot;&#x60;failedToCaptureFunds&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.order_cancellation import OrderCancellation

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCancellation from a JSON string
order_cancellation_instance = OrderCancellation.from_json(json)
# print the JSON string representation of the object
print(OrderCancellation.to_json())

# convert the object into a dict
order_cancellation_dict = order_cancellation_instance.to_dict()
# create an instance of OrderCancellation from a dict
order_cancellation_from_dict = OrderCancellation.from_dict(order_cancellation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


