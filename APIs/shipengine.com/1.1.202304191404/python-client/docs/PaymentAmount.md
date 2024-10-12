# PaymentAmount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | [optional] 

## Example

```python
from openapi_client.models.payment_amount import PaymentAmount

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAmount from a JSON string
payment_amount_instance = PaymentAmount.from_json(json)
# print the JSON string representation of the object
print(PaymentAmount.to_json())

# convert the object into a dict
payment_amount_dict = payment_amount_instance.to_dict()
# create an instance of PaymentAmount from a dict
payment_amount_from_dict = PaymentAmount.from_dict(payment_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


