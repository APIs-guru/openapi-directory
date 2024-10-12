# PaymentCard

A card's non-confidential details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**Address**](Address.md) |  | [optional] 
**bin** | **str** | The first six digits of the card number, known as the Bank Identification Number (BIN). | [optional] 
**card_brand** | **str** | The first six digits of the card number, known as the Bank Identification Number (BIN). | [optional] 
**card_type** | **str** |  | [optional] 
**cardholder_name** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**enabled** | **bool** | Indicates whether or not a card can be used for payments. | [optional] 
**exp_month** | **int** | The expiration month of the associated card as an integer between 1 and 12. | [optional] 
**exp_year** | **int** | The four-digit year of the card&#39;s expiration date. | [optional] 
**fingerprint** | **str** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**last_4** | **str** |  | [optional] 
**merchant_id** | **str** |  | [optional] 
**prepaid_type** | **str** |  | [optional] 
**reference_id** | **str** | An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.payment_card import PaymentCard

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentCard from a JSON string
payment_card_instance = PaymentCard.from_json(json)
# print the JSON string representation of the object
print(PaymentCard.to_json())

# convert the object into a dict
payment_card_dict = payment_card_instance.to_dict()
# create an instance of PaymentCard from a dict
payment_card_from_dict = PaymentCard.from_dict(payment_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


