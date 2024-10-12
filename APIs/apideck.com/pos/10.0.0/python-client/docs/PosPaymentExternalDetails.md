# PosPaymentExternalDetails

Details about an external payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | A description of the external payment source. For example,  \&quot;Food Delivery Service\&quot;. | 
**source_fee_amount** | **float** | The fees paid to the source. The amount minus this field is the net amount seller receives. | [optional] 
**source_id** | **str** | An ID to associate the payment to its originating source. | [optional] 
**type** | **str** | The type of external payment the seller received. It can be one of the following: - CHECK - Paid using a physical check. - BANK_TRANSFER - Paid using external bank transfer. - OTHER\\_GIFT\\_CARD - Paid using a non-Square gift card. - CRYPTO - Paid using a crypto currency. - SQUARE_CASH - Paid using Square Cash App. - SOCIAL - Paid using peer-to-peer payment applications. - EXTERNAL - A third-party application gathered this payment outside of Square. - EMONEY - Paid using an E-money provider. - CARD - A credit or debit card that Square does not support. - STORED_BALANCE - Use for house accounts, store credit, and so forth. - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals - OTHER - A type not listed here. | 

## Example

```python
from openapi_client.models.pos_payment_external_details import PosPaymentExternalDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PosPaymentExternalDetails from a JSON string
pos_payment_external_details_instance = PosPaymentExternalDetails.from_json(json)
# print the JSON string representation of the object
print(PosPaymentExternalDetails.to_json())

# convert the object into a dict
pos_payment_external_details_dict = pos_payment_external_details_instance.to_dict()
# create an instance of PosPaymentExternalDetails from a dict
pos_payment_external_details_from_dict = PosPaymentExternalDetails.from_dict(pos_payment_external_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


