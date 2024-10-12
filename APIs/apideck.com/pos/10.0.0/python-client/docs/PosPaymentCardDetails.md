# PosPaymentCardDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**PaymentCard**](PaymentCard.md) |  | [optional] 

## Example

```python
from openapi_client.models.pos_payment_card_details import PosPaymentCardDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PosPaymentCardDetails from a JSON string
pos_payment_card_details_instance = PosPaymentCardDetails.from_json(json)
# print the JSON string representation of the object
print(PosPaymentCardDetails.to_json())

# convert the object into a dict
pos_payment_card_details_dict = pos_payment_card_details_instance.to_dict()
# create an instance of PosPaymentCardDetails from a dict
pos_payment_card_details_from_dict = PosPaymentCardDetails.from_dict(pos_payment_card_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


