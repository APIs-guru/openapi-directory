# SettlementTransactionAmount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commission** | [**SettlementTransactionAmountCommission**](SettlementTransactionAmountCommission.md) |  | [optional] 
**description** | **str** | The description of the event. Acceptable values are: - \&quot;&#x60;taxWithhold&#x60;\&quot; - \&quot;&#x60;principal&#x60;\&quot; - \&quot;&#x60;principalAdjustment&#x60;\&quot; - \&quot;&#x60;shippingFee&#x60;\&quot; - \&quot;&#x60;merchantRemittedSalesTax&#x60;\&quot; - \&quot;&#x60;googleRemittedSalesTax&#x60;\&quot; - \&quot;&#x60;merchantCoupon&#x60;\&quot; - \&quot;&#x60;merchantCouponTax&#x60;\&quot; - \&quot;&#x60;merchantRemittedDisposalTax&#x60;\&quot; - \&quot;&#x60;googleRemittedDisposalTax&#x60;\&quot; - \&quot;&#x60;merchantRemittedRedemptionFee&#x60;\&quot; - \&quot;&#x60;googleRemittedRedemptionFee&#x60;\&quot; - \&quot;&#x60;eeeEcoFee&#x60;\&quot; - \&quot;&#x60;furnitureEcoFee&#x60;\&quot; - \&quot;&#x60;copyPrivateFee&#x60;\&quot; - \&quot;&#x60;eeeEcoFeeCommission&#x60;\&quot; - \&quot;&#x60;furnitureEcoFeeCommission&#x60;\&quot; - \&quot;&#x60;copyPrivateFeeCommission&#x60;\&quot; - \&quot;&#x60;principalRefund&#x60;\&quot; - \&quot;&#x60;principalRefundTax&#x60;\&quot; - \&quot;&#x60;itemCommission&#x60;\&quot; - \&quot;&#x60;adjustmentCommission&#x60;\&quot; - \&quot;&#x60;shippingFeeCommission&#x60;\&quot; - \&quot;&#x60;commissionRefund&#x60;\&quot; - \&quot;&#x60;damaged&#x60;\&quot; - \&quot;&#x60;damagedOrDefectiveItem&#x60;\&quot; - \&quot;&#x60;expiredItem&#x60;\&quot; - \&quot;&#x60;faultyItem&#x60;\&quot; - \&quot;&#x60;incorrectItemReceived&#x60;\&quot; - \&quot;&#x60;itemMissing&#x60;\&quot; - \&quot;&#x60;qualityNotExpected&#x60;\&quot; - \&quot;&#x60;receivedTooLate&#x60;\&quot; - \&quot;&#x60;storePackageMissing&#x60;\&quot; - \&quot;&#x60;transitPackageMissing&#x60;\&quot; - \&quot;&#x60;unsuccessfulDeliveryUndeliverable&#x60;\&quot; - \&quot;&#x60;wrongChargeInStore&#x60;\&quot; - \&quot;&#x60;wrongItem&#x60;\&quot; - \&quot;&#x60;returns&#x60;\&quot; - \&quot;&#x60;undeliverable&#x60;\&quot; - \&quot;&#x60;issueRelatedRefundAndReplacementAmountDescription&#x60;\&quot; - \&quot;&#x60;refundFromMerchant&#x60;\&quot; - \&quot;&#x60;returnLabelShippingFee&#x60;\&quot; - \&quot;&#x60;lumpSumCorrection&#x60;\&quot; - \&quot;&#x60;pspFee&#x60;\&quot; - \&quot;&#x60;principalRefundDoesNotFit&#x60;\&quot; - \&quot;&#x60;principalRefundOrderedWrongItem&#x60;\&quot; - \&quot;&#x60;principalRefundQualityNotExpected&#x60;\&quot; - \&quot;&#x60;principalRefundBetterPriceFound&#x60;\&quot; - \&quot;&#x60;principalRefundNoLongerNeeded&#x60;\&quot; - \&quot;&#x60;principalRefundChangedMind&#x60;\&quot; - \&quot;&#x60;principalRefundReceivedTooLate&#x60;\&quot; - \&quot;&#x60;principalRefundIncorrectItemReceived&#x60;\&quot; - \&quot;&#x60;principalRefundDamagedOrDefectiveItem&#x60;\&quot; - \&quot;&#x60;principalRefundDidNotMatchDescription&#x60;\&quot; - \&quot;&#x60;principalRefundExpiredItem&#x60;\&quot;  | [optional] 
**transaction_amount** | [**Price**](Price.md) |  | [optional] 
**type** | **str** | The type of the amount. Acceptable values are: - \&quot;&#x60;itemPrice&#x60;\&quot; - \&quot;&#x60;orderPrice&#x60;\&quot; - \&quot;&#x60;refund&#x60;\&quot; - \&quot;&#x60;earlyRefund&#x60;\&quot; - \&quot;&#x60;courtesyRefund&#x60;\&quot; - \&quot;&#x60;returnRefund&#x60;\&quot; - \&quot;&#x60;returnLabelShippingFeeAmount&#x60;\&quot; - \&quot;&#x60;lumpSumCorrectionAmount&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.settlement_transaction_amount import SettlementTransactionAmount

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementTransactionAmount from a JSON string
settlement_transaction_amount_instance = SettlementTransactionAmount.from_json(json)
# print the JSON string representation of the object
print(SettlementTransactionAmount.to_json())

# convert the object into a dict
settlement_transaction_amount_dict = settlement_transaction_amount_instance.to_dict()
# create an instance of SettlementTransactionAmount from a dict
settlement_transaction_amount_from_dict = SettlementTransactionAmount.from_dict(settlement_transaction_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


