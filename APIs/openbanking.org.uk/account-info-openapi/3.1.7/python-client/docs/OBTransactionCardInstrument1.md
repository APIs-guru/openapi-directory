# OBTransactionCardInstrument1

Set of elements to describe the card instrument used in the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation_type** | **str** | The card authorisation type. | [optional] 
**card_scheme_name** | **str** | Name of the card scheme. | 
**identification** | **str** | Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked. | [optional] 
**name** | **str** | Name of the cardholder using the card instrument. | [optional] 

## Example

```python
from openapi_client.models.ob_transaction_card_instrument1 import OBTransactionCardInstrument1

# TODO update the JSON string below
json = "{}"
# create an instance of OBTransactionCardInstrument1 from a JSON string
ob_transaction_card_instrument1_instance = OBTransactionCardInstrument1.from_json(json)
# print the JSON string representation of the object
print(OBTransactionCardInstrument1.to_json())

# convert the object into a dict
ob_transaction_card_instrument1_dict = ob_transaction_card_instrument1_instance.to_dict()
# create an instance of OBTransactionCardInstrument1 from a dict
ob_transaction_card_instrument1_from_dict = OBTransactionCardInstrument1.from_dict(ob_transaction_card_instrument1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


